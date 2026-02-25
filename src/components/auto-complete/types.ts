
export type AutoCompleteSelectProps = {
  name: string;
  control: any;
  options: Option[];
  placeholder?: string;
};

export type Option = {
  label: string;
  value: string;
};