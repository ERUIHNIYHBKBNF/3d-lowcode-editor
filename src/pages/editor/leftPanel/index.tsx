import Ball from "../components/ball";
import './style.css';

export default function LeftPanel() {
  return (
    <div className="leftPanel">
      <div>
        <h1>LeftPanel</h1>
        <div className="leftMaterialContiner">
          <Ball />
        </div>
      </div>
    </div>
  );
}