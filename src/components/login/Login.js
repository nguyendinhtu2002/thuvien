import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutationHooks } from '../../hook/useMutationHooks';
import * as UserService from "../../Service/UserService"

function Login() {
    const history = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )
    const { data, error, isLoading, isError, isSuccess } = mutation

    const submitHandler = async (e) => {
        e.preventDefault();

        mutation.mutate(
            {
                username,
                password
            }
        )
    };
    useEffect(() => {
        if (error === null && isSuccess) {
            
            localStorage.setItem('users', JSON.stringify(data))

            history("/")
            
            // dispatch(updateUser({ data }))
        }
        else if (error) {
            // if (!toast.isActive(toastId.current)) {
            //     toastId.current = toast.error(error.response.data.error, Toastobjects);
            // }
            console.log(error)
        }

        if(localStorage.getItem("users")){
            history("/")
        }
        
    }, [isSuccess, history])
    return (
        <div className='flex flex-col max-w-full my-auto mx-0 w-full min-w-[320px]'>
            <main className='bg-[#f0f3f8] flex flex-col flex-shrink flex-grow max-w-full'>
                {/* <div className='v2board-background bg-[url("https://tuananh4g.com/static/picture/logo-tuananh4g-login.png")]'>

                </div> */}
                <div className='flex flex-col flex-1'>

                    <div className="flex lg:h-[900px] h-[750px] flex-col flex-[0_1_auto] bg-contain bg-bottom bg-fixed	bg-no-repeat bg-[url('https://1dg.me/assets/media/bg-1.png')] ">
                        <div className='flex justify-center items-center flex-col flex-[0_1_auto] p-10 lg:pb-20'>
                            {/* {isError && <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{error.response.data.error}</Message>} */}
                            <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                {/* {error && <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{error}</Message>}
            {loading && <Loading />} */}
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                        Sign In
                                    </h1>
                                    <div className='text-[#b5b5c3] font-medium text-xl text-center'>
                                        New Here?
                                        <a href="/Register" className="text-[#009ef7] font-semibold"> Create an Account</a>
                                    </div>
                                    <form className="space-y-4 md:space-y-6" >
                                        <div>
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="text" name="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" autocomplete="on" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                                onChange={(e) => setPassword(e.target.value)}

                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                                </div>
                                            </div>
                                            <Link to="/ResetPassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                        </div>
                                        <button style={{ backgroundColor: "black" }} type="submit" className="w-full text-white  hover:bg-[#009ef7] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={submitHandler}>Sign in</button>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login