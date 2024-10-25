import Logo from '../../assets/logo/fincontrol-logo.svg'

import React, { useEffect } from 'react';

import './Loading.css'; // Add CSS for styling if needed

const Loading = () => {
  return (
    <div className="loading-container flex flex-col gap-5">
      <img src={Logo} alt="Logo" className="loading-logo" />
      {/* Add any additional loading indicators or text if needed */}
      <div className='flex flex-col justify-center text-center items-center'>
        <h1 className='text-3xl font-bold'>Welcome to the FinControl!</h1>
        <p className='text-sm'>loading your informations...</p>
      </div>
    </div>
  );
};

export default Loading;
