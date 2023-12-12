import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="card card-side bg-base-100 mb-3">
  <div className='w-1/2 relative'>
    <img className='w-3/4 h-80 mt-7 rounded-lg shadow-2xl' src={person} alt="Movie"/>
    <img className='w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white' src={parts} alt="Movie"/>
    </div>
  <div className="card-body w-1/2">
    <h2 className="card-title text-3xl text-orange-700 font-bold">About Us</h2>
    <h2 className=' text-5xl font-bold'>
    We are qualified & of experience in this field
    </h2>
    <p className='py-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
    <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
    <div className="card-actions justify-start">
      <button className="btn btn-error text-white">Get More info</button>
    </div>
  </div>
</div>
    );
};

export default About;