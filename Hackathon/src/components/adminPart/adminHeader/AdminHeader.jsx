import React from 'react'
import Avatar from '@mui/material/Avatar';
import adminimg from './Ellipse.png'
import './adminheadstyle.css'

const AdminHeader = () => {
    return (
        <div className='adminHeader'>
            <div className='adminLogo'>
                <Avatar
                    alt="Remy Sharp"
                    src={adminimg}
                    sx={{ width: 150, height: 150 }}
                />
            </div>
            <div className='adminDetail'>
                <h1> Any Name </h1>
                <h3> Admin</h3>
            </div>

        </div>
    )
}

export default AdminHeader
