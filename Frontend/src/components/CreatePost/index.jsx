import { ToastContainer, Zoom, toast } from "react-toastify";
import { IoMdSend } from "react-icons/io";
import { BsEmojiHeartEyes } from "react-icons/bs";
import {
  Container,
  CreatePostWrapper,
  Input,
  PostContainer,
  PreviewBtn,
} from "../../styles/components/CreatePost";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [thumbnail, setThumbnail] = useState("");

  const inputFile = () => {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute('required', true)
    input.onchange = (e) => {
      const files = input.files;
      setThumbnail(files[0]);
    };
    input.click();
  };
  const { register, handleSubmit } = useForm();
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  
  const uploadImage = async(file)=>{
    const formData= new FormData()
    formData.append("image",file)
    let sendImage = await axios.post("http://localhost:9000/imageURl",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
      withCredentials: true,
    })
    return sendImage.data
  }
  const getData = async (d) => {
    const formData = new FormData();
    formData.append("title", d.title);
    formData.append("description", d.description);
    formData.append("body", body);
    formData.append("thumbnail", thumbnail);

    let sendData = await axios.post(
      "http://localhost:9000/sendData",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
        withCredentials: true,
      }
    );
    if (sendData.status === 200) {
      toast.success("Your blog is created", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "colored",
        style:{background:"rgb(255, 128, 0)"}
        });
          setTimeout(()=>{
            navigate("/")
          },2000)
    }
  };
  return (
    <CreatePostWrapper>
      <Container onSubmit={handleSubmit(getData)}>
        <Input
          {...register("title")}
          type="text"
          placeholder="Enter your post title"
          required
        />
        <Input
          {...register("description")}
          type="text"
          placeholder="Enter short description"
          required
        />
        <PreviewBtn
          onClick={inputFile}
          type="button"
          color="#000000"
          backgroundColor="transparent"
          style={{ border: "1px solid rgba(0,0,0,.5)" }}
        >
          Select Thumbnail
        </PreviewBtn>
        <PreviewBtn
          type="button"
          color="#000000"
          backgroundColor="transparent"
          style={{ border: "1px solid rgba(0,0,0,.5)" }}
        >
          Preview
          <BsEmojiHeartEyes />
        </PreviewBtn>
        <PreviewBtn color="#ffffff" backgroundColor="#ff8000">
          Publish
          <IoMdSend />
        </PreviewBtn>
      </Container>
      <ToastContainer/ >
      <PostContainer>
        <Editor
          onEditorChange={(data) => {
            setBody(data);
          }}
          init={{
            selector: "textarea#file-picker",
            height: 720,
            automatic_uploads: true,
            file_picker_types: 'image',
            file_picker_callback:(cb) => {
              const input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");

              input.onchange = async() => {
                let file = input.files[0];
                let res = await uploadImage(file)

                var reader = new FileReader();
                
                reader.onload = ()=>{
                 cb(res, { title: file.name });
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
            plugins: ["image"],
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:18px }",
          }}
        />
      </PostContainer>
    </CreatePostWrapper>
  );
};

export default CreatePost;
