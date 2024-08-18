import { Badge } from '../ui/badge'
import React from 'react'

function LatestJobCards({ companyName, location, jobTitle, jobDescription, positions, jobType, salary }) {
    return (
        <div className='p-5 cursor-pointer rounded-md shadow-xl bg-white border border-gray-100'>
            <div>
                <h1 className='font-medium text-lg'>{companyName}</h1>
                <p className='text-sm text-gray-500'>{location}</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{jobTitle}</h1>
                <p className='text-sm text-gray-600'>{jobDescription}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">{positions} Positions</Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">{jobType}</Badge>
                <Badge className='text-[#6A38C2] font-bold' variant="ghost">{salary}</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
