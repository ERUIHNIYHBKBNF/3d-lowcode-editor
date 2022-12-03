import { ItemType, RightPanelType } from '@/common/enums';
import { xz2tl, tl2xz } from '@/utils';
import { useDrag } from 'react-dnd';

export default function BallComponent() {
  const [, drag] = useDrag(() => ({
    type: ItemType.Ball,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
    <div className="component-card" ref={drag}>
      球
    </div>
  );
}

type BallComponentDropedProps = {
  item: Item;
  setRightPanelType: Function;
  setRightRanelElementId: Function;
};

export function BallComponentDroped({
  item,
  setRightPanelType,
  setRightRanelElementId
}: BallComponentDropedProps) {
  const [, drag] = useDrag(() => ({
    type: ItemType.Ball_Droped,
    item: { id: item.id },
  }));
  
  return (
    <div
      onClick={() => {
        setRightPanelType(RightPanelType.Ball);
        setRightRanelElementId(item.id);
      }}
      style={{
        width: item.editorOptions.width,
        height: item.editorOptions.height,
        left: `${item.editorOptions.left * 100}%`,
        top: `${item.editorOptions.top * 100}%`,
        position: 'absolute',
        backgroundColor: '#bbbbbb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      ref={drag}
    >
      球
    </div>
  );
}

export function ballDefaultData(id: string, top: number, left: number, length: number): Item {
  const [x, z] = tl2xz(top, left, length);
  return {
    id,
    itemType: ItemType.Ball,
    createOptions: {
      radius: 2,
      position: {
        x,
        y: 5,
        z,
      },
    },
    editorOptions: {
      width: '50px',
      height: '50px',
      left,
      top,
    }
  }
}

type BallPropsEditorProps = {
  elementId: string;
  findCurrentElement: (id: string) => Item;
  changeElementData: (id: string, newCreateOptions: ItemCreateOptions, newEditorOptions: EditorOptions) => void;
  projectLength: number;
}

export function BallPropsEdit({
  elementId,
  findCurrentElement,
  changeElementData,
  projectLength,
}: BallPropsEditorProps) {
  const elementData = findCurrentElement(elementId);
  if (!elementData) {
    return <div>属性编辑区</div>;
  }
  const options = elementData.createOptions;
  const inputDomObject: Array<HTMLInputElement> = [];

  return (
    <div key={elementId}>
      <div>球</div>
      <br />
      <div className="flex-row-space-between text-config-item">
        <div>半径:</div>
        <input
          defaultValue={options.radius}
          ref={(element) => {
            inputDomObject[0] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>x坐标: </div>
        <input
          defaultValue={options.position.x}
          ref={(element) => {
            inputDomObject[1] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>y坐标:</div>
        <input
          defaultValue={options.position.y}
          ref={(element) => {
            inputDomObject[2] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>z坐标:</div>
        <input
          defaultValue={options.position.z}
          ref={(element) => {
            inputDomObject[3] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>widthSegments:</div>
        <input
          defaultValue={options.widthSegments}
          ref={(element) => {
            inputDomObject[4] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>heightSegments:</div>
        <input
          defaultValue={options.heightSegments}
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
        <div>滚动摩擦系数:</div>
        <input
          defaultValue={options.rollingFriction}
          ref={(element) => {
            inputDomObject[8] = element!;
          }}
          type="text"
        ></input>
      </div>
      <div className="flex-row-space-between text-config-item">
        <div>重力:</div>
        <input
          defaultValue={options.gravity}
          ref={(element) => {
            inputDomObject[9] = element!;
          }}
          type="text"
        ></input>
      </div>
      <br />
      <button
        onClick={() => {
          const newCreateOptions: ItemCreateOptions = {
            radius: Number(inputDomObject[0].value),
            position: {
              x: Number(inputDomObject[1].value),
              y: Number(inputDomObject[2].value),
              z: Number(inputDomObject[3].value),
            },
          }
          if (inputDomObject[4].value) { newCreateOptions.widthSegments = Number(inputDomObject[4].value); }
          if (inputDomObject[5].value) { newCreateOptions.heightSegments = Number(inputDomObject[5].value); }
          if (inputDomObject[6].value) { newCreateOptions.customUrl = inputDomObject[6].value; }
          if (inputDomObject[7].value) { newCreateOptions.friction = Number(inputDomObject[7].value); }
          if (inputDomObject[8].value) { newCreateOptions.rollingFriction = Number(inputDomObject[8].value); }
          if (inputDomObject[9].value) { newCreateOptions.gravity = Number(inputDomObject[9].value); }
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

export function changeBallPosition(id: string, top: number, left: number, projectLength: number, changeElementPosition: (id: string, x: number, z: number, top: number, left: number) => void) {
  const [x, z] = tl2xz(top, left, projectLength);
  console.log(id, x, z, top, left);
  changeElementPosition(id, x, z, top, left);
}