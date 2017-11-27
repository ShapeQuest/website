import React from "react";
import PropTypes from "prop-types";

function Video({ id, title, controls, showInfo, related, loop }) {
  const url = `https://www.youtube.com/embed/${
    id
  }?vq=hd720&modestbranding=1&showinfo=${+showInfo}&controls=${+controls}&rel=${+related}&loop=${+loop}`;
  return (
    <div className="video-responsive">
      <iframe title={title} src={url} frameBorder="0" />
    </div>
  );
}

Video.defaultProps = {
  controls: false,
  showInfo: false,
  related: false,
  loop: false
};

Video.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  showInfo: PropTypes.bool,
  related: PropTypes.bool,
  loop: PropTypes.bool
};

export default Video;
