import * as THREE from "three";
import type { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import type { AmmoPhysics } from "@enable3d/ammo-physics";
import { createWorld } from "@/Models/World";
import { addGridPlane } from "@/Models/GridPlane";
import { addBall } from "@/Models/Ball";

let scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, physics: AmmoPhysics;

// 窗口Resize的时候canvas自动适配大小
function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

export const MainScene = () => {
  [scene, camera, renderer, physics] = createWorld();
  document.getElementById("canvas")?.appendChild(renderer.domElement);
  window.addEventListener("resize", handleWindowResize, false);

  addGridPlane(scene, physics);
  addBall(physics);

  // loop
  const clock = new THREE.Clock();
  
  const animate = () => {
    physics.update(clock.getDelta() * 1000);
    physics.updateDebugger();
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};
