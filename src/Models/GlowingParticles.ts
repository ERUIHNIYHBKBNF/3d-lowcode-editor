import * as THREE from "three";
import type { Scene } from "three";
import spark from "@/assets/spark.png";

export function addGlowingParticles(scene: Scene) {
  const particleTextureLoader = new THREE.TextureLoader();
  const particleTexture = particleTextureLoader.load(spark);

  // const particleAttributes = { startSize: [], startPosition: [], randomness: [] };
  const particleGroup = new THREE.Object3D();
  particleGroup.position.x = -1;
  particleGroup.position.y = 7;
  particleGroup.position.z = 45;

  const totalParticles = 50;
  const radiusRange = 4;
  for (let i = 0; i < totalParticles; i++) {
    const spriteMaterial = new THREE.SpriteMaterial({
      map: particleTexture,
      color: 0xffffff,
    });

    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5, 0.5, 1.0); // imageWidth, imageHeight
    sprite.position.set(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    );

    sprite.position.setLength(radiusRange * (Math.random() * 0.1 + 0.9));

    sprite.material.color.setHSL(Math.random(), 0.9, 0.7);

    sprite.material.blending = THREE.AdditiveBlending; // "glowing" particles
    sprite.renderOrder = 1;
    particleGroup.add(sprite);
  }

  scene.add(particleGroup);
}
