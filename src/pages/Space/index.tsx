import { useEffect, useRef } from "react";
import { createWorld } from "@/Models/World";
import type { Scene, PerspectiveCamera, WebGLRenderer } from "three";

let scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer;

// 窗口Resize的时候canvas自动适配大小
function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

function start() {
  [scene, camera, renderer] = createWorld();
  document.getElementById("canvas")?.appendChild(renderer.domElement);
  window.addEventListener("resize", handleWindowResize, false);
  renderer.render(scene, camera);
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
};

export default function Space() {
  useMount(start);
  return <div id="canvas"></div>;
}
