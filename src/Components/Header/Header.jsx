import './header.css'
import logo from '../../Images/logo.png'
import mobileLogo from '../../Images/mobileLogo.png'
import moment from 'moment';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { useEffect, useState } from 'react';
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    // Moments js start
    const formattedTime = moment().format('LLLL');
    // Moments js end

    // Work in headlines -- start
    const [news, setNews] = useState([]);

    const fetchRSS = (url) => {
        return fetch(url)
            .then(response => response.text())
            .then(xmlText => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                return Array.from(xmlDoc.querySelectorAll('item')).map(item => ({
                    title: item.querySelector('title')?.textContent,
                }));
            });
    }

    useEffect(() => {
        fetchRSS('https://rss.app/feeds/tYIjYw1dQiLPgsxK.xml')
            .then(items => setNews(items)  // Save the news in state
            )
            .catch(error => console.error('Error fetching RSS feed:', error));
    }, []);  // Only fetch once when component mounts

    // Work in headlines -- end

    //menu works
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    //menu works end


    return (
        <div>
            <div className='hidden md:block'>
                <div className='flex justify-between'>
                    <h1 className='mt-4 w-52 md:w-full md:ml-8'>{formattedTime}</h1>
                    <div className="flex gap-4 text-2xl mt-4">
                        <FaFacebook className='hover:bg-white cursor-pointer        hover:text-blue-700'></FaFacebook>
                        <FaSquareXTwitter className='hover:text-white cursor-pointer hover:bg-black'></FaSquareXTwitter>
                        <MdAttachEmail className='hover:text-red-700 cursor-pointer hover:bg-white mt-0.5'></MdAttachEmail>
                    </div>
                </div>
                <div className='md:flex md:gap-5 justify-between md:w-10/12 md:mx-auto'>
                    <img className='md:w-[400px] w-full h-48' src={logo} alt="" />
                    <div>
                        <div className='p-5 rounded-full bg-gray-600 mt-19'></div>
                    </div>
                    <h2 className='md:hidden'>its for mobile screen</h2>
                </div>
                <div>
                    <div className='hidden tiro-bangla-regular md:flex md:gap-5 text-xl justify-center  -mt-8'>
                        <h3 className='border-r pr-4  cursor-pointer border-gray-400  hover:text-blue-900 hover:border-b text-blue-500'>এনসিটিবি</h3>
                        <h3 className='border-r pr-4  cursor-pointer border-gray-400  hover:text-green-900 hover:border-b text-green-500'>চাকরি</h3>
                        <h3 className='border-r pr-4  cursor-pointer border-gray-400  hover:text-yellow-700 hover:border-b text-yellow-500'>সরকারি ঘোষনা</h3>
                        <h3 className='border-r pr-4  cursor-pointer border-gray-400  hover:text-pink-900 hover:border-b text-pink-500'>খবরের কাগজ</h3>
                        <h4 className='pr-4 cursor-pointer border-gray-400 hover:text-orange-800 hover:border-b text-orange-500'>দ্রব্যমুল্যের দাম</h4>
                    </div>
                </div>
                {/* headline setting  */}
                <div className='mt-10'>
                    <div className='news-ticker-container'>
                        <div className='news-ticker'>
                            {news.length > 0 ? (
                                <>
                                    {news.map((item, index) => (
                                        <span key={index} className='news-item'>
                                            {item.title} ।
                                        </span>
                                    ))}
                                </>
                            ) : (
                                <p>Loading news...</p>
                            )}
                        </div>
                    </div>
                </div>
                {/* headline setting end */}
            </div>

            {/* mobile screen header */}
            <div className='md:hidden'>
                <div className='flex'>
                    <img className='w-30 h-30 -ml-6' src={mobileLogo} alt="" />
                    <h1 className='text-center mt-12'>{formattedTime}</h1>
                    <div>
                        {!menu ?
                            <div className='mt-12 ml-10' onClick={handleMenu}>
                                <CiMenuFries className='text-3xl cursor-pointer rotate-180'></CiMenuFries>
                            </div>
                            :
                            <div className='bg-amber-50 w-90 h-screen soft-animate '>
                                <div onClick={handleMenu} className='ml-10 pt-5'>
                                    <CiMenuFries className=' cursor-pointer text-3xl hover:text-green-500  '> </CiMenuFries>
                                </div>
                                <div className='bg-amber-50 '>
                                    <div className='   p-10  tiro-bangla-regular text-xl  -mt-4'>
                                        <h3 className=' mt-5 cursor-pointer border-gray-400  hover:text-blue-900  text-blue-500'>এনসিটিবি</h3>
                                        <h3 className=' mt-5 cursor-pointer border-gray-400  hover:text-green-900  text-green-500'>চাকরি</h3>
                                        <h3 className=' mt-5 cursor-pointer border-gray-400  hover:text-yellow-700  text-yellow-500'>সরকারি ঘোষনা</h3>
                                        <h3 className=' mt-5 cursor-pointer border-gray-400  hover:text-pink-900  text-pink-500'>খবরের কাগজ</h3>
                                        <h4 className=' mt-5 cursor-pointer border-gray-400 hover:text-orange-800  text-orange-500'>দ্রব্যমুল্যের দাম</h4>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>
            {/* mobile screen header end */}
        </div>
    );
};

export default Header;
