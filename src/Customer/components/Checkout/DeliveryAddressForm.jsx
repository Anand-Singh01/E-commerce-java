import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => 
{
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName:data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("streetAddress"),
            city: data.get("city"),
            province: data.get("province"),
            postalCode: data.get("postalCode"),
            phoneNumber:data.get("phoneNumber")
        }
        console.log("Address", address);
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] 
                overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' >Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border shadow-md p-5 rounded-s-md">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='firstName'
                                        name='firstName' label="First Name" fullWidth
                                        autoComplete='given-name' />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required id='lastName'
                                        name='lastName' label="Last Name" fullWidth
                                        autoComplete='given-name' />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField required id='streetAddress'
                                        name='streetAddress' label="Street Address" fullWidth
                                        multiline rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required id='city'
                                        name='city' label="City" fullWidth
                                         />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required id='province'
                                        name='province' label="Province" fullWidth
                                         />
                                </Grid>

                                
                                <Grid item xs={12} sm={6}>
                                    <TextField required id='postalCode'
                                        name='postalCode' label="Postal Code" fullWidth
                                         />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField id='phoneNumber'
                                        name='phoneNumber' label="Phone Number" fullWidth
                                         />
                                </Grid>

                                
                                <Grid item xs={12} sm={6}>
                                <Button sx={{ mt: 2, py:1.5, bgcolor: "RGB(145 85 100)" }} type='submit' size='large' variant='contained' >Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm