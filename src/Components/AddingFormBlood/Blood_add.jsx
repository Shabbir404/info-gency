import { useState } from 'react';
import './blood.css'
import Select from 'react-select'

const Blood_add = () => {

    const options = [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' }
    ];
    const yesNo = [
        { value: 'yes', label: 'হ্যাঁ' },
        { value: 'no', label: 'না' },
    ];
    const gendar = [
        { value: 'male', label: 'পুরুষ' },
        { value: 'female', label: 'নারী' },
    ];
    const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
    const [selectedYesNo, setSelectedYesNo] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);

    const handleBloodGroupChange = selected => {
        setSelectedBloodGroup(selected);

    };

    const handleYesNoChange = selected => {
        setSelectedYesNo(selected);

    };

    const handleGenderChange = selected => {
        setSelectedGender(selected);

    };

    const handleFormSubmit = e => {
        e.preventDefault();

        const obj = {
            name: e.target.name.value,
            age: e.target.age.value,
            phone: e.target.phone.value,
            city: e.target.city.value,
            upazila: e.target.upazila.value,
            bloodGroup: selectedBloodGroup?.label || '',
            yesNo: selectedYesNo?.label || '',
            gender: selectedGender?.label || ''
        };

        console.log(obj);
    };

    return (
        <div className="mt-10">
            <div className="bg-green-50 w-6/12 h-[530px] mx-auto rounded-lg shadow-md">
                <h1 className="galada-regular text-3xl text-center pt-6">রক্তদান করতে ইচ্ছুকের নাম</h1>
                <hr className='border-t-2 mt-3 border-dashed border-gray-500' />

                <form onSubmit={handleFormSubmit} action="">
                    <div className=''>
                        <div className=" mt-4 flex gap-4 ">
                            <div className='ml-7'>
                                <legend className="fieldset-legend ">আপনার নাম লিখুন</legend>
                                <input name='name' type="text" className="w-96 input" placeholder="Type here" />
                            </div>
                            <div>
                                <h1 className='fieldset-legend'> আপনার রক্তের গ্রুপ কি?</h1>
                                <div className='w-48'>
                                    <Select
                                        defaultValue={selectedBloodGroup}
                                        onChange={handleBloodGroupChange}
                                        options={options}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <div className='ml-7'>
                                <legend className="fieldset-legend ">আপনার বয়স কত?</legend>
                                <input name='age' type="text" className="w-96 input" placeholder="Type here" />
                            </div>
                            <div>
                                <h1 className='fieldset-legend'> আগে রক্তদান করেছিন কি?</h1>
                                <div className='w-48'>
                                    <Select
                                        defaultValue={selectedYesNo}
                                        onChange={handleYesNoChange}
                                        options={yesNo}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <div className='ml-7'>
                                <legend className="fieldset-legend ">মোবাইল নাম্বার লিখুন</legend>
                                <input name='phone' type="text" className="w-96 input" placeholder="Type here" />
                            </div>
                            <div>
                                <legend className="fieldset-legend ">আপনি নারী/পুরুষ</legend>
                                <div className='w-48'>
                                    <Select
                                        defaultValue={selectedGender}
                                        onChange={handleGenderChange}
                                        options={gendar}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-3 mt-4'>
                            <div className='ml-7'>
                                <legend className="fieldset-legend ">জেলার নাম লিখুন</legend>
                                <input name='city' type="text" className="w-[290px] input" placeholder="Type here" />
                            </div>
                            <div className=''>
                                <legend className="fieldset-legend ">উপজেলার নাম লিখুন</legend>
                                <input name='upazila' type="text" className="w-[290px] input" placeholder="Type here" />
                            </div>
                        </div>
                        <button type='submit' className="btn btn-success text-white mt-6 w-full">নিজেকে যুক্ত করুন</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Blood_add;