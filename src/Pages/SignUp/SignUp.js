import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import googleImg from '../../assets/icons/Group 573.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signUpError, setSignUpError] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const { register, formState: { errors }, handleSubmit } = useForm()

    if (token) {
        navigate('/')
    }
    const handleSignUp = data => {
        setSignUpError('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)

                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                setSignUpError(err.message)
            })
    }
    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('https://jerins-parlour-server-topaz.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log('save userdata', data)
                setCreatedUserEmail(email)

            })
    }



    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className="text-2xl text-center text-accent">Create an Account</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is Required",
                            minLength: { value: 6, message: "password has should be 6 characters" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])([?=.*(0-9)])/, message: 'password must be strong' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>


                    <input className='btn btn-primary text-white w-full mt-5' value='Create an Account' type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an Account? <Link to='/login' className='text-primary'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full uppercase'><img className='w-8 mr-4' src={googleImg} alt="" />   continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;