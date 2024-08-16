import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import src from "../../assets/group img.jpg"
export default function AboutUS() {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full p-4 bg-black text-white'>
            <div className='w-full h-16 flex items-center justify-between'>
                <BiArrowBack className='text-4xl font-bold text-black' onClick={() => navigate(-1)} />
            </div>
            <div className='w-full h-full flex items-center flex-col justify-center p-4 my-1 gap-5'>
                <h1 className='text-4xl font-semibold '>What we stand for</h1>
                <img className='border-orange-600 border-2' src={src}/>
                <p className='p-4 my-2 text-center'>
                At Pain-Gain Gym, we stand for empowering individuals to achieve their fitness goals and lead healthier lives. Our commitment is to provide a welcoming environment where everyone, regardless of fitness level, feels supported and motivated. We believe in innovation and excellence in our state-of-the-art equipment and diverse class offerings. Our dedicated team of trainers and staff are here to guide you with expertise and enthusiasm, ensuring that every workout is effective and enjoyable. Join us in our mission to make fitness a rewarding and integral part of your life.
                </p>
            </div>
        </div>
    )
}
