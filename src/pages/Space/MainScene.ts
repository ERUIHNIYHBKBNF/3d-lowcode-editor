import * as THREE from "three";
import type { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import type { AmmoPhysics, ExtendedObject3D } from "@enable3d/ammo-physics";
import { createWorld } from "@/Models/World";
import { addGridPlane } from "@/Models/GridPlane";
import { addBall } from "@/Models/Ball";
import { generateGalaxy, updateGalaxy } from "@/Models/Galaxy";
import { addGlowingParticles } from "@/Models/GlowingParticles";
import { generateStars } from "@/Models/StarrySky";
import { Player } from "@/Actions/player";
import { moveCamera } from "@/Actions/camera";
import { PhysicsLoader } from "enable3d";

let project: Project;

const itemName2Model: {
  [key: string]: (physics: AmmoPhysics, options: ItemCreateOptions) => ExtendedObject3D;
} = {
  ball: addBall,
};

let scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, physics: AmmoPhysics;

// 窗口Resize的时候canvas自动适配大小
function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

function MainScene() {
  [scene, camera, renderer, physics] = createWorld();
  document.getElementById("canvas")?.appendChild(renderer.domElement);
  window.addEventListener("resize", handleWindowResize, false);

  addGridPlane(scene, physics, project.gridPlane);
  project.elements.galaxy && generateGalaxy(scene);
  project.elements.starrySky && generateStars(scene);
  project.elements.glowingParticles && addGlowingParticles(scene);

  const player = new Player(itemName2Model[project.player.itemType](physics, project.player.createOptions));

  project.items.forEach((item) => {
    itemName2Model[item.itemType](physics, item.createOptions);
  });

  // loop
  const clock = new THREE.Clock();
  
  const animate = () => {
    player.makeMove();
    moveCamera(player, camera);
    updateGalaxy();
    physics.update(clock.getDelta() * 1000);
    physics.updateDebugger();
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};

export function start(startProject: Project) {
  project = startProject;
  PhysicsLoader("./ammo", MainScene);
}