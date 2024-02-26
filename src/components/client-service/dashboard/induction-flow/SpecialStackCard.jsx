import React from "react";
import StackCard from "./StackCard";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  newClientSpecialStackTableData,
  omrClientSpecialStackTableData,
} from "src/utils/tableData";

function SpecialStackCard({ handleClick, item }) {
  return (
    <StackCard
      title="Special Stack"
      bgcolor={"success.main"}
      Icon={FaRegCircleUser}
      color="black"
      handleClick={handleClick}
      cardData={specialStackCardData}
    />
  );
}

export default SpecialStackCard;

const specialStackCardData = [
  {
    count: 25,
    title: "New Clients",
    tableTitle: "New Clients Enrolled For Special Stack",
    ...newClientSpecialStackTableData,
  },
  {
    count: 15,
    title: "Renewal",
    tableTitle: "OMR Clients Enrolled For Special Stack",
    ...omrClientSpecialStackTableData,
  },
  {
    count: 20,
    title: "OCR Clients",
    tableTitle: "OMR Clients Enrolled For Special Stack",
    ...omrClientSpecialStackTableData,
  },
];
