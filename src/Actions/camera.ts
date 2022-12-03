import { Vector3 } from "three";
import type { Player } from "./player";
import type { PerspectiveCamera } from "three";

let lastX = 0, lastY = 0;

export function moveCamera(mainPlayer: Player, camera: PerspectiveCamera) {
  const { player, maxSpeed } = mainPlayer;
  const { x, y, z } = player.position;
  const { x: playerVx, z: playerVz } = player.body.velocity;
  camera.position.set(x, y + 30, z + 50);

  // 瞎写一堆东西来保证摄像机平滑转动
  lastX += playerVx / 100;
  if (lastX * playerVx < 0) lastX += playerVx / 100;
  if (Math.abs(player.body.velocity.x) < 5 && Math.abs(lastX) > 0.5) lastX -= Math.sign(lastX) * 0.2;
  if (lastX < 0) { lastX = Math.max(lastX, -maxSpeed); }
  if (lastX > 0) { lastX = Math.min(lastX, maxSpeed); }

  if (playerVz > 8) lastY = Math.max(lastY - 0.1, -5);
  if (playerVz < -8) lastY = Math.min(lastY + 0.1, 8);
  if (playerVz < 10 && lastY < 0) lastY = Math.min(lastY + 0.1, 0);
  if (playerVz > -10 && lastY > 0) lastY = Math.max(lastY - 0.1, 0);

  camera.lookAt(new Vector3(
    lastX + x,
    y + 10 + lastY,
    z
  ));
}
