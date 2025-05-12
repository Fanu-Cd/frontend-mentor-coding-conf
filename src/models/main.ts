export interface Field {
  label: string;
  key: string;
  type: "file" | "text" | "email";
  placeholder?: string;
  message?: string;
  info?: string;
  accept?: string[];
}
