import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.css";
import { Box } from "@mui/system";
import { useState } from "react";

const TextEditor = ({ editorState, setEditorState }) => {
  const [onFocus, setOnFocus] = useState(false);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <Box
      sx={{
        border: onFocus ? "2px solid orange" : "1px solid white",
        borderRadius: "5px",
      }}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="demo-toolbar"
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </Box>
  );
};

export default TextEditor;
