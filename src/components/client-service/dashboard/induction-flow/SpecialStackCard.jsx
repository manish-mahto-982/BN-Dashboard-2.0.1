import React from "react";
import StackCard from "./StackCard";
import { FaRegCircleUser } from "react-icons/fa6";

function SpecialStackCard({ handleClick,item }) {
  return (
    <StackCard
      title="Special Stack"
      bgcolor={"success.main"}
      Icon={FaRegCircleUser}
      color="black"
      handleClick={handleClick}
      item={item}
    />
  );
}

export default SpecialStackCard;
