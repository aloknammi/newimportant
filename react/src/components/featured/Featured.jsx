import React from 'react'
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 

export const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <p className='title'>Total sales made .. day</p>
                <p className='amount'>$400</p>
                <p className='desc'>Sample Description , we can add any description here .</p>

                {/*<div className='summary'>
                    <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult'>
                    <div className='resultAmount'>$12.4k</div>
                    </div>
                    </div>
                       </div> */}

            </div>
        </div>
    )
}
