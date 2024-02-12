import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { TbBrandWhatsapp, TbCash, TbCopy, TbEdit } from "react-icons/tb";
import EditPaymentLinkDialog from "src/components/client-service/client-detils/EditPaymentLinkDialog";
import FullWidthTabs from "src/components/client-service/client-detils/FullWidthTabs";
import AddWalletDialog from "src/components/client-service/client-detils/tabs/wallet-statement/AddWalletDialog";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import IconButtonWithToolTip from "src/components/client-service/common/IconButtonWithToolTip";
import LayoutContainerTitle from "src/components/client-service/layout/LayoutContainerTitle";
import NotificationSwitch from "src/components/client-service/switches/NotificationSwitch";
import WatiSwitch from "src/components/client-service/switches/WatiSwitch";
import useShowDialog from "src/hooks/useShowDialog";
import CSLayout from "../layout";
import MDTypography from "src/components/theme/common/MDTypography";
import MDButton from "src/components/theme/common/MDButton";
import colors from "src/assets/theme/base/colors";

function ClientDetails() {
  const theme = useTheme();
  const [open, setOpen] = useShowDialog(false);
  const [openEditPaymentLinkDialog, setOpenEditPaymentLinkDialog] =
    useShowDialog(false);
  const handleAddWallet = () => setOpen(true);
  const handleEditLink = () => setOpenEditPaymentLinkDialog(true);
  return (
    <CSLayout>
      <Grid container>
        <Grid width={"100%"} className="overflow-x-scroll" mt={2} item xs={12}>
          <FlexBoxBetween>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              color="info"
              className="h-10"
            >
              <Button sx={{ color: "text" }}>
                Session&nbsp;Total&nbsp;:&nbsp;
                <strong
                  style={{
                    color: "text",
                    fontSize: "14px",
                  }}
                >
                  12
                </strong>
                &nbsp;
              </Button>
              <Button sx={{ color: "text" }}>
                Sent&nbsp;:&nbsp;
                <strong
                  style={{
                    color: "text",
                    fontSize: "14px",
                  }}
                >
                  12
                </strong>
                &nbsp;
              </Button>
              <Button sx={{ color: "text" }}>
                Pending&nbsp;:&nbsp;
                <strong
                  style={{
                    color: "text",
                    fontSize: "14px",
                  }}
                >
                  12
                </strong>
                &nbsp;
              </Button>
              <Button sx={{ color: "text" }}>
                Pending&nbsp;(Days)&nbsp;Validity&nbsp;:&nbsp;
                <strong
                  style={{
                    color: "text",
                    fontSize: "14px",
                  }}
                >
                  12
                </strong>
                &nbsp;
              </Button>
              <NotificationSwitch />
              <Divider variant="vertical" />
              <WatiSwitch />
            </ButtonGroup>
          </FlexBoxBetween>
          <Divider sx={{ width: "100%", mt: 2 }} />
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ mb: 2 }}>
            <Grid container width={"100%"} p={2}>
              <Grid item xs={12} md={6} lg={4}>
                {clientDetails.slice(0, 6).map((item) => {
                  return Object.entries(item).map(([key, value]) => {
                    const title = key;
                    return (
                      <TitleValueText
                        key={key}
                        title={key}
                        value={value}
                        theme={theme}
                      />
                    );
                  });
                })}
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {clientDetails.slice(6, 12).map((item) => {
                  return Object.entries(item).map(([key, value]) => {
                    const title = key;
                    return (
                      <TitleValueText
                        key={key}
                        title={key}
                        value={value}
                        theme={theme}
                      />
                    );
                  });
                })}
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                {clientDetails.slice(12, clientDetails.length).map((item) => {
                  return Object.entries(item).map(([key, value]) => {
                    const title = key;
                    return (
                      <TitleValueText
                        key={key}
                        title={key}
                        value={value}
                        theme={theme}
                        handleAddWallet={handleAddWallet}
                        handleEditLink={handleEditLink}
                      />
                    );
                  });
                })}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <FullWidthTabs handleAddWallet={handleAddWallet} />
        </Grid>
        <AddWalletDialog
          openDialog={open}
          setOpenDialog={setOpen}
          theme={theme}
        />
        <EditPaymentLinkDialog
          openDialog={openEditPaymentLinkDialog}
          setOpenDialog={setOpenEditPaymentLinkDialog}
          theme={theme}
        />
      </Grid>
    </CSLayout>
  );
}

export default ClientDetails;

