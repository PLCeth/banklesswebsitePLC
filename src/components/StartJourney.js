import { Button } from '@mui/material'
import * as React from 'react'


export const Journey = (props) => {

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <h1 style={{padding: '40px'}}>Start Your Journey</h1>
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                <div><input placeholder='Your email address' type={"text"} style={{display: 'flex', padding: '18px'}} /></div>
                <div><Button variant="contained" color="error" style={{borderRadius: '0', textTransform: 'none', border: '0', padding: '15px'}}>Subscribe</Button></div>
            </div>
        </div>
    )
}