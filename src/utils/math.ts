export function degreeToRadian(deg: number): number {
  return deg * (Math.PI / 180);
}

export function mapping(value: number, min1: number, max1: number, min2: number, max2: number): number {
  // (X-A)/(B-A) * (D-C) + C
  return ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;
}
