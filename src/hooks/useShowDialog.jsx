import React, { useState } from "react";

function useShowDialog(initVal) {
  const [show, updateShow] = useState(false);
  const setShow = (newVal) => {
    updateShow(newVal);
  };
  return [show, setShow];
}

export default useShowDialog;
