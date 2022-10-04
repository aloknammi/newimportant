import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MarginIcon from '@mui/icons-material/Margin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const Widget = ({type}) => {

    let data;

    switch(type){
        case "profit" :
            data = {
                title: "PROFIT",
                isMoney: false,
                link: 'See all profits',
                icon: <AttachMoneyIcon className="icon"/>
            }
            break;
            case "sales" :
                data = {
                    title: "SALES",
                    isMoney: false,
                    link: 'See all sales',
                    icon: <TrendingUpIcon className="icon"/>
                }
                break;
                case "margin" :
                    data = {
                        title: "MARGIN",
                        isMoney: false,
                        link: 'See all margin',
                        icon: <MarginIcon className="icon"/>
                    }
                    break;
                    case "unit" :
                        data = {
                            title: "UNIT",
                            isMoney: false,
                            link: 'See all unit',
                            icon: <ShoppingCartIcon className="icon"/>
                        }
                        break;
                        case "blended" :
                            data = {
                                title: "BLENDED",
                                isMoney: false,
                                link: 'See all blended metric',
                                icon: <AccountBalanceWalletIcon className="icon"/>
                            }
                            break;
            default:
                break;
    }

  return (
      <div className="widget">
          <div className="left">
              <span className="title">{data.title}</span>
              <span className="counter">20000</span>
              <span className="link">{data.link}</span>
          </div>
          <div className="right">
              <div className="percentage positive">
                  <KeyboardArrowUpIcon />
                  20%
              </div>
              {data.icon}
          </div>
      </div>
  )
}
