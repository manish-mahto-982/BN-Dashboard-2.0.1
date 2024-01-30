import { Box, Typography } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import React from "react";
import StackCard from "./StackCard";

function BasicStackCard({ handleClick, item }) {
  return (
    <>
      <StackCard
        title="Basic Stack"
        bgcolor={"#3FAFA9"}
        handleClick={handleClick}
        item={item}
        Icon={FaRegCircleUser}
      />
    </>
  );
}

export default BasicStackCard;
