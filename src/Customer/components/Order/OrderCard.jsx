import AdjustIcon from '@mui/icons-material/Adjust';
import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/account/order/5")} className='p-5 shadow-lg hover:shadow-2xl'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p>Men Slim Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>
                        500
                    </p>
                </Grid>

                <Grid item xs={4}>
                    {
                        true &&
                        <div>
                            <p>
                                <AdjustIcon className='text-green-400 mr-2 text-sm' sx={{ width: "15px", height: "15px", }} />
                                <span>
                                    Delivered on march 03
                                </span>
                            </p>
                            <p className='text-xs'>
                                Your item has been delivered
                            </p>
                        </div>
                    }
                    {
                        false &&
                        <p>
                            <span>
                                Delivered on march 03
                            </span>
                        </p>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard