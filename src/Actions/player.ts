import * as THREE from "three";
import type { ExtendedObject3D } from "enable3d";

export class Player {
  player: ExtendedObject3D;

  moveDirection = {
    left: false,
    right: false,
    forward: false,
    backward: false,
  };

  constructor(player: ExtendedObject3D) {
    this.player = player;
    window.addEventListener("keydown", this.handleKeyboardEvent.bind(this));
    window.addEventListener("keyup", this.handleKeyboardEvent.bind(this));
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.code) {
      case "ArrowLeft":
      case "KeyA":
        this.moveDirection.left = event.type === "keydown";
        break;
      case "ArrowRight":
      case "KeyD":
        this.moveDirection.right = event.type === "keydown";
        break;
      case "ArrowUp":
      case "KeyW":
        this.moveDirection.forward = event.type === "keydown";
        break;
      case "ArrowDown":
      case "KeyS":
        this.moveDirection.backward = event.type === "keydown";
        break;
    }
  }

  makeMove() {
    const { left, right, forward, backward } = this.moveDirection;
    const { player } = this;
    
    let { x: vx, y: vy, z: vz } = player.body.velocity;
    if (player.position.y > 2) { vy -= 0.25; }

    const speed = 2, maxSpeed = 10;

    if (forward) { vz -= speed; }
    if (backward) { vz += speed; }
    if (left) { vx -= speed; }
    if (right) { vx += speed; }
    vx = Math.max(-maxSpeed, Math.min(maxSpeed, vx));
    vz = Math.max(-maxSpeed, Math.min(maxSpeed, vz));

    player.body.setVelocity(vx, vy, vz);
  }
}

