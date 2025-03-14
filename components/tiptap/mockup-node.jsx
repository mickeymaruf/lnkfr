import { Node, mergeAttributes } from "@tiptap/core";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";
import { useState } from "react";
import Safari from "../mocks/Safari";

const MockupComponent = ({ node, updateAttributes }) => {
  const { imageUrl, mockupType } = node.attrs;
  const [preview, setPreview] = useState(imageUrl || "");
  const [selectedMockup, setSelectedMockup] = useState(mockupType || "none");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      updateAttributes({ imageUrl: url });
    }
  };

  const applyMockup = (type) => {
    setSelectedMockup(type);
    updateAttributes({ mockupType: type });
  };

  return (
    <NodeViewWrapper>
      <div className="mockup-container">
        {/* Image Upload Input */}
        {!preview && <input type="file" onChange={handleImageUpload} />}

        {/* Render Image with Selected Mockup */}
        {preview && (
          <>
            {selectedMockup === "safari" && (
              <div className="safari-mockup">
                {/* <div className="safari-header"></div>
                <div className="safari-content">
                  <img src={preview} alt="Uploaded" />
                </div> */}
                <Safari src={preview} />
              </div>
            )}
            {selectedMockup === "macbook" && (
              <div className="macbook-mockup">
                <div className="macbook-screen">
                  <img src={preview} alt="Uploaded" />
                </div>
              </div>
            )}
            {selectedMockup === "none" && <img src={preview} alt="Uploaded" />}
          </>
        )}

        {/* Mockup Selection */}
        {preview && (
          <div className="mockup-buttons">
            <button onClick={() => applyMockup("safari")}>Safari Mockup</button>
            <button onClick={() => applyMockup("macbook")}>
              MacBook Mockup
            </button>
            <button onClick={() => applyMockup("none")}>No Mockup</button>
          </div>
        )}
      </div>
    </NodeViewWrapper>
  );
};

const MockupNode = Node.create({
  name: "mockup",
  group: "block",
  atom: true,
  addAttributes() {
    return {
      imageUrl: { default: null },
      mockupType: { default: "none" },
    };
  },
  parseHTML() {
    return [{ tag: "mockup-component" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["mockup-component", mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return ReactNodeViewRenderer(MockupComponent);
  },
});

export default MockupNode;
