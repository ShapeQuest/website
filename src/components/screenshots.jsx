import React, { Component } from "react";

function Input({ id, selected }) {
  return (
    <input
      type="radio"
      id={`slide-${id}`}
      name="carousel-radio"
      hidden={true}
      className="carousel-locator"
      checked={selected}
    />
  );
}

function NavItem({ id }) {
  return (
    <label className="nav-item text-hide c-hand" htmlFor={`slide-${id}`}>
      {id}
    </label>
  );
}

function Item({ src, alt }) {
  return (
    <figure className="carousel-item">
      {/* <label className="item-prev btn btn-action btn-lg" htmlFor="slide-4">
        <i className="icon icon-arrow-left" />
      </label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-2">
        <i className="icon icon-arrow-right" />
      </label> */}
      <img src={src} className="img-responsive rounded" alt={alt} />
    </figure>
  );
}

class Screenshots extends Component {
  render() {
    return (
      <div className="carousel">
        <Input id="1" selected />
        <Input id="2" />

        <div className="carousel-container">
          <Item src="images/gallery/gallery1.png" />
          <Item src="images/gallery/gallery2.png" />
        </div>

        <div className="carousel-nav">
          <NavItem id="1" />
          <NavItem id="2" />
        </div>
      </div>
    );
  }
}

export default Screenshots;
