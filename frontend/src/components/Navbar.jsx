import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ setToken, token }) => {

  const [user, setUser] = useState()

  const getProfile = async (token) => {
    try {
      const response = await axios.get(backendUrl + '/api/auth/profile', {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.data.success) {
        setUser(response.data.data)
      } else {
        throw new Error(response.data.message || 'Failed to fetch profile');
      }
    } catch (error) {
      console.error('Fetch profile error:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      getProfile(token);
    }
  }, [token]);


  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <h2 className='font-bold text-2xl text-black'>Task Manager</h2>
      <div className='flex gap-2 items-center'>
        <span className='text-gray-600 px-5'>{user?.user?.name}</span>
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full' >Logout</button>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
