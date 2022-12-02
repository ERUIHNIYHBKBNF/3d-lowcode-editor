import * as THREE from "three";
import type { Scene, ShaderMaterial, Clock } from "three";

const galaxyVertexShader = `
uniform float uSize;
attribute float aScale;
varying vec3 vColor;
uniform float uTime;
attribute vec3 aRandomness;
void main()
{
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  float angle = atan(modelPosition.x, modelPosition.z);
  float distanceToCenter = length(modelPosition.xz);
  float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;
  angle += angleOffset;
  modelPosition.x = cos(angle) * distanceToCenter;
  modelPosition.z = sin(angle) * distanceToCenter;
  modelPosition.xyz += aRandomness;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;
  gl_PointSize = uSize * aScale;
  gl_PointSize *= (50.0 / - viewPosition.z);
  vColor = color;
}
`;

const galaxyFragmentShader = `
varying vec3 vColor;
void main()
{
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 10.0);
  vec3 color = mix(vec3(0.0), vColor, strength);
  gl_FragColor = vec4(color, 1.0);
}
`;

let galaxyMaterial: ShaderMaterial | null = null;
let galaxyClock: Clock | null = null;
export function generateGalaxy(scene: Scene) {
  const prarms = {
    count: 50000,
    size: 0.005,
    radius: 100,
    branches: 3,
    spin: 1,
    randomnessPower: 3,
    insideColor: "#ff6030",
    outsideColor: "#1b3984",
    randomness: 0.2,
  };

  /**
   * Geometry
   */
  const geometry = new THREE.BufferGeometry();

  const positions = new Float32Array(prarms.count * 3);
  const randomness = new Float32Array(prarms.count * 3);

  const colors = new Float32Array(prarms.count * 3);
  const scales = new Float32Array(prarms.count * 1);

  const insideColor = new THREE.Color(prarms.insideColor);
  const outsideColor = new THREE.Color(prarms.outsideColor);

  for (let i = 0; i < prarms.count; i++) {
    const i3 = i * 3;

    // Position
    const radius = Math.random() * prarms.radius;

    const branchAngle = ((i % prarms.branches) / prarms.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), prarms.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      prarms.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), prarms.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      prarms.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), prarms.randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        prarms.randomness *
        radius -
      50;

    positions[i3] = Math.cos(branchAngle) * radius;
    positions[i3 + 1] = 0;
    positions[i3 + 2] = Math.sin(branchAngle) * radius;

    randomness[i3] = randomX;
    randomness[i3 + 1] = randomY;
    randomness[i3 + 2] = randomZ;

    // Color
    const mixedColor = insideColor.clone();
    mixedColor.lerp(outsideColor, radius / prarms.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    // Scale
    scales[i] = Math.random();
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute(
    "aRandomness",
    new THREE.BufferAttribute(randomness, 3)
  );

  /**
   * Material
   */
  galaxyMaterial = new THREE.ShaderMaterial({
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    vertexShader: galaxyVertexShader,
    fragmentShader: galaxyFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 30 * window.devicePixelRatio },
    },
  });

  /**
   * Points
   */
  const galaxyPoints = new THREE.Points(geometry, galaxyMaterial);
  galaxyPoints.position.y = -50;
  scene.add(galaxyPoints);

  galaxyClock = new THREE.Clock();
}

export function updateGalaxy() {
  const elapsedTime = galaxyClock!.getElapsedTime() + 150;
  if (galaxyMaterial) {
    galaxyMaterial.uniforms.uTime.value = elapsedTime * 5;
  }
}
