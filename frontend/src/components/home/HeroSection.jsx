import React from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

function HeroSection() {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 ProPath Career Network</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br />Get Your<span className='text-[#6A38C2]'> Dream Jobs</span></h1>
                <p>ProPath Career Network: Your ultimate destination to search, apply, and land your dream job effortlessly.</p>
            </div>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input type='text' placeholder='Find your dream jobs' className='outline-none border-none w-full'></input>
                <Button className="rounded-r-full bg-[#6A38C2]">
                    <Search className='w-5 h-5'/>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection
