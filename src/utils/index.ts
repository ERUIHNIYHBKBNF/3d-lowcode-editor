/**
 * 百分比表示top&left
 */
export function xz2tl(x: number, z: number, length: number): [number, number] {
  return [
    (z + length / 2) / length,
    (x + length / 2) / length,
  ];
}

export function tl2xz(t: number, l: number, length: number): [number, number] {
  return [
    l * length - length / 2,
    t * length - length / 2,
  ];
}