import { useState } from 'react'
import { clsx } from 'clsx';
import { useController,} from 'react-hook-form';
import { 
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  IconButton,
 }from '@mui/material';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

export const ReuqiredElement = ({ error }) => 
  <span className={clsx(error ? 'text-red-500': 'text-green-700', 'text-2xl mx-1')}
  >*</span>;

const FormField = ({ 
  label, 
  type = 'text', 
  name,
  control,
  tooltip,
  required,
  ...props
}) => {

  const isPasswordField = type === 'password';

  const [showPassword, setShowPassword] = useState(!isPasswordField);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
  });

  const handleShowPassword = () => setShowPassword((show) => !show);

  const hasError = !!error;

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor={name}>
        <p className={clsx('flex bg-white pr-2 text-black text-lg', {
          'text-red-500': hasError
        })}> { required && <ReuqiredElement error={hasError}/> } {label}</p>
      </InputLabel>
      <OutlinedInput
        id={name}
        classes={{
          root: 'rounded-xl'
        }}
        error={hasError}
        type={showPassword ? 'text' : 'password'}
        {...field}
        {...props}
        endAdornment={
          <InputAdornment position="end" >
            <div>
              {isPasswordField &&
                  <IconButton
                  onClick={handleShowPassword}
                  edge="end"
                  className='text-2xl'
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton> 
              }
              
             {error && <IconButton
                onClick={handleShowPassword}
                edge="end"
                className='text-2xl text-red-500'
              >
                <TiDelete />
              </IconButton> } 
            </div>
          </InputAdornment>
        }
      />
      {tooltip && <FormHelperText className='text-base text-black mt-1' id={name}>{tooltip}</FormHelperText>}
      {hasError && (
        <div className='flex items-center ml-3'>
          <RxCross1 className='text-red-500 mr-1 text-base'/>
          <FormHelperText className='text-sm text-black mx-0' id={name}>{error.message}</FormHelperText>
        </div>
      )}
    </FormControl>
  )
}

export default FormField;