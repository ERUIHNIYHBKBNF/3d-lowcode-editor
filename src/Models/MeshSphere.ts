/* 创建一个没啥用的网格球 */
import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

export function MeshSphere(): Mesh & { animation?: () => void } {
  const geometry = new SphereGeometry(1, 64, 64);
  const material = new MeshBasicMaterial({
    color: 0xaaffff,
    wireframe: true,
    wireframeLinewidth: 1,
  });
  return new Mesh(geometry, material);
}
