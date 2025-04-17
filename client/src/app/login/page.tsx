'use client';

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-6">
        
        {/* Left Illustration & Title */}
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Welcome to HESLGB <span className="font-bold text-black">Loan Tracking & Repayment System</span>
          </h1>
          <Image
            src="https://cdn.pixabay.com/photo/2020/09/13/20/28/graduate-5569301_1280.png" // Replace with your actual path (e.g. public folder)
            alt="Graduate Illustration"
            className="w-[300px] h-auto"
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>

        {/* Login Card */}
        <div className="bg-yellow-400 rounded-lg p-8 shadow-lg space-y-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Sign In</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md border outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded"
            >
              Login
            </button>
          </form>

          {/* Social Login */}
          <div className="text-center mt-6">
            <p className="mb-2 font-medium text-sm text-gray-800">OR Continue with :</p>
            <div className="flex justify-center space-x-6 text-2xl">
              <FcGoogle className="cursor-pointer" />
              <FaFacebook className="text-blue-600 cursor-pointer" />
              <FaLinkedin className="text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between mt-6 text-sm font-semibold underline text-gray-800">
            <a href="#" className="hover:text-blue-600">Create Account</a>
            <a href="#" className="hover:text-blue-600">Password Reset</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-2 left-0 w-full text-xs text-center text-gray-700 flex justify-center items-center gap-4">
        <div className="flex items-center space-x-1">
          <span>©</span>
          <span>heslgbtrts-copytight@2025</span>
          <a href='https://web.facebook.com/HESLGBOFFICIALPAGE/?_rdc=1&_rdr#' target='_blank' rel='noopener noreferrer'>
          <FaFacebook className='hover:text-blue transition-colors duration-200' size={25}/>
          </a>
          <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='hover:text-blue transition-colors duration-200' size={25}/>
          </a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='hover:text-blue transition-colors duration-200' size={25}/>
          </a>
          <a href='https://www.x.com' target='_blank' rel='noopener noreferrer'>
          <FaXTwitter className='hover:text-blue transition-colors duration-200' size={25}/>
          </a>
        </div>
      </footer>
    </div>
  );
}
