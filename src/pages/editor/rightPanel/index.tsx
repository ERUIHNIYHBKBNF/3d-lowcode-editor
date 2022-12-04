import { RightPanelType } from '@/common/enums';
import { BallPropsEdit } from '../components/ball';
import { BlockPropsEdit } from '../components/block';
import './style.css';

type RightPanelProps = {
  type: RightPanelType;
  data: Array<Item>;
  elementId: string;
  setDrawPanelData: Function;
  projectLength: number;
};

export default function RightPanel({
  type,
  data,
  elementId,
  setDrawPanelData,
  projectLength,
}: RightPanelProps) {
  const findCurrentElement = (id: string) => {
    return data.find((item: Item) => item.id === id);
  }

  const changeElementData = (id: string, newCreateOptions: ItemCreateOptions, newEditorOptions: EditorOptions) => {
    const element = findCurrentElement(id);
    if (element) {
      element.createOptions = newCreateOptions;
      element.editorOptions = newEditorOptions;
      setDrawPanelData([...data]);
    }
  }

  const generateRightPanel = () => {
    if (type === RightPanelType.None) {
      return <div>选择元素以编辑属性</div>;
    }
    switch (type) {
      case RightPanelType.Ball:
        return <BallPropsEdit
          elementId={elementId}
          findCurrentElement={findCurrentElement}
          changeElementData={changeElementData}
          projectLength={projectLength}
        />;
      case RightPanelType.Block:
        return <BlockPropsEdit
          elementId={elementId}
          findCurrentElement={findCurrentElement}
          changeElementData={changeElementData}
          projectLength={projectLength}
        />;
    }
  };

  return (
    <div className="rightPanel">
      <div>
        <h1>属性编辑区</h1>
      </div>
      <div className="rightFormContainer">
        {generateRightPanel()}
      </div>
    </div>
  );
}