import { useState } from 'react';
import './blood.css'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();


    const [postData, setPostData] = useState();

    const handleFormSubmit = e => {
        e.preventDefault();

        const obj = {
            name: e.target.name.value,
            age: e.target.age.value,
            phone: e.target.phone.value,
            city: e.target.city.value,
            upazila: e.target.upazila.value,
            url: e.target.url.value,
            bloodGroup: selectedBloodGroup?.label || '',
            yesNo: selectedYesNo?.label || '',
            gender: selectedGender?.label || ''
        };
        // console.log(obj);

        fetch('http://localhost:3000/bloodDonar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                setPostData(data);

                Swal.fire({
                    title: 'শুভেচ্ছা!',
                    text: `${obj.name} আপনার তথ্য সফলভাবে যুক্ত হয়েছে`,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
                    .then(() => {
                        navigate('/');
                    });

            })
            .catch(err => {
                console.error('Error:', err);
            });

    };

    return (
        <div className="mt-10">
            <div className="bg-green-50 w-6/12 h-[620px] mb-10 mx-auto rounded-lg shadow-md">
                <h1 className="galada-regular text-3xl text-center pt-6">রক্তদান করতে ইচ্ছুকের নাম</h1>
                <hr className='border-t-2 mt-3 border-dashed border-gray-500' />

                <form onSubmit={handleFormSubmit} action="">
                    <div className=''>
                        <div className=" mt-4 flex gap-4 ">
                            <div className='ml-7'>
                                <legend className="fieldset-legend ">আপনার নাম লিখুন</legend>
                                <input required name='name' type="text" className="w-96 input" placeholder="Type here" />
                            </div>
                            <div>
                                <h1 className='fieldset-legend'> আপনার রক্তের গ্রুপ কি?</h1>
                                <div className='w-48'>
                                    <Select
                                        required
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
                                <input required name='age' type="text" className="w-96 input" placeholder="Type here" />
                            </div>
                            <div>
                                <h1 className='fieldset-legend'> আগে রক্তদান করেছিন কি?</h1>
                                <div className='w-48'>
                                    <Select
                                        required
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
                                <input required name='phone' type="text" className="w-96 input" placeholder="Type here" />
                            </div>
                            <div>
                                <legend className="fieldset-legend ">আপনি নারী/পুরুষ</legend>
                                <div className='w-48'>
                                    <Select
                                        required
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
                                <input required name='city' type="text" className="w-[290px] input" placeholder="Type here" />
                            </div>
                            <div className=''>
                                <legend className="fieldset-legend ">উপজেলার নাম লিখুন</legend>
                                <input required name='upazila' type="text" className="w-[290px] input" placeholder="Type here" />
                            </div>
                        </div>
                        <div className='ml-7 mt-4'>
                            <legend className="fieldset-legend ">ছবির URL এ্যাড্রেস দিন</legend>
                            <input required name='url' type="text" className="w-[592px] input" placeholder="Type here" />
                        </div>
                        <button type='submit' className="btn btn-success text-white mt-6 w-full">নিজেকে যুক্ত করুন</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Blood_add;