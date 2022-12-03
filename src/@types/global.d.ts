declare type Position = {
  x: number,
  y: number,
  z: number,
};

declare type Item = { id: string; } &
  ({
    itemType: "ball",
    options: BallCreateOptions,
  }
  | any);

declare type ItemCreateOptions = 
  | BallCreateOptions
  | any;
