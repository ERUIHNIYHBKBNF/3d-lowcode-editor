import LeftPanel from '@/pages/editor/leftPanel';
import MidPanel from '@/pages/editor/midPanel';
import RightPanel from '@/pages/editor/rightPanel';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RightPanelType } from '@/common/enums';
import "./style.css";

export default function Editor({project}: {project: Project}) {
  const [drawPanelData, setDrawPanelData] = useState([...project.items]);
  const [rightPanelType, setRightPanelType] = useState(RightPanelType.None);
  const [rightRanelElementId, setRightRanelElementId] = useState('');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="editor">
        <LeftPanel />
        <MidPanel
          key={`${drawPanelData.length}-${Math.random()}`}
          data={drawPanelData}
          setRightPanelType={setRightPanelType}
          setRightRanelElementId={setRightRanelElementId}
          setData={setDrawPanelData}
          projectLength={project.gridPlane.sideLength}
        />
        <RightPanel
          type={rightPanelType}
          data={drawPanelData}
          elementId={rightRanelElementId}
          setDrawPanelData={setDrawPanelData}
          projectLength={project.gridPlane.sideLength}
        />
        <button
          onClick={() => project.items = drawPanelData}
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 9999,
            height: 50,
            width: 100,
          }}
        >
          保存项目
        </button>
      </div>
    </DndProvider>
  );
}