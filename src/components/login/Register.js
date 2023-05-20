import React, { useState } from 'react'
import { useMutationHooks } from '../../hook/useMutationHooks';
import * as UserService from "../../Service/UserService"

function Register() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const mutation = useMutationHooks(
        data => UserService.registerUser(data)
    )
    const { data, error, isLoading, isError, isSuccess } = mutation

    const submitHandler = async (e) => {
        e.preventDefault();

        mutation.mutate(
            {
                username,
                password,
                name,
                phone,
                email
            }
        )
    };
    return (
        <div>
            <div className='flex flex-col max-w-full my-auto mx-0 w-full min-w-[320px]'>
                <main className='bg-[#f0f3f8] flex flex-col flex-shrink flex-grow max-w-full'>
                    {/* <div className='v2board-background bg-[url("https://tuananh4g.com/static/picture/logo-tuananh4g-login.png")]'>

        </div> */}
                    <div className='flex flex-col flex-1'>

                        <div className="flex lg:h-[900px] h-[750px] flex-col flex-[0_1_auto] bg-contain bg-bottom bg-fixed	bg-no-repeat bg-[url('https://1dg.me/assets/media/bg-1.png')] ">
                            <div className='flex justify-center items-center flex-col flex-[0_1_auto] p-10 lg:pb-20'>

                                {/* {isError && <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{error.response.data.error}</Message>}
                                {isLoading && <Loading />} */}
                                <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    {/* {error && <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{error}</Message>}
    {loading && <Loading />} */}
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                            Sign up
                                        </h1>
                                        <div className='text-[#b5b5c3] font-medium text-xl text-center'>
                                            Do you have an account?
                                            <a href="/login" className="text-[#009ef7] font-semibold"> Login</a>
                                        </div>
                                        <form className="space-y-4 md:space-y-6"
                                        >
                                            <div>
                                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                                                <input type="text" onChange={(e) => setName(e.target.value)} name="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyễn Văn A" required=""
                                                />
                                            </div>
                                            <div>
                                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                                <input type="text" name="text" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""

                                                />
                                            </div>
                                            <div>
                                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                                <input type="phone" name="text" id="email" onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""

                                                />
                                            </div>
                                            <div>
                                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                                <input type="text" name="text" id="email" onChange={(e) => setUserName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dangtest" required=""

                                                />
                                            </div>
                                            <div>
                                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} autocomplete="on" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""

                                                />
                                            </div>
                                            {/* 
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <button style={{ backgroundColor: "black" }} type="button" className="w-full text-white  hover:bg-[#009ef7] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={submitHandler}>Sign up</button>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Register