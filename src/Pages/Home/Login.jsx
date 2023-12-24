import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
// import { sendPasswordResetEmail } from 'firebase/auth';


const Login = () => {
    const { user, loginUser, googleUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

    const handleGoogle=()=>{
       googleUser()
       .then(result=>{
        const googleUsed=result.user;
        navigate(from, { replace: true });
        console.log(googleUsed);
       })
       .catch(error => {
        console.log(error)
    })
    }
 

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError(null)

        loginUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                form.reset();

                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })

    }

   
    return (
       <div className='flex flex-col md:flex-row sm:flex-col justify-center items-center  bg-orange-50 px-3 lg:px-[200px]'>
         <form onSubmit={handleLogin} className="w-full  mt-15 mb-10 p-4 lg:p-10   text-black">
            <h3 className='text-2xl font-bold mb-5'>Login</h3>
            <div className="form-control">
                <label  className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
            </div>
           
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href='#' className="underline text-error" >Forgot password?</a>
                </label>
            </div>
            <div className="form-control">
                <label className="flex gap-4 cursor-pointer mt-4">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Remember me</span>
                </label>
            </div>
            <div className="form-control mt-6 mb-3">
                <button className="btn btn-warning">Login</button>
            </div>
            {error && <p className='text-center text-error mb-2'>{error}</p>}
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-warning underline'>Create an account</Link></p>
            <div className=" social-button-container grid grid-rows-2 justify-items-center w-50 ">
                <div onClick={handleGoogle} className=" text-2xl pt-4 text-blue-500">
                <FaGoogle></FaGoogle>
                
                </div>
              
            </div>
        
        </form>
         <div className="w-full">
         <img
           className="w-full"
           src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1683184761~exp=1683185361~hmac=7b3ae2dbd8fdb1dc4ff88c5ff252efb77eb096c83292d5f05ed2090e8e0c86dd"
           alt=""
         />
       </div>
       </div>
    );
};

export default Login;