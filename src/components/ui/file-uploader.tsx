import { useRef, useState } from "react";
import type { Field } from "../../models/main";
import uplcoadIcon from "../../assets/icon-upload.svg";
import infoIcon from "../../assets/icon-info.svg";
import orangeInfoIcon from "../../assets/icon-info-orange.svg";
import { useDropzone } from "react-dropzone";
const FileUploader = ({
  field,
  formMethods,
}: {
  field: Field;
  formMethods: any;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState("");

  const {
    setValue,
    formState: { errors },
  } = formMethods ?? { register: () => {} };

  const setFileValue = (file) => {
    setFile(file);
    setValue(field.key, file);
    if (["image/png", "image/jpeg"].includes(file?.type)) {
      setFilePreviewUrl(URL.createObjectURL(file));
    } else {
      setFilePreviewUrl("");
    }
  };

  const onDrop = (dropperFile) => {
    const newFile = dropperFile?.[0];
    setFileValue(newFile);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files?.[0];
    setFileValue(newFile);
  };

  const inputRef = useRef(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return file ? (
    <div
      className={`border-dashed border-2 border-white rounded-md p-4 w-full h-auto text-center flex flex-col justify-center items-center cursor-pointer"
    `}
    >
      {filePreviewUrl ? (
        <img
          src={filePreviewUrl}
          alt="Uploaded file"
          className="rounded-md w-[60px] h-[60px]"
        />
      ) : (
        <p className="orange-txt">???</p>
      )}
      <div className="flex gap-3">
        <button
          className="bg-neut-700 p-2 mt-5 rounded-md text-white"
          onClick={() => {
            setFile(null);
          }}
          type="button"
        >
          Remove image
        </button>
        <button
          className="bg-neut-700 p-2 mt-5 rounded-md text-white"
          onClick={() => {
            console.log("inputRef", inputRef);
            inputRef?.current?.click();
          }}
          type="button"
        >
          Change image
        </button>
      </div>
      {errors?.[field.key] && (
        <span className="flex items-center gap-2 mt-1">
          <img src={orangeInfoIcon} width={20} height={20} alt="Info icon " />
          <p className="orange-txt text-xs">{errors?.[field.key]?.message}</p>
        </span>
      )}
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-4"
        ref={inputRef}
        hidden
        accept={field.accept?.map((x) => x)?.join(", ")}
      />
    </div>
  ) : (
    <div className={`flex flex-col`} {...getRootProps()}>
      <div
        onClick={() => {
          console.log("inputRef", inputRef);
          inputRef?.current?.click();
        }}
        className={`border-dashed border-2 ${
          isDragActive ? `border-[hsl(7,88%,67%)]` : `border-white`
        } rounded-md p-4 w-full h-auto text-center flex flex-col justify-center items-center cursor-pointer`}
      >
        <div className="p-3 rounded-md">
          <img src={uplcoadIcon} width={30} height={30} />
        </div>
        <h2 className="text-neut-300">{field.message}</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-4"
          ref={inputRef}
          hidden
          accept={field.accept?.map((x) => x)?.join(", ")}
          {...getInputProps()}
        />
      </div>
      {errors?.[field.key] ? (
        <span className="flex items-center gap-2 mt-1">
          <img src={orangeInfoIcon} width={20} height={20} alt="Info icon " />
          <p className="orange-txt text-xs">{errors?.[field.key]?.message}</p>
        </span>
      ) : (
        <span className="mt-2 flex gap-2 items-center">
          <img src={infoIcon} width={20} height={20} alt="Info icon " />
          <p className="text-neut-300 text-xs">{field.info}</p>
        </span>
      )}
    </div>
  );
};

export default FileUploader;
