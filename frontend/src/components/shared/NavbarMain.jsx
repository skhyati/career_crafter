import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'


function NavbarMain() {
    const user = false
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Career<span className='text-[#F83002]'>Crafters</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li><Link to='/'>Home</Link></li>
                        {/* <li><Link to='/jobs'>Jobs</Link></li> */}
                        <li><Link to='/browse'>Browse</Link></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                    </ul>
                    <div className='flex items-center gap-2'>
                        <Link to="/recruiter"><Button variant="outline">Recruiter</Button></Link>
                        <Link to="/jobseeker"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Job Seeker</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMain
