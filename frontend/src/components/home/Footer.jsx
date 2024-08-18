import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo or Brand Name */}
                    <div className="text-2xl font-bold mb-4 md:mb-0">
                        ProPath Career Network
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                       <Link to='/' className="hover:underline">Home</Link> 
                        {/* <Link to='/jobs' className="hover:underline">Jobs</Link> */}
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="#facebook" aria-label="Facebook" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.404.597 24 1.325 24h11.49v-9.294H9.847v-3.622h2.969V8.413c0-2.936 1.795-4.537 4.416-4.537 1.257 0 2.336.093 2.652.134v3.073h-1.82c-1.428 0-1.703.679-1.703 1.675v2.196h3.406l-.444 3.622h-2.962V24h5.803c.728 0 1.325-.596 1.325-1.326V1.326C24 .597 23.404 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="#twitter" aria-label="Twitter" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.043.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.422.725-.664 1.567-.664 2.465 0 1.701.867 3.2 2.188 4.078-.806-.025-1.565-.248-2.229-.616v.062c0 2.377 1.693 4.357 3.946 4.807-.412.112-.847.171-1.295.171-.316 0-.624-.031-.924-.089.625 1.954 2.444 3.377 4.6 3.415-1.685 1.32-3.809 2.106-6.115 2.106-.398 0-.79-.023-1.175-.068 2.179 1.396 4.767 2.209 7.548 2.209 9.058 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636.961-.693 1.796-1.56 2.457-2.548l-.047-.02z" />
                            </svg>
                        </a>
                        <a href="#linkedin" aria-label="LinkedIn" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.23 0H1.77C.792 0 0 .775 0 1.732v20.536C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.268V1.732C24 .775 23.208 0 22.23 0zM7.079 20.452H3.72V9.029h3.359v11.423zM5.399 7.725c-1.082 0-1.958-.88-1.958-1.966 0-1.086.876-1.965 1.958-1.965s1.959.879 1.959 1.965c0 1.086-.877 1.966-1.959 1.966zm14.633 12.727h-3.359v-5.569c0-1.328-.027-3.038-1.852-3.038-1.855 0-2.14 1.447-2.14 2.94v5.667h-3.358V9.029h3.222v1.556h.046c.449-.85 1.545-1.74 3.179-1.74 3.398 0 4.025 2.238 4.025 5.15v6.457z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    © 2024 ProPath Career Network. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
