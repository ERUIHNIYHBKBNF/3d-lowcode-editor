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
  | {
    itemType: "block",
    createOptions: BlockCreateOptions,
    editorOptions: EditorOptions,
  })

declare type ItemCreateOptions = 
  | BallCreateOptions
  | BlockCreateOptions
