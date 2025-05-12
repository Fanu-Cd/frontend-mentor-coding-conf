import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./form-schema";
import { useForm } from "react-hook-form";
import { fields } from "./form-configs";
import FileUploader from "../../../components/ui/file-uploader";
import type { Field } from "../../../models/main";
import orangeInfoIcon from "../../../assets/icon-info-orange.svg";
const FormDetail = ({
  onGenerateTicket,
}: {
  onGenerateTicket: (userData) => void;
}) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    watch,
    handleSubmit,
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    onGenerateTicket(data);
  };

  type FieldValues = yup.InferType<typeof schema>;
  console.log("errors", errors, getValues());
  const renderFieldWithError = (field: Field, i: number) => {
    return (
      <div className={`${i !== 0 && `mt-4`}`}>
        {field.type === "file" && (
          <FileUploader field={field} formMethods={methods} />
        )}
        {["text", "email"].includes(field.type) && (
          <>
            <label className="text-neut-0 text-[20px]" htmlFor={field.key}>
              {field.label}
            </label>
            <input
              style={{
                border: `1px solid ${
                  errors?.[field.key as keyof FieldValues]
                    ? `hsl(7, 88%, 67%)`
                    : `hsl(252, 6%, 83%)`
                } `,
                width: "100%",
                height: "40px",
                borderRadius: 5,
                padding: 10,
                color: "white",
              }}
              className="placeholder-neut-300"
              id={field.key}
              {...field}
              value={watch(field.key as keyof FieldValues)}
              {...register(field.key as keyof FieldValues)}
            />
            {errors?.[field.key as keyof FieldValues] && (
              <span className="flex items-center gap-2 mt-1">
                <img
                  src={orangeInfoIcon}
                  width={20}
                  height={20}
                  alt="Info icon "
                />
                <p className="orange-txt text-xs">
                  {errors?.[field.key as keyof FieldValues]?.message}
                </p>
              </span>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="mt-5 w-[80%] md:w-[50%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {fields().map((field, i) => {
          return renderFieldWithError(field, i);
        })}
        <button className="orange-bg p-3 rounded-md w-full mt-5" type="submit">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default FormDetail;
