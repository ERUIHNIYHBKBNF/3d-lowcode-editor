import Space from "./pages/Space/index";
import Editor from "./pages/editor/index";
import { useState } from 'react';
import mockProject from "@/mock/test-project.json";

const project = mockProject as Project;

function App() {
  const [showPreview, setShowPreview] = useState(false);

  return (<>
    { showPreview ? <Space project={project} /> : <Editor project={project} /> }
    <button
      onClick={() => setShowPreview(!showPreview)}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      {showPreview ? '编辑' : '预览'}
    </button>
  </>);
}

export default App;
