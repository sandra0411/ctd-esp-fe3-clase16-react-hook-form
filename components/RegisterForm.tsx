import React, {FC, useEffect, useState} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const regexPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export const registerSchema = yup.object({
    nombreReceta: yup.string().required('Recipie name is required').min(3, 'The recipie should have at least 3 chars'),
    email: yup.string().email('email must have this format: email@whatever.com').required('email is required'),
    age:yup.number().required('age is required').positive('age must be a positive number').integer('age must be an integer number'),
    password:yup.string().matches(regexPass, 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number').required('Password is required')

}).required();

export type registerData = yup.InferType<typeof registerSchema>


export default function RegisterForm () {

    const{
        handleSubmit,
        getValues,
        control} = useForm({mode: 'onChange', resolver: yupResolver(registerSchema)})
    
        const onSubmit = (regData:registerData): void => {
          //getValues para obtener todos los datos y hacer el post
          /* const values = getValues()
          console.log(values) */
          console.log(JSON.stringify(regData))
          };

        const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/

    return (
        <>
            <main>
      <h1>Cadastro blog de receitas</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Input control={control} name='nombreReceta' type='text'/>
        
        <br/>
        <br/>

        {/* <input type="text" placeholder="Digite seu nome" 
        {...register('name', {required: true, 
        minLength:3})} />
        {errors.name?.type === "required" && "Nombre es obligatorio"}
        {errors.name?.type === "minLength" && "Tu nombre debe tener como minimo 3 caracteres"}
         */}
        
        <Input control={control} name='email' type='text'/>
        <br/>
        <br/>
        
        

        <select>
          <option value="">Selecionar...</option>
          <option value="Leitor">Leitor</option>
          <option value="Criador">Criador de artigos</option>
        </select>
        

        <div className="gender">
          <h3>Gênero</h3>
          <div>
            <input type="radio" value="Male" />
            <label>Masculino</label>
          </div>
          <div>
            <input type="radio" value="Female" />
            <label>Feminino</label>
          </div>
        </div>
        <br/>
        <br/>

        <Input control={control} name='age' type='number'/>
        <br/>
        <br/>
        

        <Input control={control} name='password' type='password'/>
        <br/>
        <br/>
        

        <div className="checkbox">
          <input type="checkbox" />
          <label>Concordar com os termos</label>
        </div>

        

        <input type="submit" value="Cadastrar" />
      </form>
    </main>
        </>
    );
}