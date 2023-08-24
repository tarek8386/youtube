import React, { Component } from "react";
import Button from "./button-component";
import Searchbox from "./searchbox-component";
import Logo from "./logo-component";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Logo />
        </a>

        <form
          className="d-flex"
          onSubmit={(e) => {
            props.handleSearch(e);
          }}
        >
          <Searchbox searchedValue={props.searchedValue} />
          <Button handleSearch={props.handleSearch} />
        </form>
      </div>
    </nav>
  );
}

export default Header;
