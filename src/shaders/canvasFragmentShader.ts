const fragmentShader = `
# define SPEED_OF_LIGHT 1.0
# define EVENT_HORIZON_RADIUS 1.0
# define BACKGROUND_DISTANCE 10000.0
# define PROJECTION_DISTANCE 1.0
# define SCALE_FACTOR 1.0
# define PI 3.14159265359

// ----------
// -uniforms-
// ----------
uniform float uAccretionDisk;
uniform sampler2D uCanvasTexture;
uniform vec2 uResolution;
uniform vec3 uCameraPosition;
uniform vec3 uCameraForward;
uniform vec3 uCameraRight;
uniform vec3 uCameraUp;
uniform float uPov;
uniform int uMaxIterations;
uniform float uStepSize;
uniform float uDiskTime;

// -----------
// -variables-
// -----------

vec3 bh_pos = vec3(0.0, 0.0, 0.0);

float innerDiskRadius = 2.0;
float outerDiskRadius = 8.0;


// -----------------
// MATRIX TRANSFORMS
// -----------------
mat4 identityMat(){
    return mat4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}

mat4 translate_ColOrder(float x, float y, float z){
    return mat4(
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
    );
}

mat4 translate_RowOrder(float x, float y, float z){
    return mat4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    );
}

mat4 scale(float x, float y, float z){
    return mat4(
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    );
}

mat4 rotate_x(float theta){
    return mat4(
        1, 0, 0, 0,
        0, cos(theta), -sin(theta), 0,
        0, sin(theta), cos(theta), 0,
        0, 0, 0, 1
    );
}

mat4 rotate_y(float theta){
    return mat4(
        cos(theta), 0, sin(theta), 0,
        0, 1, 0, 0,
        -sin(theta), 0, cos(theta), 0,
        0, 0, 0, 1
    );
}

mat4 rotate_z(float theta){
    return mat4(
        cos(theta), -sin(theta), 0, 0,
        sin(theta), cos(theta), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}

// ---------------------------
// -- FBM -> ACCRETION DISK---
// ---------------------------
float hash(float n) { 
      return fract(sin(n) * 753.5453123); 
}

float MappingRange(float X, float A, float B, float C, float D){
    //(X-A)/(B-A) * (D-C) + C
    return (X - A) / (B - A) * (D - C) + C;
}

float noise(vec3 x) {
      vec3 p = floor(x);
      vec3 f = fract(x);
      f = f * f * (3.0 - 2.0 * f);
      float n = p.x + p.y * 157.0 + 113.0 * p.z;

      return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
          mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
          mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
          mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

// open this article to learn more about the FBM
// https://iquilezles.org/articles/fbm/
float fbm(vec3 pos, const int numOctaves, const float iterScale, const float detail, const float weight) {
      float mul = weight;
      float add = 1.0 - 0.5 * mul;
      float t = noise(pos) * mul + add;

      for (int i = 1; i < numOctaves; ++i) {
          pos *= iterScale;
          mul = exp2(log2(weight) - float(i) / detail);
          add = 1.0 - 0.5 * mul;
          t *= noise(pos) * mul + add;
      }
      
      return t;
}

//--------------------------------------------------
//-ADJUST COORDINATE FROM PIXEL TO WORLD COORDINATE-
//--------------------------------------------------
struct Ray{
    vec4 origin;
    vec4 direction;
};

Ray pixelToWorldRay(){
    float pov_rad = radians(uPov);
    float image_plane_height = PROJECTION_DISTANCE * 2.0 * tan(0.5 * pov_rad);
    vec2 screen = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
    screen.x *= uResolution.x / uResolution.y;
    vec3 direction = normalize(
        uCameraForward * PROJECTION_DISTANCE +
        uCameraRight * screen.x * image_plane_height * 0.5 +
        uCameraUp * screen.y * image_plane_height * 0.5
    );

    Ray ray;
    ray.origin = vec4(uCameraPosition, 1.0);
    ray.direction = vec4(direction, 0.0);

    return ray;
}

// -----------------------------------
//      ------- BLACK HOLE --------
// -----------------------------------

// relativistic orbital dynamics
// The Newtonian gravity that appears when deriving orbits from 
// schwarzschild metric
vec3 geodesic_equation(vec3 position, float h2){
    return -(3.0/2.0) * h2 * position / pow(length(position), 5.0);
}

vec4 intersect_sphere(Ray ray, float radius){
    float a = dot(ray.direction, ray.direction);
    float b = dot(ray.direction, ray.origin) * 2.0;
    float c = dot(ray.origin, ray.origin) - radius * radius;

    float d = b * b - 4.0 * a * c;
    float q = -0.5 * (b + sign(b) * sqrt(d));

    float r1 = q/a;
    float r2 = c/q;

    float i = max(r1, r2);
    return ray.origin + i * ray.direction;
}

vec4 GetColor(Ray ray){
    vec4 positioned = intersect_sphere(ray, BACKGROUND_DISTANCE);

    // Polar coordinate of the intersection.
    float dist = length(vec2(positioned.x, positioned.z));
    float theta = atan(positioned.x / positioned.z);
    float new_z = positioned.y;
    // map the polar coordinates to the texture
    vec2 new_coord = vec2(theta/PI + 0.5, new_z/(2.0 * BACKGROUND_DISTANCE) + 0.5);

    return texture2D(uCanvasTexture, new_coord);
}

vec3 accretionDiskColor(vec3 hit, Ray ray, float stepSize){
    float radius = length(hit.xz);
    float radial_t = clamp((radius - innerDiskRadius) / (outerDiskRadius - innerDiskRadius), 0.0, 1.0);
    float angle = atan(hit.z, hit.x);
    float disk_time = uDiskTime;

    float coherent_rotation = disk_time * 0.09;
    float kepler_rotation = disk_time * 0.34 / pow(radius, 1.5);
    float arm_angle = angle - coherent_rotation;
    float local_angle = angle - coherent_rotation - kepler_rotation;

    vec2 arm_sample = vec2(cos(arm_angle), sin(arm_angle)) * radius;
    vec2 local_sample = vec2(cos(local_angle), sin(local_angle)) * radius;

    float fine_noise = fbm(vec3(local_sample * 1.7, radial_t * 3.4), 4, 2.15, 1.1, 0.9);
    float grain_noise = fbm(vec3(local_sample * 4.2, radial_t * 7.0 + disk_time * 0.012), 3, 2.4, 1.0, 0.75);

    float pitch = 3.55;
    float two_arm_spiral = 2.0 * arm_angle - pitch * log(radius / innerDiskRadius);
    float three_arm_detail = 3.0 * arm_angle - pitch * 1.28 * log(radius / innerDiskRadius) + fine_noise * 0.55;
    float primary_arm = pow(0.5 + 0.5 * cos(two_arm_spiral), 5.0);
    float secondary_arm = pow(0.5 + 0.5 * cos(three_arm_detail), 8.0);
    float arm_mask = clamp(primary_arm + secondary_arm * 0.35, 0.0, 1.0);
    float spiral_structure = mix(0.48, 2.35, smoothstep(0.08, 0.82, arm_mask));

    float rotating_streaks = 0.5 + 0.5 * sin(local_angle * 11.0 + radius * 3.8 + fine_noise * 2.2);
    float hot_streaks = mix(0.78, 1.48, smoothstep(0.54, 0.96, rotating_streaks));

    float inner_edge = smoothstep(innerDiskRadius, innerDiskRadius + 0.35, radius);
    float outer_edge = 1.0 - smoothstep(outerDiskRadius - 1.2, outerDiskRadius, radius);
    float disk_alpha = inner_edge * outer_edge;

    float heat = pow(1.0 - radial_t, 1.55);
    vec3 hot_color = vec3(1.0, 0.88, 0.58);
    vec3 mid_color = vec3(1.0, 0.42, 0.12);
    vec3 outer_color = vec3(0.42, 0.09, 0.035);
    vec3 disk_color = mix(mid_color, outer_color, smoothstep(0.32, 1.0, radial_t));
    disk_color = mix(disk_color, hot_color, 1.0 - smoothstep(0.0, 0.18, radial_t));

    vec3 tangent = normalize(vec3(-hit.z, 0.0, hit.x));
    float orbital_alignment = dot(normalize(ray.direction.xyz), tangent);
    float doppler = pow(clamp(1.0 + orbital_alignment * 0.68, 0.34, 1.92), 2.0);

    float turbulence = mix(0.78, 1.28, fine_noise) * mix(0.90, 1.14, grain_noise);
    float optical_depth = clamp(stepSize * 22.0, 0.18, 2.05);
    float luminosity = disk_alpha * optical_depth * (0.68 + heat * 4.4) * spiral_structure * hot_streaks * turbulence * doppler;

    return disk_color * luminosity;
}

vec4 compute(inout vec3 position, inout vec3 velocity, inout Ray ray){
    // check if an object is in the event horizon or not
    // and perform the integration 
    // we gonna use the Runge kutta integration , because it's more accurate than euler integration

    // angular momentum constants in the geodesic equation
    vec3 perpendicular = cross(position, velocity);
    float mag = length(perpendicular);
    float h2 = pow(mag, 2.0);

    vec4 color = vec4(1.0);

    for(int i = 0; i < uMaxIterations; i++){
        // calculate the distance between the ray and the black hole 
        // assuming the black hole is at : vec3(0, 0, 0);
        float dist = length(position);

        float step_size = dist * dist * uStepSize;
        vec3 rk_delta = velocity * step_size;

        // RK-4 = runge-kutta integration
        vec3 k1 = step_size * geodesic_equation(position, h2);
        vec3 k2 = step_size * geodesic_equation(position + rk_delta + 0.5 * k1, h2);
        vec3 k3 = step_size * geodesic_equation(position + rk_delta + 0.5 * k2, h2);
        vec3 k4 = step_size * geodesic_equation(position + rk_delta + k3, h2);

        vec3 d = (k1 + 2.0 * (k2 + k3) + k4) / 6.0;

        vec3 previousPosition = position;
        vec3 nextPosition = position + rk_delta;

        if(uAccretionDisk == 1.0 && abs(previousPosition.y - nextPosition.y) > 0.0001 && previousPosition.y * nextPosition.y <= 0.0){
            float crossing = previousPosition.y / (previousPosition.y - nextPosition.y);
            if(crossing >= 0.0 && crossing <= 1.0){
                vec3 disk_hit = mix(previousPosition, nextPosition, crossing);
                float disk_radius = length(disk_hit.xz);

                if(disk_radius > innerDiskRadius && disk_radius < outerDiskRadius){
                    vec3 hit_velocity = normalize(velocity + d * crossing);
                    Ray background_ray;
                    background_ray.origin = vec4(disk_hit, 1.0);
                    background_ray.direction = vec4(hit_velocity, 0.0);

                    vec3 disk_emission = accretionDiskColor(disk_hit, background_ray, step_size);
                    return GetColor(background_ray) + vec4(disk_emission, 1.0);
                }
            }
        }

        if(dist >= BACKGROUND_DISTANCE){
            break;
        }
        // In case the ray falls in the event horizon
        if(dist <= EVENT_HORIZON_RADIUS){
            // return true;
            return vec4(0.0, 0.0, 0.0, 1.0);
        }
        // update the position and velocity
        position += rk_delta;
        velocity += d;
    }

    ray.origin = vec4(position, 1.0);
    ray.direction = vec4(velocity, 0.0);

    return GetColor(ray);
}

void main() {
    Ray ray = pixelToWorldRay();

    vec3 position = vec3(ray.origin);
    vec3 velocity = SPEED_OF_LIGHT * normalize(vec3(ray.direction));
    
    vec4 color = compute(position, velocity, ray);

    //glow value
    float glow = 0.01/length(ray.origin);
    glow = clamp(glow, 0.0, 1.0) * 12.0;

    gl_FragColor = color + glow;
}
`;

export default fragmentShader;
