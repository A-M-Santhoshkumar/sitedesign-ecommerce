import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotel from '../components/CartTotel';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';

function PlaceOrder() {
  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"Delivery"} text2={'Information'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='First Name' type="text" />
          <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='Last Name' type="text" />
        </div>

        <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='Email Address' type="email" />
        <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='Phone Number' type="number" />

        <div className='flex gap-3'>
          <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='Address' type="text" />
          <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='City' type="text" />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='State' type="text" />
          <input className='border border-gray-300 py-1.5 px-3.5 w-full' placeholder='Zip Code' type="number" />
        </div>
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotel />
        </div>

        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'} />

          <div className='flex gap-3 flex-col lg:flex-row'>

            {/* Stripe Option */}
            <div 
              onClick={() => setMethod('stripe')} 
              className='flex items-center cursor-pointer gap-3 border px-4 py-2 rounded'
            >
              <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${method === 'stripe' ? 'bg-green-400' : ''}`}></div>
              <img className='h-5' src={assets.stripe_logo} alt="Stripe" />
            </div>

            {/* Razorpay Option */}
            <div 
              onClick={() => setMethod('razorpay')} 
              className='flex items-center cursor-pointer gap-3 border px-4 py-2 rounded'
            >
              <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${method === 'razorpay' ? 'bg-green-400' : ''}`}></div>
              <img className='h-5' src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            {/* Cash on Delivery Option */}
            <div 
              onClick={() => setMethod('cod')} 
              className='flex items-center cursor-pointer gap-3 border px-4 py-2 rounded'
            >
              <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${method === 'cod' ? 'bg-green-400' : ''}`}></div>
              <p className='text-gray-500 text-sm font-medium'>Cash On Delivery</p>
            </div>

          </div>
          <div className='w-full text-end mt-8 '>
            <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
