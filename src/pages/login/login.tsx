import React from 'react'

import { signIn } from "next-auth/react";

import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";

type Props = {}

function Login({ }: Props) {
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-primary h-screen grid place-items-center'>
                <BsFacebook className='text-white text-[200px]' />
            </div>

            <div className='grid place-items-center bg-black'>
                <div className='flex gap-4 bg-[#fff] p-4 px-6 items-center cursor-pointer rounded-[5px]' onClick={() => signIn("google")}>
                    <FcGoogle className="text-[36px]" />
                    SignIn with Google
                </div>
            </div>
        </div>
    )
}

export default Login