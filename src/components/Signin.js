import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';

function Signin() {

    const {register,handleSubmit,formState:{errors}}=useForm()
    const onFormState=(userObj)=>{
        //http post req
      axios.post('http://localhost:4000/user-api/createuser',userObj)
      .then((response)=>{
        console.log(response)
        alert(response.data.message)
      })
      .catch((error)=>{
        console.log(error)
        alert("something went wrong",error) 
      })
    }

  return (
    <div className='bg-light mt-3'>
        <form className='w-50 mx-auto card bg-light' onSubmit={handleSubmit(onFormState)}>
  <div className="">
    <label for="username" className="form-label text-light">Username</label>
    <input type="text" className="form-control username w-75" id='username' aria-describedby="emailHelp" placeholder='username' {...register("username",{required:true})}/>
    {errors.username&& <p>Username is required</p>}
  </div>
  <div className="">
    <label for="exampleInputPassword1" className="form-label text-light">Password</label>
    <input type="password" className="form-control w-75 username" id="exampleInputPassword1" placeholder='password' {...register("password",{required:true})}/>
  </div>
  <div class="">
    <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
    <input type="email" className="form-control w-75 username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    {/* <label for="city" className="form-label">city</label> */}
    <input type="text" className="form-control w-75 username" id='city' aria-describedby="emailHelp" placeholder='city'/>
  </div>
  <button type="submit" className="btn btn-primary mx-auto w-50 mb-3">Submit</button>
  </form>
    </div>
  )
}

export default Signin