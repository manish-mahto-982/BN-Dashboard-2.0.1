// MTDPopover.jsx
import PropTypes from "prop-types";
import React from "react";
import Typography from "@mui/material/Typography";

const MTDPopover = ({ content }) => {
  return <Typography sx={{ p: 3 }}>{content}</Typography>;
};

// Define prop types
MTDPopover.propTypes = {
  content: PropTypes.node.isRequired,
};


// test
export default MTDPopover;
