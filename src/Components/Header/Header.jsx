
import logo from '../../Images/logo.png'
import moment from 'moment';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
const Header = () => {
    const formattedTime = moment().format('LLLL');

    return (
        <div>
            <div className=''>
                <div className='flex justify-between'>
                    <h1 className='mt-4 w-52 md:w-full md:ml-8'> {formattedTime} </h1>
                    <div className="flex gap-4 text-2xl mt-4">
                        <FaFacebook className='hover:bg-white cursor-pointer hover:text-blue-700'></FaFacebook>
                        <FaSquareXTwitter className='hover:text-white cursor-pointer hover:bg-black'></FaSquareXTwitter>
                        <MdAttachEmail className='hover:text-red-700 cursor-pointer hover:bg-white mt-0.5'></MdAttachEmail>
                    </div>
                </div>
                <div className='md:flex md:gap-5 justify-between md:w-10/12 md:mx-auto'>
                    <img className=' md:w-[400px] w-full h-48 ' src={logo} alt="" />

                    <div>
                        <div className='p-5 rounded-full bg-gray-600 mt-19'>

                        </div>
                    </div>
                    <h2 className='md:hidden'>its for mobile screen</h2>
                </div>
                <div>

                    <div className='hidden md:flex md:gap-5 text-xl  justify-center -mt-8 '>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-blue-800 text-blue-500 '>এনসিটিবি</h3>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-green-800 text-green-500 '>চাকরি</h3>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-yellow-600 text-yellow-500 '>সরকারি ঘোষনা</h3>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-pink-800 text-pink-500 '>খবরের কাগজ</h3>
                        <h4 className=' pr-4 cursor-pointer border-gray-400 hover:text-orange-800  text-orange-500 '>দ্রব্যমুল্যের দাম</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;