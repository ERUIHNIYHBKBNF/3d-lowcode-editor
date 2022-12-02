import { Vector3 } from "three";
import type { Player } from "./player";
import type { PerspectiveCamera } from "three";

let lastX = 0;

export function moveCamera(mainPlayer: Player, camera: PerspectiveCamera) {
  const { player } = mainPlayer;
  const { x, y, z } = player.position;
  camera.position.set(x, y + 30, z + 70 + Math.max(player.body.velocity.z / 10, 0));

  // 瞎写一堆东西来保证摄像机平滑转动
  const playerVx = player.body.velocity.x;
  if (lastX < 0) {
    if (playerVx < lastX) {
      lastX = Math.max(lastX - 0.2, playerVx);
    } else {
      lastX = Math.min(lastX + 0.4, playerVx);
    }
  } else if (lastX > 0) {
    if (playerVx > lastX) {
      lastX = Math.min(lastX + 0.2, playerVx);
    } else {
      lastX = Math.max(lastX - 0.4, playerVx);
    }
  } else {
    if (Math.abs(playerVx) > 2) {
      lastX += playerVx > 0 ? 0.3 : -0.3;
    }
  }

  camera.lookAt(new Vector3(
    Math.abs(lastX) > 0.6 ? x + lastX : x,
    y,
    z
  ));
}
