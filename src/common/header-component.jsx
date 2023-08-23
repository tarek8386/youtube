import React, { Component } from "react";
import Button from "./button-component";
import Input from "./input-component"
import Logo from './logo-component';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Logo/>
        </a>
        <form className="d-flex">
          <Input
            className="form-control me-3"
            type="search"
            placeholder="Search here"
            aria-label="Search"
            //value={searchQuery}
          />
          <Button
            className="btn btn-outline-success"
            type="submit"
            text="Search"
          />
        </form>
      </div>
    </nav>
  );
}

export default Header;
