import React from "react";
import PropTypes from "prop-types";

function Video({ src }) {
  return (
    <div className="video-responsive">
      <iframe
        title="intro"
        width="560"
        height="315"
        src={src}
        frameBorder="0"
      />
    </div>
  );
}

Video.propTypes = {
  src: PropTypes.string.isRequired
};

export default Video;
