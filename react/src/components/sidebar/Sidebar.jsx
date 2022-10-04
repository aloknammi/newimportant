import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MarginIcon from '@mui/icons-material/Margin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Outlet, Link } from "react-router-dom";
import image from './Walgreens-logo.png'
export const Sidebar = () => {
  return (

    <div className="sidebar">
      <div className="top">
        <span className="logo"><img width={190} height={90} margin-right={30} src={image}/></span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span><Link to="/">Dashboard</Link></span>
          </li>


          <p className="title">Store</p>
          <li>
            <StoreIcon className="icon" />
            <span>Store</span>
          </li>



          <p className="title">KPI Selection</p>
          <li>
            <AttachMoneyIcon className="icon" />
            <span><Link to="/profit">Profit</Link></span>
          </li>
          <li>
            <TrendingUpIcon className="icon" />
            <span><Link to="/sales">Sales</Link></span>
          </li>
          <li>
            <MarginIcon className="icon" />
            <span><Link to="/margin">Margin</Link></span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span><Link to="/units">Units</Link></span>
          </li>
          <li>
            <AccountBalanceWalletIcon className="icon" />
            <span><Link to="/blended">Blended Metric</Link></span>
          </li>
            <Outlet/>
        </ul>
      </div>

    
    </div>
    
 
  )
}
