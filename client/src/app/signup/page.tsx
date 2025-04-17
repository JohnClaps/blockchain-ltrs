'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import { FaFacebook,FaGlobe,FaLinkedin,FaXTwitter } from 'react-icons/fa6';


type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'student' | 'lender' | 'institution';
  walletAddress?: string;
  termsAccepted: boolean;
};

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student',
    walletAddress: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWalletConnect, setShowWalletConnect] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    // Show wallet address field for non-students
    if (name === 'userType') {
      setShowWalletConnect(value !== 'student');
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (showWalletConnect && !formData.walletAddress) {
      newErrors.walletAddress = 'Wallet address is required';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Redirect based on user type
      router.push('');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const connectWallet = () => {
    // In a real app, this would connect to MetaMask or similar
    setFormData(prev => ({
      ...prev,
      walletAddress: '0x' + Math.random().toString(36).substring(2, 42),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Sign Up | Student-LTRS</title>
        <meta name="description" content="Create your Student-LTRS account" />
      </Head>

      <div className="max-w-md mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-indigo-600 hover:text-indigo-700">Student-LTRS
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join our blockchain-powered loan management system
          </p>
        </div>

        <div className="bg-green py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating account...
                  </>
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
            
          </form>
          
        </div>
        
      </div>
    </div>
  );
}
// to be added later on
{/* <div className='horizontal-line'>
<a href='' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
<FaFacebook className="hover:text-blue transition-colors duration-200" size={25} />  
</a>
<a href='' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
<FaLinkedin className="hover:text-blue transition-colors duration-200" size={25} />  
</a>
<a href='' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
<FaGlobe className="hover:text-blue transition-colors duration-200" size={25} />  
</a>
<a href='' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
<FaXTwitter className="hover:text-blue transition-colors duration-200" size={25} />  
</a>
</div> */}
