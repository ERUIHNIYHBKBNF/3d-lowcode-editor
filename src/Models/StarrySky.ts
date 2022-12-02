import * as THREE from 'three';
import type { Scene, Vector3 } from 'three';


const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export function generateStars(scene: Scene) {
  const points: Vector3[] = [];

  for (let i = 0; i < 3000; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = getRandomArbitrary(-1100, 1100);
    vertex.y = getRandomArbitrary(-1100, 1100);
    vertex.z = getRandomArbitrary(-1100, -500);
    points.push(vertex);
  }

  const material = new THREE.PointsMaterial({ size: 3 });

  scene.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(points), material));
}
