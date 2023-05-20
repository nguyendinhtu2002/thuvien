import React from 'react'

function View() {
    return (
        <div>
            <div className='flex justify-center mt-5 mb-5 text-2xl'>
                Sách tiếng Việt Lớp 1
            </div>
            <div className='grid grid-cols-5 gap-10 mx-20 bg-gray-500 px-12 pb-12'>
                <div className='col-span-3'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <div>Tiêu đề </div>
                            <input className='border border-black'></input>
                        </div>
                        <div>
                            <div>Tác giả  </div>
                            <input className='border border-black'></input>
                        </div>
                    </div>
                    <div className='pr-52'>
                        <div>Mô tả về sách</div>
                        <input className='border border-black w-full h-32'></input>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <div>Ngày phát hành </div>
                            <input className='border border-black'></input>
                        </div>
                        <div>
                            <div>Số trang </div>
                            <input className='border border-black'></input>
                        </div>
                    </div>
                    <div>
                        <div>Thể loại</div>
                        <div>
                            <select className='w-32'>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className='col-span-2'>
                    <div class="flex justify-center mt-8">
                        <div class="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                            <div class="m-4">
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
                                        <input type="file" class="opacity-0" />
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-b-2 border-black mt-3'></div>
            <div className='flex justify-center'>
            <button class="px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Add</button>
            <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Save</button>
            </div>
        </div>
    )
}

export default View