import { ItemType } from '@/common/enums';
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