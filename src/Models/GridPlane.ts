import * as THREE from "three";
import type { Material, Scene } from "three";

export function addGridPlane(scene: Scene) {
  const position = { x: 0, y: -0.25, z: 0 }; // 平面的位置
  const scale = { x: 175, y: 0.5, z: 175 }; // 平面的大小(y轴为厚度)

  // 绘制网格
  const grid = new THREE.GridHelper(175, 20, 0xffffff, 0xffffff);
  (grid.material as Material).opacity = 0.5;
  (grid.material as Material).transparent = true;
  scene.add(grid);

  // 创建网格平面
  const blockPlane = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshPhongMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.25,
    })
  );
  blockPlane.position.set(position.x, position.y, position.z);
  blockPlane.scale.set(scale.x, scale.y, scale.z);
  blockPlane.receiveShadow = true;
  scene.add(blockPlane);
}
