import {Outlet,Navigate}  from "react-router-dom";

const PrivateRoutes = ()=>{

    const user = window.localStorage.getItem("users");
    return (
        user ? <Outlet/> : <Navigate to ="/Login"/> 
    )
}

export default PrivateRoutes