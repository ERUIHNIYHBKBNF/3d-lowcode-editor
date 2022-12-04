import * as THREE from "three";
import type { AmmoPhysics } from '@enable3d/ammo-physics';
import earthPic from "@/assets/earth.jpg";

export function addBlock(physics: AmmoPhysics, options: BlockCreateOptions) {
  const {
    height,
    width,
    depth,
    position,
    customUrl = earthPic,
    friction = 0.8,
    gravity = -9.8,
  } = options;

  const block = physics.add.box({
    width,
    height,
    depth,
    x: position.x,
    y: position.y,
    z: position.z,
  }, {
    custom: new THREE.MeshLambertMaterial({ map: loadSkin(customUrl) }),
  });
  block.geometry.computeBoundingSphere();
  block.geometry.computeBoundingBox();
  block.castShadow = true;
  block.receiveShadow = true;
  block.body.setGravity(0, gravity, 0);
  block.body.setFriction(friction);

  return block;
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