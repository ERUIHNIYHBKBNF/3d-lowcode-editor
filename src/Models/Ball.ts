import * as THREE from "three";
import type { AmmoPhysics } from '@enable3d/ammo-physics';
import earthPic from "@/assets/earth.jpg";

export function addBall(physics: AmmoPhysics) {
  const radius = 2;
  const position = { x: 0, y: radius + 5, z: 0 };

  const ball = physics.add.sphere({
    radius,
    x: position.x,
    y: position.y,
    z: position.z,
    widthSegments: 64,
    heightSegments: 64,
  }, {
    custom: new THREE.MeshPhysicalMaterial({ map: loadSkin(earthPic) }),
  });
  ball.body.setFriction(114514); // 不允许小球滑动
  ball.body.ammo.setRollingFriction(6);

  return ball;
}

// 加载皮肤
function loadSkin(url: string) {
  const marbleLoader = new THREE.TextureLoader();
  const marbleTexture = marbleLoader.load(earthPic);
  marbleTexture.wrapS = marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.repeat.set(1, 1);
  marbleTexture.anisotropy = 1;
  marbleTexture.encoding = THREE.sRGBEncoding;
  return marbleTexture;
}