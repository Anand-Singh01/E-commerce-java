import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20 '>
            <div>
                <h1 className='font-bold py-7 text-xl'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid className='space-y-5' container>
                {
                    [1, 1, 1].map((item) => {
                        return (
                            <Grid className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }} item container>
                                <Grid item xs={6}>
                                    <div className='flex items-center space-x-4'>
                                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70' alt='' />
                                        <div className='space-y-2 ml-5'>
                                            <p className='font-semibold'>Men Jeans</p>
                                            <p className='space-x-5 opacity-50 text-xs'><span>Color : pink</span><span>Size : M</span></p>
                                            <p>Seller: ola</p>
                                            <p>$1099</p>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item>
                                    <Box sx={{ color: deepPurple[500] }}>
                                        <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2 text-5xl' />
                                        <span>Rate and Review Product</span>

                                    </Box>
                                </Grid>



                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default OrderDetails