import React from 'react'
import {useForm} from 'react-hook-form'

function Login() {

    const {register,handleSubmit,formState:{errors}}=useForm()

    const onFormSubmit=(userObj)=>{
         console.log(userObj)
    }

  return (
    <div className='bg-light loginpage'>
    <form className='w-50 mt-4 mx-auto card p-2 bg-light mb-4' onSubmit={handleSubmit(onFormSubmit)}>
  <div className="mb-3">
    <label for="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" aria-describedby="username"{...register("username",{required:true})} />
    <div id="username" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register("password",{required:true})}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
   </form>
    </div>
  )
}

export default Login