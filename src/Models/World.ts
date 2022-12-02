// 使用three构建整个初始世界
import * as THREE from "three";
import type { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { AmmoPhysics } from '@enable3d/ammo-physics';

// 创建three的三个要素: scene, camera, renderer 另加物理引擎 physics
export function createWorld(): [Scene, PerspectiveCamera, WebGLRenderer, AmmoPhysics] {
  const scene = new THREE.Scene();
  // 添加光源
  // 半球光
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
  hemiLight.color.setHSL(0.6, 0.6, 0.6);
  hemiLight.groundColor.setHSL(0.1, 1, 0.4);
  hemiLight.position.set(0, 50, 0);
  scene.add(hemiLight);
  // 平行光
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.set(-10, 100, 50);
  dirLight.position.multiplyScalar(100);
  scene.add(dirLight);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 4096;
  dirLight.shadow.mapSize.height = 4096;
  let d = 200;
  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;
  dirLight.shadow.camera.far = 15000;

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  // camera.position.set(0, 30, 70); // 正式
  camera.position.set(30, 30, 170); // Debug: 用于调试

  const renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
  });
  // 设置设备像素比,通常用于避免HiDPI设备上绘图模糊
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Debug: 用于调试的坐标轴
  const axes = new THREE.AxesHelper(200);
  scene.add(axes);

  const physics = new AmmoPhysics(scene);
  // physics.debug!.enable();

  return [scene, camera, renderer, physics];
}
