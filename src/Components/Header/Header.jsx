import './header.css'
import logo from '../../Images/logo.png'
import moment from 'moment';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { useEffect, useState } from 'react';

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
        fetchRSS('https://rss.app/feeds/VrFCl8SxHknLdcAz.xml')
            .then(items => setNews(items)  // Save the news in state
            )
            .catch(error => console.error('Error fetching RSS feed:', error));
    }, []);  // Only fetch once when component mounts

    // Work in headlines -- end

    return (
        <div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='mt-4 w-52 md:w-full md:ml-8'>{formattedTime}</h1>
                    <div className="flex gap-4 text-2xl mt-4">
                        <FaFacebook className='hover:bg-white cursor-pointer hover:text-blue-700'></FaFacebook>
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
                    <div className='hidden tiro-bangla-regular md:flex md:gap-5 text-xl justify-center -mt-8'>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-blue-900 text-blue-500'>এনসিটিবি</h3>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-green-900 text-green-500'>চাকরি</h3>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-yellow-700 text-yellow-500'>সরকারি ঘোষনা</h3>
                        <h3 className='border-r pr-4 cursor-pointer border-gray-400 hover:text-pink-900 text-pink-500'>খবরের কাগজ</h3>
                        <h4 className='pr-4 cursor-pointer border-gray-400 hover:text-orange-800 text-orange-500'>দ্রব্যমুল্যের দাম</h4>
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
        </div>
    );
};

export default Header;
