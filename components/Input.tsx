import React, {FC} from 'react'
import TextField from '@mui/material/TextField'
import { useController, Control, FieldValues } from 'react-hook-form'
import { registerData } from './RegisterForm'


type inputProps= {
    control: Control<FieldValues, any>,
    name: string,
    type: string

}

const Input: FC <inputProps> = ({control, name, type}) => {
  
  const{
    field: {value, onChange, ref}, formState: {errors}
  }= useController({name, control})
  
    return (
    <TextField
        type={type}
        value={value}
        onChange={onChange}
        label={name}
        inputRef={ref}
        error={!!errors.name}
        helperText={`${errors.name?.message || ''}`}
        
    />
  )
}

export default Input