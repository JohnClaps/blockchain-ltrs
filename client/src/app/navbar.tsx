'use client';
import Image from 'next/image';
import  "./wp-style.css";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const handleLoginClick=()=>{
    router.push("/login");
  };
  const handleSignUpClick=()=>{
    router.push('/signup');
  };
  return (
    <nav className="bg-[#ffffff] text-black px-6 py-3 flex items-center justify-between shadow-md">
      {/* Left Section: Logo and Menu */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Image src="/logo.jpg" height={100} width={100} alt='logo'/>
        <label htmlFor="label"><h2>Student-LTRS</h2></label>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
  {['Student', 'HESLGB', 'Resources', 'Loans', 'Universities/Colleges', 'T&Cs'].map((item, idx) => {
    let dropdownItems: any[];

    // Define different dropdown items per menu
    switch (item) {
      case 'Student':
        dropdownItems = ['Apply for Loan', 'Check Status', 'My Account'];
        break;
      case 'HESLGB':
        dropdownItems = ['About Us', 'Contact', 'Staff Portal'];
        break;
      case 'Resources':
        dropdownItems = ['Guidelines', 'FAQs', 'Downloads'];
        break;
      case 'Loans':
        dropdownItems = ['Loan Types', 'Eligibility', 'Repayment'];
        break;
      case 'Universities/Colleges':
        dropdownItems = ['Accredited List', 'Apply as Institution', 'Support'];
        break;
      case 'T&Cs':
        dropdownItems = ['Terms of Service', 'Privacy Policy'];
        break;
      default:
        dropdownItems = [];
    }

    return (
      <li key={item} className="relative group cursor-pointer">
        <div className="flex items-center space-x-1 hover:text-blue-500">
          <span>{item}</span>
          <span>▾</span>
        </div>

        {/* Dropdown Menu */}
        {dropdownItems.length > 0 && (
          <ul className="absolute left-0 mt-2 w-56 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
            {dropdownItems.map((option) => (
              <li key={option} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  })}
</ul>
      </div>

      {/* Right Section: Search + Auth Buttons */}
      <div className="flex items-center space-x-4">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search or jump to…"
          className="bg-[gray] text-white text-sm px-4 py-1 rounded border border-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
        />

        {/* Auth Buttons */}
        <button onClick={handleSignUpClick} className="text-sm px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
            Sign Up
        </button>
        <button onClick={handleLoginClick} className="text-sm px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-grey-500 hover:text-yellow transition">
            Login 
        </button>
      </div>
    </nav>
  );
}
