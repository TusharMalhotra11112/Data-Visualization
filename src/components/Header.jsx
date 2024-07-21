import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

export default function Header() {
  return (
    <div className='header'>
        <div className="searchbar">
            <input type="text" className='inputbox' placeholder='Search'/>
        </div>
        <div className="headerInterface">
            <WbSunnyIcon fontSize='large'/>
            <NotificationImportantIcon fontSize='large' />
        </div>
    </div>
  )
}
