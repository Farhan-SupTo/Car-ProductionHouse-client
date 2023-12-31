import React, { useContext } from 'react';
import login_img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

const {createUser} =useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault()
        const form =event.target 
        const name=form.name.value 
        const email =form.email.value 
        const password =form.password.value 
        console.log(name,email,password)
        createUser(email,password)
        .then(user=>{
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
        })
        form.reset()
        
    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-16">
      
      <img src={login_img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl text-center font-bold">Sign Up</h1>
      
<form onSubmit={handleSignup}>
<div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Confirm Password</span>
          </label>
          <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-error text-white" value="Sign Up" />
        </div>
</form>
        <p className=' mx-3 text-center text-slate-500 font-semibold'>
        Already have an account? <Link className=' text-orange-700 font-bold' to='/login'>Sign in</Link>
      </p>
      </div>

    </div>
  </div>
</div>
       
    );
};

export default SignUp;