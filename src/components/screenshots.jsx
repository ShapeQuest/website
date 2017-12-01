import React from "react";
import PropTypes from "prop-types";

function Input({ id, selected }) {
  return (
    <input
      type="radio"
      id={`slide-${id}`}
      name="carousel-radio"
      hidden="true"
      className="carousel-locator"
      checked={selected}
    />
  );
}
Input.defaultProps = {
  selected: false
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

function NavItem({ id }) {
  return (
    <label className="nav-item text-hide c-hand" htmlFor={`slide-${id}`}>
      {id}
    </label>
  );
}

NavItem.propTypes = {
  id: PropTypes.string.isRequired
};

function Item({ id, alt }) {
  const src = `images/gallery/gallery${id}.png`;
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

function Screenshots() {
  return (
    <div className="carousel">
      <Input id="1" selected />
      <Input id="2" />
      <Input id="3" />
      <Input id="4" />
      <Input id="5" />

      <div className="carousel-container">
        <Item id="1" />
        <Item id="2" />
        <Item id="3" />
        <Item id="4" />
        <Item id="5" />
      </div>

      <div className="carousel-nav">
        <NavItem id="1" />
        <NavItem id="2" />
        <NavItem id="3" />
        <NavItem id="4" />
        <NavItem id="5" />
      </div>
    </div>
  );
}

export default Screenshots;
