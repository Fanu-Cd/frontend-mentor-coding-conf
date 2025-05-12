import * as yup from "yup";
export const schema = yup
  .object({
    name: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    githubUserName: yup.string().required("Github Username is required"),
    avatar: yup
      .mixed()
      .required("File is required")
      .test(
        "fileSize",
        "File is too large, please upload a photo under 500KB",
        (value) => {
          return value && value.size <= 500 * 1024;
        }
      )
      .test(
        "fileType",
        "Unsupported file type (only JPG/PNG allowed)",
        (value) => {
          return value && ["image/jpeg", "image/png"].includes(value.type);
        }
      ),
  })
  .required();
