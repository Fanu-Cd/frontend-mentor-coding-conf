import type { Field } from "../../../models/main";

export const initialValues = {
  avatar: null,
  name: "",
  email: "",
  githubUserName: "",
};

export const fields: () => Field[] = () => {
  return [
    {
      label: "Upload Avatar",
      type: "file",
      key: "avatar",
      message: "Drag and drop or click to upload",
      info: "Upload your photo (JPG or PNG, max size: 500KB)",
      accept: ["image/png", "image/jpeg"],
    },
    {
      label: "Full Name",
      key: "name",
      type: "text",
      placeholder: "John Doe",
    },
    {
      label: "Email Address",
      type: "email",
      placeholder: "example@gmail.com",
      key: "email",
    },
    {
      label: "GitHub Username",
      type: "text",
      placeholder: "@yourusername",
      key: "githubUserName",
    },
  ];
};
