import * as THREE from "three";
import type { Material, Scene } from "three";
import type { AmmoPhysics, ExtendedObject3D } from "@enable3d/ammo-physics";

type Vec3 = { x: number; y: number; z: number };

export function addGridPlane(scene: Scene, physics: AmmoPhysics) {
  const position = { x: 0, y: -0.25, z: 0 }; // 平面的位置
  const scale = { x: 175, y: 0.5, z: 175 }; // 平面的大小(y轴为厚度)
  const wallScale = { x: 175, y: 4, z: 0.125 }; // 墙壁的尺寸（长度、高度、厚度）

  // 绘制网格
  const grid = new THREE.GridHelper(175, 20, 0xffffff, 0xffffff);
  (grid.material as Material).opacity = 0.5;
  (grid.material as Material).transparent = true;
  scene.add(grid);

  const staticConfig = { collisionFlags: 1 };
  // 创建网格平面
  const blockPlane = BlockPlane(position, scale);
  physics.add.existing(blockPlane as unknown as ExtendedObject3D, staticConfig);

  // 创建四周围墙
  const wall1 = Wall(0, 1.75, 87.5, wallScale);
  physics.add.existing(wall1 as unknown as ExtendedObject3D, staticConfig);
  const wall2 = Wall(0, 1.75, -87.5, wallScale);
  physics.add.existing(wall2 as unknown as ExtendedObject3D, staticConfig);
  [wallScale.x, wallScale.z] = [wallScale.z, wallScale.x];
  const wall3 = Wall(87.5, 1.75, 0, wallScale);
  physics.add.existing(wall3 as unknown as ExtendedObject3D, staticConfig);
  const wall4 = Wall(-87.5, 1.75, 0, wallScale);
  physics.add.existing(wall4 as unknown as ExtendedObject3D, staticConfig);
  // 不加这一行似乎会丢失材质
  scene.add(wall1, wall2, wall3, wall4);
}

function BlockPlane(position: Vec3, scale: Vec3) {
  const blockPlane = new THREE.Mesh(
    new THREE.BoxGeometry(scale.x, scale.y, scale.z),
    new THREE.MeshPhongMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.25,
    })
  );
  blockPlane.position.set(position.x, position.y, position.z);
  blockPlane.receiveShadow = true;
  return blockPlane;
}

function Wall(x: number, y: number, z: number, scale: Vec3) {
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(scale.x, scale.y, scale.z),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      opacity: 0.75,
      transparent: true,
    })
  );
  wall.position.set(x, y, z);
  wall.receiveShadow = true;
  return wall;
}
