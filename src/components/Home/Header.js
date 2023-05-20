import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const user = localStorage.getItem("users")
    const handleDangXuat = ()=>{
        localStorage.removeItem("users")
        window.location.reload();
    }
    return (
        <div>
            <div className='bg-blue-600 text-white h-24 text-start grid grid-cols-5'>
                <div className='  col-span-4 text-3xl pt-5 pl-10'>
                    Thư viện Online
                </div>
                <div className={user ? 'hidden' : 'col-span-1'}>
                    <Link to='/Login'><button className={'bg-orange-500 px-5 py-2 mt-5'}>
                        Đăng nhập
                    </button></Link>
                    <Link to="/Register"><button className='bg-orange-500 px-5 py-2 mt-5'>
                        Đăng kí
                    </button></Link>


                </div>
                <div className={!user ? 'hidden' : 'col-span-1'}>

                    <button className='bg-orange-500 px-5 py-2 mt-5' onClick={handleDangXuat}>
                        Đăng xuất
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header