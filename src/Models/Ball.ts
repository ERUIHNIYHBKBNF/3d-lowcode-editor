import * as THREE from "three";
import type { Scene } from "three";
import earthPic from "@/assets/earth.jpg";

export function addBall(scene: Scene) {
  const radius = 2;
  const position = { x: 0, y: radius, z: 0 };

  const ball = Ball(position.x, position.y, position.z, radius);

  scene.add(ball);
}

function Ball(positionX: number, positionY: number, positionZ: number, radius: number) {
  // 加载皮肤
  const marbleLoader = new THREE.TextureLoader();
  const marbleTexture = marbleLoader.load(earthPic);
  marbleTexture.wrapS = marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.repeat.set(1, 1);
  marbleTexture.anisotropy = 1;
  marbleTexture.encoding = THREE.sRGBEncoding;

  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 32, 32),
    new THREE.MeshLambertMaterial({ map: marbleTexture })
  ); 

  ball.geometry.computeBoundingSphere();
  ball.geometry.computeBoundingBox();

  ball.position.set(positionX, positionY, positionZ);

  ball.castShadow = true;
  ball.receiveShadow = true;

  return ball;
}
