import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import image from './Walgreens-logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
           <div className="search">
           <span className="logo"><img width={190} height={100} margin-right={30} src={image}/></span>
           </div>
           <div className="searchs">
           <p>SPACE BENEFIT CURVE USER INTERFACE</p>
           </div>
           <div className="items">
             <div className="item">
              
             </div>
               <div className="item">
               
                </div>

                <div className="item">
                
                </div>

                <div className="item">
                
                
                </div>

                <div className="item">
                
                </div>

                <div className="item">
               
                </div>

                <div className="item">
                
                </div>

           </div>
        </div>
    </div>
  )
}
