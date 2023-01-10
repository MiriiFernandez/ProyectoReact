import React, { Component } from "react";

const navs = ["inicio", "Servicios", "Nuestra empresa"];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inicio: props.inicio,
      servicios: props.servicios,
      nuestraEmpresa: props.nuestraEmpresa,
    };
  }

  render() {
    return (
      <div>
        {navs.map((navs) => (
          <li key={navs}>{navs}</li>
        ))}
      </div>
    );
  }
}

export default Footer;
