import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

function Job() {
    return (
        <div className='relative p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            {/* Bookmark Icon positioned at the top-right corner */}
            <div className='absolute top-3 right-3'>
                <Button variant='outline' className='rounded-full' size="icon"><Bookmark /></Button>
            </div>

            <p className='text-sm text-gray-600'>2 Days ago</p>

            <div className='flex items-center gap-2 my-2'>
                <Button className='p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="Company Logo" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-bold text-medium my-2'>Company Name</h1>
                    <p>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-medium my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est deleniti excepturi iste tempora distinctio vero quae quisquam doloremque temporibus!</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">12 Position</Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">Part Time</Badge>
                <Badge className='text-[#6A38C2] font-bold' variant="ghost">24 LPA</Badge>
            </div>
            <div className='flex item-center mt-4 gap-5'>
                <Button variant="outline">Details</Button>
                <Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Save for Later</Button>
            </div>
        </div>
    );
}

export default Job;
