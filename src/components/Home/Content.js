import React from 'react'
import { Link } from 'react-router-dom'
import * as BookService from "../../Service/BookService"
import { useQuery } from 'react-query'

function Content() {
    const user = localStorage.getItem("users")

    const getbyAll = async () => {
        const res = await BookService.getAllBook()
        return res
    }
    const { isLoading, data } = useQuery(['getAllBook'], getbyAll)
    return (
        <div>
            <div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-left text-sm font-light">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">#</th>
                                            <th scope="col" class="px-6 py-4">Tiêu đề</th>
                                            <th scope="col" class="px-6 py-4">Tác giả</th>
                                            <th scope="col" class="px-6 py-4">Thể loại</th>
                                            <th scope="col" class="px-6 py-4">Ngày phát hành</th>
                                            <th scope="col" class="px-6 py-4">Số trang</th>
                                            <th scope="col" class={user ? "px-6 py-4" : "px-6 py-4 hidden"}>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data?.map((item, index) => <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
                                                <td class="whitespace-nowrap px-6 py-4"> {item.title}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{item.auther}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{item.type}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{item.releaseDate}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{item.count}</td>
                                                <td class={user ? "whitespace-nowrap px-6 py-4" : "whitespace-nowrap px-6 py-4 hidden"}>
                                                    <Link to={
                                                        {
                                                            pathname: "/View",
                                                            search: `?id=${item._id}`,
                                                        }
                                                    }>
                                                        <button className='px-3 py-2 bg-green-600 mr-2'>View</button>

                                                    </Link>
                                                    <button className='px-3 py-2 bg-green-600'>edit</button>
                                                </td>

                                            </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content