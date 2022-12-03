import Space from "./pages/Space/index";
import Editor from "./pages/editor/index";
import { useState } from 'react';
import mockProject from "@/mock/test-project.json";

const project = mockProject as Project;

function App() {
  const [preview, setShowPreview] = useState(true);
  
  return (<>
    { preview ? <Space project={project} /> : <Editor project={project} /> }
    <button
      onClick={() => setShowPreview(!preview)}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      {preview ? '编辑' : '预览'}
    </button>
  </>);
}

export default App;
