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
        const selectedOption: Option | null = options.find((opt) => String(opt.value) === String(field.value)) || null;
        return (
          <Autocomplete
            options={options}
            value={selectedOption}
            onChange={(_, newValue: Option | null) => {
              field.onChange(newValue ? newValue.value : "");
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