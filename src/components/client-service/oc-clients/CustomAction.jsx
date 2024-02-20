import { TbBrandWhatsapp, TbMail, TbMessage } from "react-icons/tb";
import FlexBoxBetween from "../common/FlexBoxBetween";
import { IconButton, Tooltip } from "@mui/material";

const CustomAction = (row) => {
  const phoneNumber = document
    ?.querySelector(`td#phone_${row.id}`)
    ?.innerHTML.replace(/[\+\-]/g, "");
  return (
    <FlexBoxBetween columnGap={1}>
      <Tooltip title={"Whatsapp"}>
        <IconButton
          aria-label="whatsapp"
          color={"success"}
          onClick={() => handleWhatsApp(phoneNumber)}
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
      <Tooltip title={"Email"}>
        <IconButton aria-label="email" color={"warning"}>
          <TbMail
            style={{
              strokeWidth: 1.4,
              padding: 2,
            }}
            size={28}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Wati"}>
        <IconButton aria-label="wati" color={"text"}>
          <TbMessage
            style={{
              strokeWidth: 1.4,
              padding: 2,
            }}
            size={28}
          />
        </IconButton>
      </Tooltip>
    </FlexBoxBetween>
  );
};

export default CustomAction;
