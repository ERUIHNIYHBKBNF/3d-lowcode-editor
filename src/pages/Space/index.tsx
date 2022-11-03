import { useEffect, useRef } from "react";
import type { Camera, Renderer } from "three";
import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { MeshSphere } from "@/Models/MeshSphere";

function initialize(): [Scene, PerspectiveCamera, Renderer] {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.01,
    2000
  );
  camera.position.z = 2;
  const renderer = new WebGLRenderer();
  return [scene, camera, renderer];
}

function render(scene: Scene, camera: Camera, renderer: Renderer) {
  renderer.render(scene, camera);
}

const animationGeometryList: Array<{
  animation?: () => void;
  [props: string]: any;
}> = [];
function animationLoop(scene: Scene, camera: Camera, renderer: Renderer) {
  requestAnimationFrame(() => animationLoop(scene, camera, renderer));
  animationGeometryList.forEach((geometry) => {
    geometry.animation?.();
  });
  render(scene, camera, renderer);
}

function launch() {
  const [scene, camera, renderer] = initialize();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.getElementById("canvas")?.appendChild(renderer.domElement);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render(scene, camera, renderer);
  }
  window.addEventListener("resize", onWindowResize, false);

  const sphere = MeshSphere();
  sphere.animation = function () {
    this.rotation.x += 0.001;
    this.rotation.y += 0.001;
  }
  animationGeometryList.push(sphere);
  
  scene.add(sphere);

  animationLoop(scene, camera, renderer);
}

// reference: https://github.com/alibaba/hooks/issues/1628
const useMount = (fn: () => void) => {
  const componentDidMount = useRef(false);
  useEffect(() => {
    if (!componentDidMount.current) {
      componentDidMount.current = true;
      fn();
    }
  }, []);
}

export default function Space() {
  useMount(launch);
  return <div id="canvas"></div>;
};
