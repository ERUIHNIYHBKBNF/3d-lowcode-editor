import * as THREE from "three";
import type { AmmoPhysics } from '@enable3d/ammo-physics';

export function addBall(physics: AmmoPhysics, options: BallCreateOptions) {
  const {
    radius,
    position,
    widthSegments = 32,
    heightSegments = 32,
    customUrl = "./assets/earth.jpg",
    friction = 114514, // 默认不允许小球滑动
    rollingFriction = 6,
    gravity = -9.8,
  } = options;

  const ball = physics.add.sphere({
    radius,
    x: position.x,
    y: position.y,
    z: position.z,
    widthSegments,
    heightSegments,
  }, {
    custom: new THREE.MeshLambertMaterial({ map: loadSkin(customUrl) }),
  });
  ball.geometry.computeBoundingSphere();
  ball.geometry.computeBoundingBox();
  ball.castShadow = true;
  ball.receiveShadow = true;
  ball.body.setGravity(0, gravity, 0);
  ball.body.setFriction(friction);
  ball.body.ammo.setRollingFriction(rollingFriction);

  return ball;
}

// 加载皮肤
function loadSkin(url: string) {
  const marbleLoader = new THREE.TextureLoader();
  const marbleTexture = marbleLoader.load(url);
  marbleTexture.wrapS = marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.repeat.set(1, 1);
  marbleTexture.anisotropy = 1;
  marbleTexture.encoding = THREE.sRGBEncoding;
  return marbleTexture;
}