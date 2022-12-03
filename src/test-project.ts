export const project: Project = {
  name: "test-project",
  gridPlane: {
    sideLength: 200,
  },
  player: {
    id: "player",
    itemType: "ball",
    options: {
      radius: 2,
      position: {
        x: 0,
        y: 7,
        z: 0,
      },
      widthSegments: 64,
      heightSegments: 64,
      rollingFriction: 0.6,
      gravity: -98,
    },
  },
  items: [],
  elements: {
    galaxy: true,
    starrySky: true,
    glowingParticles: true,
  },
};
