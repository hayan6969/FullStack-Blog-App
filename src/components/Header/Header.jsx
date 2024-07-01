import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useDispatch } from 'react-redux'
import { logout } from '@/store/authSlice'


function Header() {
  const dispatch = useDispatch()
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems=[
    {
      name:'Home',
      slug:'/',
      active:authStatus
    },
    {
      name:'Login',
      slug:'/login',
      active:!authStatus
    },
    {
      name:'Signup',
      slug:'/signup',
      active:!authStatus
    },
    {
      name:'My Posts',
      slug:'/my-posts',
      active:authStatus
    },
    {
      name:'Add Post',
      slug:'/add-post',
      active:authStatus
    }
  ]
  return (
    <header className='py-2  border-b-2 border-b-black'>
<Container>
  <nav className='flex justify-between'>
<div className='mr-4'>
<Link to='/'>
<Logo  />
</Link>
</div>
<div>
<ul className='flex ml-auto max-sm:hidden'>
{
  navItems.map((item)=>(
    item.active && <li key={item.name} className='mr-4'>
    <button
    onClick={()=>navigate(item.slug)}
    className='p-2 border-2 border-black rounded-xl hover:bg-black hover:text-yellow-300'
    >
      {item.name}
    </button>
  </li>
  ))
}
{authStatus && (<LogoutBtn />)}
</ul>
<div className='sm:hidden'>
<DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button className="bg-white" variant="default">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  className="w-56 flex bg-white flex-col">
       
       {
          navItems.map((item)=>(
            item.active && <DropdownMenuItem  key={item.name} value={item.slug} >
            <div className="hover:bg-yellow-200 w-full p-1" onClick={()=>(navigate(item.slug))}>{item.name}</div>
          </DropdownMenuItem>
          ))
       }
       {
        authStatus &&  <DropdownMenuItem>
          <div className="hover:bg-yellow-200 w-full p-1" onClick={()=>(dispatch(logout))}>Logout</div>
        </DropdownMenuItem>
       }
      </DropdownMenuContent>
    </DropdownMenu>
</div>
</div>
  </nav>
</Container>
    </header>
  )
}

export default Header