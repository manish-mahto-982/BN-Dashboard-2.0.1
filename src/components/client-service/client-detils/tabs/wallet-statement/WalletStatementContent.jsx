import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { CustomToolbar } from "src/components/client-service/quick-access/DraftsTable";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import useShowDialog from "src/hooks/useShowDialog";
import AddWalletDialog from "./AddWalletDialog";

function WalletStatementContent({ theme, handleAddWallet }) {
  return (
    <>
      <FlexBoxBetween justifyContent={"end"} mb={2}>
        <PrimaryButton onClick={handleAddWallet} theme={theme}>
          Add Wallet
        </PrimaryButton>
      </FlexBoxBetween>
      <DataGrid
        rows={rows}
        getRowId={(params) => params["Sr No."]}
        columns={columns}
        sx={{
          minHeight: 300,
          fontSize: "small",
          "& .MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows":
            { fontSize: "small" },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        slots={{ toolbar: CustomToolbar }}
      />
    </>
  );
}

export default WalletStatementContent;

const columns = [
  { field: "Sr No.", flex: 1 },
  { field: "Date", flex: 1 },
  { field: "Description", flex: 1 },
  { field: "Credit/Debit", flex: 1 },
  { field: "Amount", flex: 1 },
  { field: "Total", flex: 1 },
];

const rows = [
  {
    "Sr No.": 1,
    Date: "Jan 17th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 12100",
  },
  {
    "Sr No.": 2,
    Date: "Jan 17th, 2024",
    Description: "Surprise Bonus",
    "Credit/Debit": "Credit",
    Amount: 1000,
    Total: "Rs 12000",
  },
  {
    "Sr No.": 3,
    Date: "Jan 13th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9800",
  },
  {
    "Sr No.": 4,
    Date: "Jan 13th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9700",
  },
  {
    "Sr No.": 5,
    Date: "Jan 13th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9600",
  },
  {
    "Sr No.": 6,
    Date: "Jan 13th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9500",
  },
  {
    "Sr No.": 7,
    Date: "Jan 11th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9400",
  },
  {
    "Sr No.": 8,
    Date: "Jan 10th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9300",
  },
  {
    "Sr No.": 9,
    Date: "Jan 10th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9200",
  },
  {
    "Sr No.": 10,
    Date: "Jan 9th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 9100",
  },
  {
    "Sr No.": 11,
    Date: "Jan 9th, 2024",
    Description: "Mentor Bonus",
    "Credit/Debit": "Credit",
    Amount: 1800,
    Total: "Rs 9000",
  },
  {
    "Sr No.": 12,
    Date: "Jan 8th, 2024",
    Description: "referral",
    "Credit/Debit": "Credit",
    Amount: 100,
    Total: "Rs 7200",
  },
];
