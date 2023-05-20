import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as BookService from "../../Service/BookService"
import { useMutationHooks } from '../../hook/useMutationHooks'

function View() {
    const [data, setData] = useState([])
    const location = useLocation()

    const id = location.search.split('?id=')[1]

    const mutation = useMutationHooks(
        (data) => {
            const { id, access_token, ...rests } = data
            BookService.getDetails(id)
        }
    )
    const handleGetDetailsUser = async (id) => {
        const res = await BookService.getDetails(id)
        console.log(res)
        setData(res)
    }
    useEffect(() => {
        handleGetDetailsUser(id)
    }, [])
    return (
        <div>
            <div className='flex justify-center mt-5 mb-5 text-2xl'>
                Sách tiếng Việt Lớp 1
            </div>
            <div className='grid grid-cols-5 gap-10 mx-20 bg-gray-500 px-12 pb-12 '>
                <div className='col-span-3'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <div>Tiêu đề </div>
                            <input readOnly value={data.title} className='border border-black'></input>
                        </div>
                        <div>
                            <div>Tác giả  </div>
                            <input readOnly value={data.auther} className='border border-black'></input>
                        </div>
                    </div>
                    <div className='pr-52'>
                        <div>Mô tả về sách</div>
                        <textarea readOnly value={data.description} className='border border-black w-full h-32' />
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <div>Ngày phát hành </div>
                            <div
                                class="relative mb-3"
                                data-te-datepicker-init
                                data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    class="peer block min-h-[auto] rounded border-1  px-3 py-[0.32rem] leading-[1.6] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Select a date" />
                                <label
                                    for="floatingInput"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >Select a date</label
                                >
                            </div>
                        </div>
                        <div>
                            <div>Số trang </div>
                            <input readOnly value={data.count} className='border border-black'></input>
                        </div>
                    </div>
                    <div>
                        <div>Thể loại</div>
                        <div>
                            <select className='w-32' disabled>
                                {data.type === 'Toán học' && <option value="Toán học" selected>Toán Học</option>}
                                {data.type === 'Văn học' && <option value="Văn học" selected>Văn học</option>}
                                {data.type === 'Sử học' && <option value="Sử học" selected>Sử học</option>}
                                {data.type === 'Sinh học' && <option value="Sinh học" selected>Sinh học</option>}
                            </select>
                        </div>

                    </div>
                </div>
                <div className='col-span-2'>
                    <div class="flex justify-center mt-8">
                        <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                            <div class="m-4" >
                                <label class="inline-block mb-2 text-gray-500">Upload
                                    Image</label>
                                <div class="flex items-center justify-center w-full">
                                    <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                        <div class="flex flex-col items-center justify-center pt-7">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                Select a photo</p>
                                        </div>
                                        <input disabled type="file" class="opacity-0" />
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='border-b-2 border-black mt-3'></div>
            <div className='flex justify-center'>
                <Link to="/Edit"> <button class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Edit</button></Link>
                <button class="px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Add</button>
                <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Save</button>
            </div>
        </div>
    )
}

export default View