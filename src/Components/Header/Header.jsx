import logo from '../../Images/logo.png'


const Header = () => {
    return (
        <div>
            <div className='md:flex md:gap-5 '>
                <img className='hidden md:block w-[400px] h-48 ' src={logo} alt="" />

                <div className='hidden md:flex md:gap-5 text-2xl mt-19 '>
                    <h3>এনসিটিবি</h3>
                    <h3>চাকরি</h3>
                    <h3>সরকারি ঘোষনা</h3>
                    <h3>খবরের কাগজ</h3>
                    <h4>দ্রব্যমুল্যের দাম</h4>
                </div>
                <div>

                </div>
                <h2 className='md:hidden'>its for mobile screen</h2>
            </div>
        </div>
    );
};

export default Header;