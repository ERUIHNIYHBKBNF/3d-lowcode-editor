import { Vector3 } from "three";
import type { Player } from "./player";
import type { PerspectiveCamera } from "three";

let lastX = 0;

export function moveCamera(mainPlayer: Player, camera: PerspectiveCamera) {
  const { player, maxSpeed } = mainPlayer;
  const { x, y, z } = player.position;
  camera.position.set(x, y + 30, z + 70 + Math.max(player.body.velocity.z / 10, 0));

  // 瞎写一堆东西来保证摄像机平滑转动
  const playerVx = player.body.velocity.x;
  lastX += playerVx / 100;
  if (lastX * playerVx < 0) lastX += playerVx / 100;
  if (Math.abs(player.body.velocity.x) < 5 && Math.abs(lastX) > 0.5) lastX -= Math.sign(lastX) * 0.2;
  if (lastX < 0) { lastX = Math.max(lastX, -maxSpeed); }
  if (lastX > 0) { lastX = Math.min(lastX, maxSpeed); }

  camera.lookAt(new Vector3(
    lastX + x,
    y,
    z
  ));
}
