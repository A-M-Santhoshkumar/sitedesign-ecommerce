import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
const CartTotel = () => {
    const { currency,deliveryFee, getCartAmout} = useContext(ShopContext)
  return (
    <div className='w-full'>
     <div className='text-2xl'>
       <Title text1={'Cart'} text2={'Totals'}/>

     </div>

     <div className='flex flex-col gap-2 mt-2 text-sm'>
          <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{getCartAmout()}</p>
          </div>
           <hr/>
          <div className='flex justify-between'>
            <b>Shipping Fee</b>
            <b>{currency}{deliveryFee}</b>

          </div>
          <hr/>
          <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency}{getCartAmout() === 0 ? 0 : getCartAmout() + deliveryFee}</b>

          </div>
     </div>
    </div>
  )
}

export default CartTotel