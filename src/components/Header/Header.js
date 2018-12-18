import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './style.scss';


class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">amb.to</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://explorer.ambrosus-test.com">Explorer</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://dashboard.ambrosus-test.com">Dashbord</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Others
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Amb.to
                      </DropdownItem>
                      <DropdownItem>
                        Validator
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Amb Nodes
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }

}


export default Header;