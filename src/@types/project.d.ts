declare type Project = {
  name: string,
  description?: string,
  gridPlane: GridPlaneCreateOptions,
  player: Item,
  items: Array<Item>,
  elements: {
    galaxy?: boolean,
    starrySky?: boolean,
    glowingParticles?: boolean,
  }
};