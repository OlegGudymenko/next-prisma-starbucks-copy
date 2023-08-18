import { useState } from 'react'

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
 
export const ReuqiredElement = () => <span className='text-green-800 text-2xl'>*</span>

const FormField = (props) => {
  const { 
    label, 
    type = 'text', 
    id, 
    error,
    tooltip,
    required
  } = props;
  const [showPassword, setShowPassword] = useState(false);


  const handleShowPassword = () => setShowPassword((show) => !show);

  const isPasswordField = type === 'password';

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor={id}>
        <p className='bg-white pr-2 text-black text-xl'> { required && <ReuqiredElement/> } {label}</p>
      </InputLabel>
      <OutlinedInput
        id={id}
        
        type={showPassword ? 'text' : 'password'}
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
        label="* Password"
      />
      {tooltip &&  <FormHelperText className='text-base text-black mt-1' id={id}>{tooltip}</FormHelperText>}
      {error && <FormHelperText className='text-red-500' id={id}>{error}</FormHelperText>}
    </FormControl>
  )
}

export default FormField;