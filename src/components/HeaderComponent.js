import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import CustomJumbotron from "./CustomJumbotron";



class Header extends Component {
    render() {
        return(
            <>
              <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <CustomJumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines , and create a unique fusion experience. Our lipsmaking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>
        </CustomJumbotron>
            </>
        );
    }
}
export default Header;