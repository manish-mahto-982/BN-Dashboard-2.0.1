import { Box, Typography } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import React from "react";
import StackCard from "./StackCard";
import {
  newClientBasicStackTableData,
  omrClientBasicStackTableData,
} from "src/utils/tableData";

function BasicStackCard({ handleClick, item }) {
  return (
    <>
      <StackCard
        title="Basic Stack"
        bgcolor={"#3FAFA9"}
        handleClick={handleClick}
        cardData={basicStackCardData}
        Icon={FaRegCircleUser}
      />
    </>
  );
}

export default BasicStackCard;

const basicStackCardData = [
  {
    count: 25,
    title: "New Clients",
    ...newClientBasicStackTableData,
  },
  {
    count: 15,
    title: "Renewal",
    tableTitle: "Renewal Clients Enrolled For Basic Stack",
    ...omrClientBasicStackTableData,
  },
  {
    count: 20,
    title: "OCR Clients",
    tableTitle: "OMR Clients Enrolled For Basic Stack",
    ...omrClientBasicStackTableData,
  },
];
