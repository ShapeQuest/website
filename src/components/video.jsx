import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledVideo = styled.div`
  @media (min-width: 700px) {
    width: 75% !important;
    margin-left: auto;
    margin-right: auto;
  }
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  showInfo: PropTypes.bool,
  related: PropTypes.bool,
  loop: PropTypes.bool,
};

const defaultProps = {
  controls: false,
  showInfo: false,
  related: false,
  loop: false,
};

function Video({ id, title, controls, showInfo, related, loop }) {
  const url = `https://www.youtube.com/embed/${id}?vq=hd720&modestbranding=1&showinfo=${+showInfo}&controls=${+controls}&rel=${+related}&loop=${+loop}`;
  return (
    <StyledVideo className="video-responsive">
      <iframe title={title} src={url} frameBorder="0" />
    </StyledVideo>
  );
}

Video.defaultProps = defaultProps;

Video.propTypes = propTypes;

export default Video;
