import { BallCard } from "../components/ball";
import { BlockCard } from "../components/block";
import './style.css';

export default function LeftPanel() {
  return (
    <div className="leftPanel">
      <div>
        <h1>组件区</h1>
        <div className="leftMaterialContiner">
          <BallCard />
          <BlockCard />
        </div>
      </div>
    </div>
  );
}