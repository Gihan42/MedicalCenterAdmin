import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightIcon from '@mui/icons-material/ModeNight';
export default class Header extends Component {
  render() {
    const navStyle="font-bold border-b-2"
    const clr="bg-black"
    return (
<div className='bg-slate-900 h-20 p-4 w-full fixed top-0 z-10 '>
        <div className=' w-full h-full	'>
            <div className='flex w-full h-full justify-center items-center'>
              
                <div className='w-1/2'>
                    <div className='flex w-full text-xl justify-center gap-12 '>
                      
                        <NavLink to={"/home"} className= 'cursor-pointer text-slate-300 pr-0'>Home</NavLink>
                        <NavLink to={"/about"} className='text-slate-300 '>About</NavLink>
                        <NavLink to={"/contact"} className='text-slate-300 '>Contact</NavLink>
                        <NavLink to={"/profile"} className='text-slate-300 '>Profile</NavLink>


                    </div>

                </div>
            </div>
        </div>
      </div>
    )
  }
}
