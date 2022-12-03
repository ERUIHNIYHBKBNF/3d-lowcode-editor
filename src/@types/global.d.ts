import { ItemType } from "@/common/enums";

declare type Position = {
  x: number,
  y: number,
  z: number,
};

declare type Item = { id: string; } &
  ({
    itemType: ItemType.Ball,
    options: BallCreateOptions,
  }
  | any);

declare type ItemCreateOptions = 
  | BallCreateOptions
  | any;
