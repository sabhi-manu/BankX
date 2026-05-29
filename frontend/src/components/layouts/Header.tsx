import { useAuth } from "../../context/AuthContext"


const Header = () => {
  const {authUser} = useAuth()
  
  return (
    <div className='  w-full px-2 shadow-xl/10 '>
      
      <div className='flex flex-col justify-between  gap-0 '>
        <p className='font-light'>Welcome back.</p>
        <p className='font-bold text-2xl'>{authUser?.user.userName.toUpperCase()} </p>
        <p className='font-light  '>Here's what's happening with our accounts today.</p>
      </div>
     
    </div>
  )
}

export default Header