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

    const speed = 5, maxSpeed = 12;

    if (forward) { vz -= speed; }
    if (backward) { vz += speed; }
    if ((left || right) && !forward && !backward) { vz = 0; }
    if (left) { vx -= speed; }
    if (right) { vx += speed; }
    // if (!left && !right) { vx = 0; }
    vx = Math.max(-maxSpeed, Math.min(maxSpeed, vx));
    vz = Math.max(-maxSpeed, Math.min(maxSpeed, vz));
    const eps = 0.1;
    if (Math.abs(Math.abs(vx) - maxSpeed) <= eps && 
      Math.abs(Math.abs(vz) - maxSpeed) <= eps) {
        vx /= 1.414; vz /= 1.414;
    }

    player.body.setVelocity(vx, vy, vz);
  }
}

