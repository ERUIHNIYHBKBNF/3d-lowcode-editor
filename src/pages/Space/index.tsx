import { useEffect, useRef } from "react";
import { start, clock } from "./MainScene";

// reference: https://github.com/alibaba/hooks/issues/1628
const useMount = (fn: (...args: any) => void, ...args: any[]) => {
  const componentDidMount = useRef(false);
  useEffect(() => {
    if (!componentDidMount.current) {
      componentDidMount.current = true;
      fn(...args);
    }
  }, []);
};

export default function Space({project}: {project: Project}) {
  useMount(() => start(project));
  useEffect(() => {
    clock.start();
    return () => clock.stop();
  }, []);
  return <div id="canvas"></div>;
}
