import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { logout } from "../features/AuthSlice"
import { useEffect } from "react"
export const Userprotected=({children})=>{
        const {user} = useSelector(s=>s.auth)
        const dispatch =useDispatch()
        useEffect(() => {
        if (user && user.type !== 'jobseeker') {
            dispatch(logout());
        }
    }, [user, dispatch])
    return(
       user && user.type === 'jobseeker'?children:
  

        <Navigate to={'/'} replace={true}/>
    )

}

