"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MockupNode from "./mockup-node";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, MockupNode],
    content: "<p>Start writing...</p>",
  });

  const insertMockup = (type) => {
    if (!editor) return;
    editor.commands.insertContent({
      type: "mockup",
      attrs: { type, imageUrl: null }, // Image URL can be updated later
    });
  };

  console.log(editor?.getJSON());

  return (
    <div className="editor-container">
      {/* Toolbar */}
      <div className="toolbar">
        <button className="text-black" onClick={() => insertMockup("safari")}>
          Add Image
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
