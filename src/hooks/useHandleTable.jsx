import { IconButton, Input, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import { TbBrandWhatsapp } from "react-icons/tb";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import { handleWhatsApp } from "src/utils/helper";

function useHandleTable(item, handleClick) {
  let trigger;
  let res;
  if (item.fetchQuery) {
    [trigger, res] = item.fetchQuery?.();
  }
  const handleButtonClick = () => {
    trigger?.();
  };
  useEffect(() => {
    res?.data &&
      handleClick(res, item.columns, {
        actionType: item.actionType,
        actionColumn: item.actionColumn
          ? item.actionColumn
          : (row) => {
              const clientPhoneNumber = document
                ?.querySelector(`td#phone_${row.id}`)
                ?.innerHTML.replace(/[\+\-]/g, ""); //removing the + and - from the phoneNumber
              const mentorPhoneNumberEl = document?.querySelector(
                `td#mentor_phone_${row.id}`,
              );
              const MentorWA = () => (
                <Tooltip title={"Client-Whatsapp"}>
                  <IconButton
                    aria-label="whatsapp"
                    color="success"
                    onClick={() => handleWhatsApp(clientPhoneNumber)}
                  >
                    <TbBrandWhatsapp
                      style={{
                        strokeWidth: 1.4,
                        padding: 2,
                      }}
                      size={28}
                    />
                  </IconButton>
                </Tooltip>
              );
              if (mentorPhoneNumberEl) {
                mentorPhoneNumberEl.innerHTML += MentorWA();
              }
              return (
                <>
                  <Tooltip title={"Client-Whatsapp"}>
                    <IconButton
                      aria-label="whatsapp"
                      color="success"
                      onClick={() => handleWhatsApp(clientPhoneNumber)}
                    >
                      <TbBrandWhatsapp
                        style={{
                          strokeWidth: 1.4,
                          padding: 2,
                        }}
                        size={28}
                      />
                    </IconButton>
                  </Tooltip>
                  <FlexBoxBetween>
                    <Input placeholder="message" multiline />
                    <PrimaryButton
                      sx={{
                        lineHeight: "normal",
                        scale: "80%",
                      }}
                    >
                      Submit
                    </PrimaryButton>
                  </FlexBoxBetween>
                </>
              );
            },
        tableTitle: item.tableTitle ? item.tableTitle : "default",
      });
  }, [res]);
  return [handleButtonClick];
}

export default useHandleTable;
