import { Button } from '@headlessui/react';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div
                container
                className='bg-black py-3 flex-col items-center justify-center text-white text-center mt-10'
            >
                <div className='flex justify-center gap-[10rem]'>
                    <div>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography className='pb-5' variant='h6'>Solutions</Typography>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                            </div>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                            </div>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                            </div>
                        </Grid>
                    </div>
                    <div>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography className='pb-5' variant='h6'>Documentation</Typography>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                            </div>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>API status</Button>
                            </div>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Insights</Button>
                            </div>
                        </Grid>
                    </div>

                    <div>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography className='pb-5' variant='h6'>Legal</Typography>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>
                            </div>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                            </div>
                            <div>
                                <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                            </div>
                        </Grid>
                    </div>
                </div>
                <div>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography className='pb-5' variant='h6'>&copy; 2024 ethnic wear shop. All rights reserved <br /> Made with 💓 by <span className="text-orange-600">Anandpravesh Singh</span></Typography>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Footer;