const TitleValueText = ({
  title,
  value,
  theme,
  handleAddWallet,
  handleEditLink,
}) => {
  return (
    <tr style={{ height: 26 }}>
      <td>
        <MDTypography
          fontSize="small"
          whiteSpace={"nowrap"}
          textTransform={"capitalize"}
          color={"text"}
        >
          {title.split("_").join(" ")}&nbsp;:&nbsp;
        </MDTypography>
      </td>
      <td
        style={{
          display: title.includes("user_status") ? "flex" : "unset",
          alignItems: "center",
        }}
      >
        <MDTypography
          fontSize="small"
          display={"inline"}
          textTransform={"capitalize"}
          color={"text"}
          width={"fit-content"}
        >
          <strong
            style={{
              marginRight: 6,
            }}
          >
            {value}
          </strong>
        </MDTypography>

        {(title.includes("mentor") && (
          <IconButtonWithToolTip
            Icon={TbBrandWhatsapp}
            tooltipTitle={"Whatsapp"}
            iconButtonProps={{ color: "success" }}
          />
        )) ||
          (title.includes("phone") && (
            <IconButtonWithToolTip
              Icon={TbBrandWhatsapp}
              tooltipTitle={"Whatsapp"}
              iconButtonProps={{ color: "success" }}
            />
          )) ||
          (title.includes("email") && (
            <Button
              disableElevation
              sx={{
                py: 0.2,
                mb: 0.5,
                ml: 1,
                px: 2,
                // borderRadius: "100px",
                textTransform: "capitalize",
                textDecoration: "underline",
              }}
              startIcon={<TbCopy color="info" strokeWidth="1.5" />}
            >
              <MDTypography fontSize={"small"} color={"info"}>
                Copy
              </MDTypography>
            </Button>
          )) ||
          (title.includes("password") && (
            <Button
              disableElevation
              sx={{
                py: 0,
                mb: 0.5,
                ml: 1,
                px: 2,
                // borderRadius: "100px",
                textTransform: "capitalize",
                textDecoration: "underline",
              }}
              startIcon={<TbCopy strokeWidth="1.5" />}
            >
              <MDTypography fontSize={"small"} color={"info"}>
                Copy
              </MDTypography>
            </Button>
          )) ||
          (title.includes("wallet") && (
            <Button
              disableElevation
              // variant="contained"
              sx={{
                py: 0.4,
                mb: 0.5,
                ml: 2,
                textTransform: "capitalize",
                // color: "white",
                // borderRadius: "100px",
                textDecoration: "underline",
              }}
              onClick={handleAddWallet}
              startIcon={<TbCash strokeWidth="1.5" />}
            >
              <MDTypography color="info" fontSize={"small"}>
                Add Wallet
              </MDTypography>
            </Button>
          )) ||
          (title.includes("link_details") && (
            <FlexBoxBetween sx={{ mt: 0.5 }}  className="flex flex-wrap divide-x-1 divide-slate-100 ">
              <Button
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
                startIcon={<TbCopy color="info" strokeWidth="1.5" />}
              >
                <MDTypography fontSize={"small"} whiteSpace={'nowrap'}>Copy Link</MDTypography>
              </Button>
              <Button
                onClick={handleEditLink}
                sx={{
                  color: colors.success.main,
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
                startIcon={
                  <TbEdit strokeWidth="1.5" stroke={colors.success.main} />
                }
              >
                <MDTypography color="success" fontSize={"small"} whiteSpace={'nowrap'}>
                  Edit Link
                </MDTypography>
              </Button>
            </FlexBoxBetween>
          )) ||
          (title.includes("user_status") && (
            // <ButtonGroup variant="text" sx={{}}>
            //   <Button
            //     onClick={handleEditLink}
            //     color="green"
            //     sx={{
            //       textTransform: "capitalize",
            //       textDecoration: "underline",
            //     }}
            //     startIcon={<TbEdit strokeWidth="1.5" />}
            //   >
            //     Update
            //   </Button>
            // </ButtonGroup>
            <></>
          ))}
      </td>
    </tr>
  );
};

const clientDetails = [
  { user_name: "IOS Test7" },
  { password: 123456 },
  { "email-id": "ios7@gmail.com" },
  { assessment_date: "2023-12-22" },
  { status_screen: "null" },
  { user_id: 24247 },
  { mentor_name: "Nikita" },
  { sales_person: "Chelsea" },
  { device: "iOS 1.0.74" },
  { phone: " +91-9762975545" },
  { country_time: "India - 16th Jan 01:51 pm" },
  { current_screen: "my-profile" },
  { user_status: "active" },
  { balance_amount: "₹1999" },
  { "bal._amt._due_date": dayjs().format("DD MMM YYYY") },
  { wallet_amount: "₹9100" },
  {
    link_details: `ReNeU (60 Days) (Created By Mentor)
Expiring In 2 Days`,
  },
];

/*
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { TbBrandWhatsapp, TbCash, TbCopy, TbEdit } from "react-icons/tb";
import EditPaymentLinkDialog from "src/components/client-service/client-detils/EditPaymentLinkDialog";
import FullWidthTabs from "src/components/client-service/client-detils/FullWidthTabs";
import AddWalletDialog from "src/components/client-service/client-detils/tabs/wallet-statement/AddWalletDialog";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import IconButtonWithToolTip from "src/components/client-service/common/IconButtonWithToolTip";
import LayoutContainerTitle from "src/components/client-service/layout/LayoutContainerTitle";
import NotificationSwitch from "src/components/client-service/switches/NotificationSwitch";
import WatiSwitch from "src/components/client-service/switches/WatiSwitch";
import useShowDialog from "src/hooks/useShowDialog";

function ClientDetails() {
  const theme = useTheme();
  const [open, setOpen] = useShowDialog(false);
  const [openEditPaymentLinkDialog, setOpenEditPaymentLinkDialog] =
    useShowDialog(false);
  const handleAddWallet = () => setOpen(true);
  const handleEditLink = () => setOpenEditPaymentLinkDialog(true);
  return (
    <Grid container>
      <Grid position={"absolute"} width={"100%"} mt={2} item xs={12}>
        <FlexBoxBetween
          mt={-2}
          flexWrap="wrap"
          width={1}
          justifyContent={"space-between"}
        >
          <LayoutContainerTitle title={"Client Details"} theme={theme} />
          <Box>
            <FlexBoxBetween>
              <ButtonGroup variant="text" aria-label="text button group">
                <Button sx={{ color:'text' }}>
                  Session&nbsp;Total&nbsp;:&nbsp;
                  <strong
                    style={{
                      color: 'text',
                      fontSize: "14px",
                    }}
                  >
                    12
                  </strong>
                  &nbsp;
                </Button>
                <Button sx={{ color:'text' }}>
                  Sent&nbsp;:&nbsp;
                  <strong
                    style={{
                      color: 'text',
                      fontSize: "14px",
                    }}
                  >
                    12
                  </strong>
                  &nbsp;
                </Button>
                <Button sx={{ color:'text' }}>
                  Pending&nbsp;:&nbsp;
                  <strong
                    style={{
                      color: 'text',
                      fontSize: "14px",
                    }}
                  >
                    12
                  </strong>
                  &nbsp;
                </Button>
                <Button sx={{ color:'text' }}>
                  Pending&nbsp;(Days)&nbsp;Validity&nbsp;:&nbsp;
                  <strong
                    style={{
                      color: 'text',
                      fontSize: "14px",
                    }}
                  >
                    12
                  </strong>
                  &nbsp;
                </Button>
                <NotificationSwitch />
                <WatiSwitch />
              </ButtonGroup>
            </FlexBoxBetween>
          </Box>
        </FlexBoxBetween>
        <Divider sx={{ width: "100%", mt: 2 }} />
      </Grid>
      <Grid item xs={12} mt={7}>
        <Grid
          container
          width={"100%"}
          p={2}
          bgcolor={'background.default'}
          borderRadius={`${20}px`}
        >
          <Grid item xs={12} md={6} lg={4}>
            {clientDetails.slice(0, 6).map((item) => {
              return Object.entries(item).map(([key, value]) => {
                const title = key;
                return (
                  <TitleValueText
                    key={key}
                    title={key}
                    value={value}
                    theme={theme}
                  />
                );
              });
            })}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {clientDetails.slice(6, 12).map((item) => {
              return Object.entries(item).map(([key, value]) => {
                const title = key;
                return (
                  <TitleValueText
                    key={key}
                    title={key}
                    value={value}
                    theme={theme}
                  />
                );
              });
            })}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {clientDetails.slice(12, clientDetails.length).map((item) => {
              return Object.entries(item).map(([key, value]) => {
                const title = key;
                return (
                  <TitleValueText
                    key={key}
                    title={key}
                    value={value}
                    theme={theme}
                    handleAddWallet={handleAddWallet}
                    handleEditLink={handleEditLink}
                  />
                );
              });
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FullWidthTabs handleAddWallet={handleAddWallet} />
      </Grid>
      <AddWalletDialog
        openDialog={open}
        setOpenDialog={setOpen}
        theme={theme}
      />
      <EditPaymentLinkDialog
        openDialog={openEditPaymentLinkDialog}
        setOpenDialog={setOpenEditPaymentLinkDialog}
        theme={theme}
      />
    </Grid>
  );
}

export default ClientDetails;

const TitleValueText = ({
  title,
  value,
  theme,
  handleAddWallet,
  handleEditLink,
}) => {
  return (
    <tr style={{ height: 26 }}>
      <td>
        <Typography
          whiteSpace={"nowrap"}
          textTransform={"capitalize"}
          color={'text'}
        >
          {title.split("_").join(" ")}&nbsp;:&nbsp;
        </Typography>
      </td>
      <td
        style={{
          display: title.includes("user_status") ? "flex" : "unset",
          alignItems: "center",
        }}
      >
        <strong
          style={{
            color: 'text',
            fontSize: "14px",
            marginRight: 6,
          }}
        >
          {value}
        </strong>
        {(title.includes("mentor") && (
          <IconButtonWithToolTip
            Icon={TbBrandWhatsapp}
            tooltipTitle={"Whatsapp"}
            iconButtonProps={{ color: "success" }}
          />
        )) ||
          (title.includes("phone") && (
            <IconButtonWithToolTip
              Icon={TbBrandWhatsapp}
              tooltipTitle={"Whatsapp"}
              iconButtonProps={{ color: "success" }}
            />
          )) ||
          (title.includes("email") && (
            <Button
              disableElevation
              color="blue"
              sx={{
                py: 0.4,
                mb: 0.5,
                ml: 1,
                px: 2,
                // borderRadius: "100px",
                textTransform: "capitalize",
                textDecoration: "underline",
              }}
              startIcon={<TbCopy strokeWidth="1.5" />}
            >
              Copy
            </Button>
          )) ||
          (title.includes("password") && (
            <Button
              disableElevation
              color="blue"
              sx={{
                py: 0.4,
                mb: 0.5,
                ml: 1,
                px: 2,
                // borderRadius: "100px",
                textTransform: "capitalize",
                textDecoration: "underline",
              }}
              startIcon={<TbCopy strokeWidth="1.5" />}
            >
              Copy
            </Button>
          )) ||
          (title.includes("wallet") && (
            <Button
              disableElevation
              // variant="contained"
              color="blue"
              sx={{
                py: 0.4,
                mb: 0.5,
                ml: 2,
                textTransform: "capitalize",
                // color: "white",
                // borderRadius: "100px",
                textDecoration: "underline",
              }}
              onClick={handleAddWallet}
              startIcon={<TbCash strokeWidth="1.5" />}
            >
              Add Wallet
            </Button>
          )) ||
          (title.includes("link_details") && (
            <ButtonGroup variant="text" sx={{ mt: 0.5 }}>
              <Button
                color="blue"
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
                startIcon={<TbCopy strokeWidth="1.5" />}
              >
                Copy Link
              </Button>
              <Button
                onClick={handleEditLink}
                color="green"
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
                startIcon={<TbEdit strokeWidth="1.5" />}
              >
                Edit Link
              </Button>
            </ButtonGroup>
          )) ||
          (title.includes("user_status") && (
            <ButtonGroup variant="text" sx={{}}>
              <Button
                onClick={handleEditLink}
                color="green"
                sx={{
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
                startIcon={<TbEdit strokeWidth="1.5" />}
              >
                Update
              </Button>
            </ButtonGroup>
          ))}
      </td>
    </tr>
  );
};

const clientDetails = [
  { user_name: "IOS Test7" },
  { password: 123456 },
  { "email-id": "ios7@gmail.com" },
  { assessment_date: "2023-12-22" },
  { status_screen: "null" },
  { user_id: 24247 },
  { mentor_name: "Nikita" },
  { sales_person: "Chelsea" },
  { device: "iOS 1.0.74" },
  { phone: " +91-9762975545" },
  { country_time: "India - 16th Jan 01:51 pm" },
  { current_screen: "my-profile" },
  { user_status: "active" },
  { balance_amount: "₹1999" },
  { "bal._amt._due_date": dayjs().format("DD MMM YYYY") },
  { wallet_amount: "₹9100" },
  {
    link_details: `ReNeU (60 Days) (Created By Mentor)
Expiring In 2 Days`,
  },
];

*/
