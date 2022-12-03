declare type Position = {
  x: number,
  y: number,
  z: number,
};

declare type EditorOptions = {
  width: string,
  height: string,
  left: number,
  top: number,
}

declare type Item = { id: string; } &
  ({
    itemType: "ball",
    createOptions: BallCreateOptions,
    editorOptions: EditorOptions,
  }
  | any);

declare type ItemCreateOptions = 
  | BallCreateOptions
  | any;
