import React from 'react'
import { User32, Stethoscope32, Portfolio32, Chat32, HealthCross32, Grid32 } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './style'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="#">
          <NavButton
            hasIconOnly
            renderIcon={Grid32}
            iconDescription="Dashboard"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Balances"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="#">
          <NavButton
            hasIconOnly
            renderIcon={HealthCross32}
            iconDescription="Customers"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="#">
          <NavButton
            hasIconOnly
            renderIcon={Stethoscope32}
            iconDescription="Analytics"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="#">
          <NavButton
            hasIconOnly
            renderIcon={User32}
            iconDescription="Settings"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="#">
          <NavButton
            hasIconOnly
            renderIcon={Chat32}
            iconDescription="Team"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="#">
          <NavButton
            hasIconOnly
            renderIcon={Chat32}
            iconDescription="Contact"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="#">
          <NavButton
            hasIconOnly
            renderIcon={Chat32}
            iconDescription="Logout"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav;