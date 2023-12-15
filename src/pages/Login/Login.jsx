import React, { useContext } from 'react';
import login_img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const {SignIn} =useContext(AuthContext)
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

const handleLogin = event =>{
    event.preventDefault()
    const form =event.target 
    const email =form.email.value 
    const password =form.password.value 
    SignIn(email,password)
    .then(result=>{
      const user= result.user
      
        console.log(user)
        navigate(from, { replace: true });
       

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
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl text-center font-bold">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-error text-white" value="Sign In" />
        </div>
        <p className=' mx-3 text-center text-slate-500 font-semibold'>
        New to this site? <Link className=' text-orange-700 font-bold' to='/signup'>Sign up</Link>
      </p>
      <SocialLogin></SocialLogin>
      </form>

    </div>
  </div>
</div>
    );
};

export default Login;