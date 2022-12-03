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
        />
        <RightPanel
          type={rightPanelType}
          data={drawPanelData}
          elementId={rightRanelElementId}
          setDrawPanelData={setDrawPanelData}
        />
      </div>
    </DndProvider>
  );
}