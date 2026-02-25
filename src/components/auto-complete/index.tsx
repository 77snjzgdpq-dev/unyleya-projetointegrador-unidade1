import { Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import type { AutoCompleteSelectProps, Option } from "./types";

export default function AutoCompleteSelect({
  name,
  control,
  options,
  placeholder,
}: AutoCompleteSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const selectedOption: Option | undefined = options.find(
          (opt) => String(opt.value) === String(field.value)
        );

        return (
          <Autocomplete
            options={options}
            value={selectedOption || options[0]}
            onChange={(_, newValue: Option) => {
              field.onChange(newValue.value); 
            }}
            getOptionLabel={(option: Option) => option.label}
            isOptionEqualToValue={(option: Option, value: Option) =>
              String(option.value) === String(value.value)
            }
            openOnFocus
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={placeholder}
                size="small"
                fullWidth
              />
            )}
          />
        );
      }}
    />
  );
}