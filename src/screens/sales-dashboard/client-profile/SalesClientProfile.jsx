import { Button, ButtonGroup, Card, Grid, useTheme } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { TbBrandWhatsapp, TbCash, TbCopy, TbEdit } from "react-icons/tb";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import IconButtonWithToolTip from "src/components/client-service/common/IconButtonWithToolTip";
import EditPaymentLinkDialog from "src/components/common/client-profile/EditPaymentLinkDialog";
import AddWalletDialog from "src/components/common/client-profile/tabs/wallet-statement/AddWalletDialog";
import MDTypography from "src/components/theme/common/MDTypography";
import useShowDialog from "src/hooks/useShowDialog";
import colors from "src/assets/theme/base/colors";
import SalesLayout from "../layout";
import SalesPersonalDetailsContent from "src/components/common/client-profile/tabs/sales-personal-details/SalesPersonalDetailsContent";
import SalesFeaturesTabs from "src/components/sales/client-profile/SalesFeaturesTabs";
const ClientProfile = () => {
  const theme = useTheme();
  const [open, setOpen] = useShowDialog(false);
  const [openEditPaymentLinkDialog, setOpenEditPaymentLinkDialog] =
    useShowDialog(false);
  const handleAddWallet = () => setOpen(true);
  const handleEditLink = () => setOpenEditPaymentLinkDialog(true);
  return (
    <SalesLayout>
      <Grid container>
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
                        handleAddWallet={handleAddWallet}
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
                        handleAddWallet={handleAddWallet}
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
          {/* <FullWidthTabs handleAddWallet={handleAddWallet} /> */}
          {<SalesFeaturesTabs handleAddWallet={handleAddWallet} />}
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
    </SalesLayout>
  );
};

export default ClientProfile;

const TitleValueText = ({
  title,
  value,
  theme,
  handleAddWallet,
  handleEditLink,
}) => {
  return (
    <table>
      <tbody>
        <tr style={{ height: 26 }}>
          <td style={{ verticalAlign:'top',paddingTop:'7px'}}>
            <MDTypography
              fontSize="medium"
              whiteSpace={"nowrap"}
              textTransform={"capitalize"}
              color={"text"}

            >
              {title.split("_").join(" ")}&nbsp;:&nbsp;
            </MDTypography>
          </td>
          <td
            style={{
              // display: title.includes("user_status") ? "flex" : "unset",
              alignItems: "center",
            }}
          >
            <MDTypography
              fontSize="14px"
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
                    // mb: 0.5,
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
                    py: 0,
                    // mb: 0.5,
                    ml: 2,
                    textTransform: "capitalize",
                    // color: "white",
                    // borderRadius: "100px",
                    textDecoration: "underline",
                  }}
                  onClick={handleAddWallet}
                  startIcon={<TbCash strokeWidth="1.5" />}
                >
                  <MDTypography  color="info" fontSize={"small"}>
                    Add Wallet
                  </MDTypography>
                </Button>
              )) || 
              (title.includes("link_details") && (
                <FlexBoxBetween
                  sx={{ mt: 0.5 }}
                  className="divide-x-1 flex flex-wrap divide-slate-100 "
                >
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      textDecoration: "underline",
                    }}
                    startIcon={<TbCopy color="info" strokeWidth="1.5" />}
                  >
                    <MDTypography fontSize={"small"} whiteSpace={"nowrap"}>
                      Copy Link
                    </MDTypography>
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
                    <MDTypography
                      color="success"
                      fontSize={"small"}
                      whiteSpace={"nowrap"}
                    >
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
              )) 
              
              }
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const clientDetails = [
  { user_name: "IOS Test7" },
  { password: 123456 },
  { "email-id": "ios7@gmail.com" },
  { assessment_date: "2023-12-22" },
  { wallet_amount: "₹9100" },
  { app: "Not Downloaded" },
  { status_screen: "null" },
  { user_id: 24247 },
  { mentor_name: "Nikita" },
  { sales_person: "Chelsea" },
  { device: "iOS 1.0.74" },
  { phone: " +91-9762975545" },
  { country_time: "India - 16th Jan 01:51 pm" },
  { current_screen: "my-profile" },
  { user_status: "active" },
  
  { source: "App" },
  
  { lead_type: "OCL" },
  { "bal._amt._due_date": dayjs().format("DD MMM YYYY") },
  
  {
    link_details: `ReNeU (60 Days) (Created By Mentor)
  Expiring In 2 Days`,
  },
];
