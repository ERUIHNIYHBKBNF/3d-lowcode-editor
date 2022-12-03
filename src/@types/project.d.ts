declare type Project = {
  name: string,
  description?: string,
  gridPlane: gridPlaneCreateOptions,
  player: Item,
  items: Array<Item>,
  elements: {
    galaxy?: boolean,
    starrySky?: boolean,
    glowingParticles?: boolean,
  }
};