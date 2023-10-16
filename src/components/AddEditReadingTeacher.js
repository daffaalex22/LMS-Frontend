import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import TextEditor from "./textEditor/TextEditor";
import TextField from "@mui/material/TextField";
import { Container, LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { useParams } from "react-router";
import { useReadData } from "./SideBar.Hook";

const classes = {
  description: {
    fontWeight: 300,
    padding: "20px 30px",
    marginTop: "30px",
    lineHeight: "1.5em",
  },
  field: {
    marginBottom: 5,
    display: "block",
    color: "primary",
  },
  attachment: {
    marginTop: 5,
    display: "block",
    color: "primary",
  },
};
function refreshPage() {
  setTimeout(() => {
    window.location.reload(false);
  }, 500);
  console.log("page to reload");
}

const AddEditReadingTeacher = (props) => {
  const { moduleId } = useParams();
  const [refresh, setRefresh] = useState(1);
  const { readData, id } = useReadData(refresh);
  console.log(moduleId);
  const moduleInt = parseInt(moduleId);
  console.log(moduleInt);
  const [data, setData] = useState({
    title: "",
    order: 0,
    moduleId: moduleInt,
  });
  console.log(data);
  const [errorInput, setErrorInput] = useState({
    title: false,
  });
  const [error, setError] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlFromDB, setHtmlFromDB] = useState("");
  const [contentBlock, setContentBlock] = useState(null);
  const theHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [urlLink, setUrlLink] = useState("");
  const [loadingUpload1, setLoadingUpload1] = useState(false);
  const [urlLink1, setUrlLink1] = useState("");

  useEffect(() => {
    if (readData === null) {
      setData({ title: "", order: 0, moduleId: moduleInt });
      setEditorState("");
      setUrlLink("");
      setUrlLink1("");
    } else {
      setData({
        title: readData.title,
        order: readData.order,
        moduleId: readData.moduleId,
      });
      setHtmlFromDB(readData?.content);
      setUrlLink(readData.attachment);
      setUrlLink(readData.quiz);
    }
  }, [readData]);

  console.log("setData", data);
  console.log("setHtmlFromDB", htmlFromDB);
  console.log("setUrlLink", urlLink);
  console.log("setUrlLink1", urlLink1);

  useEffect(() => {
    if (htmlFromDB) {
      setContentBlock(htmlToDraft(htmlFromDB));
      console.log("kondisi truthy htmlfromdb");
    }
    console.log("contentBlock hFDB:", contentBlock);
  }, [htmlFromDB]);

  useEffect(() => {
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
      console.log("kondisi truthy content block");
    }
    console.log("contentBlock CB:", contentBlock);
  }, [contentBlock]);

  const handleFile = (e) => {
    if (e.target.files[0] !== undefined) {
      setLoadingUpload(true);
      const profileRef = ref(
        storage,
        "/attachment/reading/" + e.target.files[0].name
      );
      uploadBytes(profileRef, e.target.files[0]).then((snapshot) => {
        console.log("uploading file");
        console.log(snapshot);
        getDownloadURL(profileRef).then((url) => {
          console.log("downloadURL", url);
          setUrlLink(url);
          setLoadingUpload(false);
        });
      });
    }
  };

  const handleFile1 = (e) => {
    if (e.target.files[0] !== undefined) {
      setLoadingUpload1(true);
      const profileRef = ref(
        storage,
        "/quiz/reading/" + e.target.files[0].name
      );
      uploadBytes(profileRef, e.target.files[0]).then((snapshot) => {
        console.log("uploading file");
        console.log(snapshot);
        getDownloadURL(profileRef).then((url1) => {
          console.log("downloadURL", url1);
          setUrlLink1(url1);
          setLoadingUpload1(false);
        });
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(value);
    if (value !== "") {
      setErrorInput({ ...errorInput, [name]: false });
    }
    if (value === "") {
      setErrorInput({ ...errorInput, [name]: true });
    }
    console.log("data", data);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (props.title === "Create") {
      axios
        .post("https://inedu-backend.onrender.com/api/v1/readings", {
          title: data?.title,
          moduleId: moduleInt,
          order: parseInt(data?.order),
          content: theHtml,
          attachment: urlLink,
          quiz: urlLink1,
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.meta.status !== 200) {
            setError(resp.data.meta.messages);
            setData({
              title: "",
              order: 0,
            });
            setHtmlFromDB("");
            setUrlLink("");
          } else {
            refreshPage();
          }
        })
        .catch((e) => {
          console.error(e);
          if (e.response) {
            console.log(e.response);
          } else if (e.request) {
            console.log(e.request);
          }
        });
    } else {
      axios
        .put("https://inedu-backend.onrender.com/api/v1/readings/" + id, {
          title: data?.title,
          moduleId: moduleInt,
          order: parseInt(data?.order),
          content: theHtml,
          attachment: urlLink,
          quiz: urlLink1,
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.meta.status !== 200) {
            setError(resp.data.meta.messages);
          } else {
            refreshPage();
          }
        })
        .catch((e) => {
          console.error(e);
          if (e.response) {
            console.log(e.response);
          } else if (e.request) {
            console.log(e.request);
          }
        });
    }
  };

  return (
    <>
      <Box sx={classes.yellowContent}>
        <Typography sx={classes.description}>
          <Container className="article-content">
            <form noValidate>
              <Typography variant="h5">Title</Typography>
              <TextField
                sx={classes.field}
                value={data?.title}
                name="title"
                error={errorInput.title}
                helperText={errorInput.title ? "please fill the title" : ""}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                fullWidth
                required
              />
              <Typography variant="h5">Order</Typography>
              <TextField
                sx={classes.field}
                value={data?.order}
                type="text"
                name="order"
                onChange={handleChange}
                variant="outlined"
                color="primary"
                fullWidth
              />
              <Typography variant="h5">Content</Typography>
              <TextEditor
                sx={classes.field}
                htmlFromDB={htmlFromDB}
                editorState={editorState}
                setEditorState={setEditorState}
              />
              <Typography sx={classes.attachment} variant="h5">
                Attachment
              </Typography>
              <Box sx={classes.field}>
                {loadingUpload && (
                  <Box maxWidth="300px">
                    <LinearProgress />
                  </Box>
                )}
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*, pdf/*, docx/*"
                    id="contained-button-file"
                    type="file"
                    onChange={(e) => handleFile(e)}
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Box>
              <Typography sx={classes.attachment} variant="h5">
                Quiz
              </Typography>
              <Box sx={classes.field}>
                {loadingUpload1 && (
                  <Box maxWidth="300px">
                    <LinearProgress />
                  </Box>
                )}
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*, pdf/*, docx/*"
                    id="contained-button-file"
                    type="file"
                    onChange={(e) => handleFile1(e)}
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Box>
              <Button
                sx={{ marginBottom: 10 }}
                type="submit"
                onClick={handleSave}
                color="primary"
                variant="contained"
              >
                {props.isEditing ? "Add Reading" : "Edit Reading"}
              </Button>
            </form>
          </Container>
        </Typography>
      </Box>
    </>
  );
};

export default AddEditReadingTeacher;
