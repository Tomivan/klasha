import React from 'react';
import { SideNavItems, SideNavMenu, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import Klasha from '../../assets/images/logo.svg';
import Analytics from '../../assets/images/Analytics.svg';
import Call from '../../assets/images/Call.svg';
import Dashboard from '../../assets/images/dashboard.svg';
import Customer from '../../assets/images/customer.svg';
import Filter from '../../assets/images/Filter.svg';
import Logout from '../../assets/images/Logout.png';
import Star from '../../assets/images/Star.svg';
import Wallet from '../../assets/images/Wallet.svg';
import './sidebar.css';
import { StyledSideNav } from './style';

const Sidebar = () => {
    return(
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" class="sidenav">
           <div className="nav-heading">
               <img src={Klasha} alt="The Klasha logo" className="logo"/>
           </div>
           <SideNavItems>
          <SideNavMenu title="Main Pages">
            <SideNavMenuItem><img src={Dashboard} alt="Dashboard icon" className="nav-icon"/>Dashboard</SideNavMenuItem>
            <SideNavMenuItem aria-current="page"><img src={Wallet} alt="Balance icon" className="nav-icon"/>Balances</SideNavMenuItem>
            <SideNavMenuItem><img src={Customer} alt="Customers icon" className="nav-icon"/>Customers</SideNavMenuItem>
            <SideNavMenuItem><img src={Analytics} alt="Analytics icon" className="nav-icon"/>Analytics</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="General">
            <SideNavMenuItem><img src={Filter} alt="Settings" className="nav-icon"/>Settings</SideNavMenuItem>
            <SideNavMenuItem><img src={Star} alt="Team icon" className="nav-icon"/>Team</SideNavMenuItem>
            <SideNavMenuItem><img src={Call} alt="Contact icon" className="nav-icon"/>Contact</SideNavMenuItem>
            <SideNavMenuItem><img src={Logout} alt="Logout icon" className="nav-icon"/>Logout</SideNavMenuItem>
          </SideNavMenu>
        </SideNavItems>
        </StyledSideNav>
    );
};
export default Sidebar;
