import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import clsx from 'clsx';
import { useController } from 'react-hook-form';

export default function SelectControl({
  defaultValue = '',
  label,
  name,
  options = [{ label: 'All', value: '' }],
  control,
  className,

}) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const isErrorDisplayed = Boolean(error);

  return (
    <FormControl
      fullWidth 
      variant="outlined"
      error={isErrorDisplayed}
      className={clsx('w-full', className)}
    >
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Select
        name={name}
        inputProps={inputProps}
        ref={ref}
        label={label}
        error={isErrorDisplayed}
      >
        {options.map((option, index) => (
          <MenuItem
            selected={inputProps.value === option.value}
            key={`${option.value}${index}`}
            value={option.value}
            id={option.id || option.value.toString()}
            className="whitespace-normal"
          >
            {option.label}
          </MenuItem>
        ))}

      </Select>
      {error?.message && (
        <FormHelperText variant="outlined">{error.message}</FormHelperText>
      )}
    </FormControl>
  );
}
