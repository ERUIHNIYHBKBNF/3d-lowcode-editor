import React from "react";
import { ItemType } from "@/common/enums";
import { useDrop } from "react-dnd";
import { BallComponentDroped, ballDefaultData, changeBallPosition } from "../components/ball";
import './style.css';

type DrawPanelProps = {
  data: Array<Item>;
  setData: Function;
  setRightPanelType: Function;
  setRightRanelElementId: Function;
  projectLength: number;
}

export default function MidPanel({data, setRightPanelType, setRightRanelElementId, setData, projectLength}: DrawPanelProps) {
  const findCurrentElement = (id: string) => {
    return data.find((item: Item) => item.id === id);
  }

  const changeElementPosition = (id: string, x: number, z: number, top: number, left: number) => {
    const element = findCurrentElement(id);
    if (element) {
      element.createOptions = {
        ...element.createOptions,
        position: {
          x,
          y: element.createOptions.position.y,
          z,
        }
      }
      element.editorOptions = {
        ...element.editorOptions,
        top,
        left,
      }
      console.log(element);
      setData([...data]);
    }
  }

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop(() => ({
    accept: [ItemType.Ball, ItemType.Ball_Droped], // drop接受的type
    drop: (_, monitor) => {
      const { x, y } = monitor.getSourceClientOffset()!; // 相对屏幕左上角的位置
      // 计算相对容器左上角的位置
      const [currentX, currentY] = [x - containerRef.current!.offsetLeft, y - 75];
      const [left, top] = [currentX / containerRef.current!.clientWidth, currentY / containerRef.current!.clientHeight];
      console.log(monitor.getItem(), monitor.getItemType());
      
      switch (monitor.getItemType()) {
        case ItemType.Ball:
          setData([
            ...data,
            ballDefaultData(`ball-${Date.now()}`, top, left, projectLength),
          ]);
          return;
        case ItemType.Ball_Droped:
          changeBallPosition((monitor.getItem() as Item).id, top, left, projectLength, changeElementPosition);
          return;
      }
    }
  }));

  const generateContent = () => {
    const ret = [];
    for (const item of data) {
      switch (item.itemType) {
        case ItemType.Ball:
          ret.push(
            <BallComponentDroped
              key={item.id}
              item={item}
              setRightPanelType={setRightPanelType}
              setRightRanelElementId={setRightRanelElementId}
            />
          );
          break;
      }
    }
    return ret;
  }
  
  return (
    <div className="midPanel" ref={containerRef}>
      <div>
        <h1>画板区</h1>
      </div>
      <div className="midItemsContainer" ref={drop}>
        {generateContent()}
      </div>
    </div>
  );
}