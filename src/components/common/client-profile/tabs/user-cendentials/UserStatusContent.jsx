import React from "react";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";

function UserStatusContent({ theme }) {
  return (
    <>
      <ComboBox
        options={["On Hold", "Dormant"]}
        sx={{ width: "300px", mb: 2 }}
      />
      <PrimaryButton theme={theme}>Save</PrimaryButton>
    </>
  );
}

export default UserStatusContent;
