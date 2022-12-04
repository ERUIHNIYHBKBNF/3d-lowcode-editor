import { ItemType, RightPanelType } from '@/common/enums';
import { xz2tl, tl2xz } from '@/utils';
import { useDrag } from 'react-dnd';

export function BlockCard() {
  const [, drag] = useDrag(() => ({
    type: ItemType.Block,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
    <div className="component-card" ref={drag}>
      方块
    </div>
  );
}

type BlockComponentDropedProps = {
  item: Item;
  setRightPanelType: Function;
  setRightRanelElementId: Function;
};

export function BlockComponentDroped({
  item,
  setRightPanelType,
  setRightRanelElementId
}: BlockComponentDropedProps) {
  const [, drag] = useDrag(() => ({
    type: ItemType.Block_Droped,
    item: { id: item.id },
  }));
  
  return (
    <div
      onClick={() => {
        setRightPanelType(RightPanelType.Block);
        setRightRanelElementId(item.id);
      }}
      style={{
        width: item.editorOptions.width,
        height: item.editorOptions.height,
        left: `calc(${item.editorOptions.left * 100}% - ${item.editorOptions.width} / 2)`,
        top: `calc(${item.editorOptions.top * 100}% - ${item.editorOptions.height} / 2)`,
        position: 'absolute',
        backgroundColor: '#bbbbbb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      ref={drag}
    >
      方块
    </div>
  );
}

export function blockDefaultData(id: string, top: number, left: number, length: number): Item {
  const [x, z] = tl2xz(top, left, length);
  return {
    id,
    itemType: ItemType.Block,
    createOptions: {
      height: 4,
      width: 4,
      depth: 4,
      position: {
        x,
        y: 5,
        z,
      },
    },
    editorOptions: {
      width: '40px',
      height: '40px',
      left,
      top,
    }
  }
}

type BlockPropsEditorProps = {
  elementId: string;
  findCurrentElement: (id: string) => Item | undefined;
  changeElementData: (id: string, newCreateOptions: ItemCreateOptions, newEditorOptions: EditorOptions) => void;
  projectLength: number;
}

export function BlockPropsEdit({
  elementId,
  findCurrentElement,
  changeElementData,
  projectLength,
}: BlockPropsEditorProps) {
  const elementData = findCurrentElement(elementId);
  if (!elementData) {
    return <div>属性编辑区</div>;
  }
  const options = elementData.createOptions as BlockCreateOptions;
  const inputDomObject: Array<HTMLInputElement> = [];

  return (
    <div key={elementId}>
      <div>方块</div>
      <br />
      <div className="flex-row-space-between text-config-item">
        <div>长</div>
        <input
          defaultValue={options.width}
          ref={(element) => {
            inputDomObject[0] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>宽</div>
        <input
          defaultValue={options.depth}
          ref={(element) => {
            inputDomObject[1] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>高</div>
        <input
          defaultValue={options.height}
          ref={(element) => {
            inputDomObject[2] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>x坐标: </div>
        <input
          defaultValue={options.position.x}
          ref={(element) => {
            inputDomObject[3] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>y坐标:</div>
        <input
          defaultValue={options.position.y}
          ref={(element) => {
            inputDomObject[4] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>z坐标:</div>
        <input
          defaultValue={options.position.z}
          ref={(element) => {
            inputDomObject[5] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>皮肤url:</div>
        <input
          defaultValue={options.customUrl}
          ref={(element) => {
            inputDomObject[6] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>摩擦系数:</div>
        <input
          defaultValue={options.friction}
          ref={(element) => {
            inputDomObject[7] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>重力:</div>
        <input
          defaultValue={options.gravity}
          ref={(element) => {
            inputDomObject[8] = element!;
          }}
          type="text"
        ></input>
      </div>
      <br />
      <button
        onClick={() => {
          const newCreateOptions: ItemCreateOptions = {
            height: Number(inputDomObject[2].value),
            width: Number(inputDomObject[0].value),
            depth: Number(inputDomObject[1].value),
            position: {
              x: Number(inputDomObject[3].value),
              y: Number(inputDomObject[4].value),
              z: Number(inputDomObject[5].value),
            },
          }
          if (inputDomObject[6].value) { newCreateOptions.customUrl = inputDomObject[6].value; }
          if (inputDomObject[7].value) { newCreateOptions.friction = Number(inputDomObject[7].value); }
          if (inputDomObject[8].value) { newCreateOptions.gravity = Number(inputDomObject[9].value); }
          const [top, left] = xz2tl(newCreateOptions.position.x, newCreateOptions.position.z, projectLength);
          const newEditorOptions: EditorOptions = {
            width: '50px',
            height: '50px',
            left,
            top,
          }
          changeElementData(elementId, newCreateOptions, newEditorOptions);
        }}
      >
        确定
      </button>
    </div>
  );
}

export function changeBlockPosition(id: string, top: number, left: number, projectLength: number, changeElementPosition: (id: string, x: number, z: number, top: number, left: number) => void) {
  const [x, z] = tl2xz(top, left, projectLength);
  console.log(id, x, z, top, left);
  changeElementPosition(id, x, z, top, left);
}