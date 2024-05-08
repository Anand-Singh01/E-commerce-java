import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem'

const Cart = () => {

    const navigate = useNavigate();

    const handleCheckOut = ()=>
    {   
        navigate("/checkout?step=2");
    }
    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    <div className='flex flex-col gap-2'>
                        {
                            [1, 1, 1].map(() => {
                                return <CartItem />
                            })
                        }
                    </div>
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border p-5 rounded-lg'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-10'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>200</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Discount</span>
                                <span className='text-green-600'>-200</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free!!</span>
                            </div>
                            <hr />
                            <div className='flex justify-between pt-3  font-bold'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>200</span>
                            </div>
                        </div>

                        <Button onClick={handleCheckOut} className='w-full mt-5 ' color='secondary' variant='contained' sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd", mt: "1rem" }}>
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart