import { useEffect, useRef } from "react";
import { PhysicsLoader } from "enable3d";
import { MainScene } from "./MainScene";

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
  useMount(() => PhysicsLoader("./ammo", MainScene));
  return <div id="canvas"></div>;
}
