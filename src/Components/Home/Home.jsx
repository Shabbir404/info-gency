import DoctorPng from '../../icons/medical-team.png'
import hospitalPng from '../../icons/hospital-building.png'
import busPng from '../../icons/bus.png'
import trainPng from '../../icons/train-station.png'
import travelPng from '../../icons/destination.png'
import housPng from '../../icons/rent.png'
import shoppingPng from '../../icons/trolley.png'
import fireseervicePng from '../../icons/car.png'
import delivaryPng from '../../icons/fast-delivery.png'
import policePng from '../../icons/policeman.png'
import websitePng from '../../icons/web-link.png'
import clinicPng from '../../icons/clinic.png'
import bloodPng from '../../icons/blood.png'
import hotelPng from '../../icons/5-stars.png'
import carPng from '../../icons/carRent.png'
import technitianPng from '../../icons/technician.png'
import emergencyPng from '../../icons/hotline.png'
import classroomPng from '../../icons/icons8-classroom-48.png'
import agriculurePng from '../../icons/icons8-agriculture-48.png'
import './homer.css'

const Home = () => {
    return (
        <div className='md:mt-10 mt-5'>
            <div className='grid grid-cols-4 md:grid-cols-4 gap-4 md:gap3'>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={DoctorPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>ডাক্তার</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={hospitalPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>হাসপাতাল</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={busPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>বাস </h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={trainPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>ট্রেন</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={travelPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>দর্শনীয় স্থান</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={housPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>বাসা ভাড়া</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={shoppingPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>শপিং</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={fireseervicePng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>ফায়ার সার্ভিস</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={delivaryPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>কুরিয়ার</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={policePng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>থানা-পুলিশ</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={websitePng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>জরুরি সাইট</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={clinicPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>ডায়াগনস্টিক</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={bloodPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>রক্ত</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={hotelPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>হোটেল</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={carPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>গাড়ি ভাড়া</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={technitianPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>টেকনিশিয়ান</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={emergencyPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>জরুরি সেবা</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={classroomPng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>কোচিং</h1>
                </div>
                <div className='md:w-80 md:h-40 w-24 h-28 flex flex-col duration-300   hover:scale-105 hover:text-red-700   hover:cursor-pointer
             items-center justify-center   shadow-gray-200 shadow-xl rounded-lg p-2'>
                    <img className='md:w-20 md:h-20 w-12 h-12' src={agriculurePng} alt="" />
                    <h1 className='noto-serif-bengali text-md  md:text-2xl mt-2'>কৃষি</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;