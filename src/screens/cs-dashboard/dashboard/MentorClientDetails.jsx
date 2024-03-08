import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Grid,
  Input,
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
import { Resizable } from "re-resizable";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import MDInput from "src/components/theme/common/MDInput";
import ReactQuill from "react-quill";
import { Controller, useForm } from "react-hook-form";
import { MuiFileInput } from "mui-file-input";
import ReactQuillWithEmoji from "src/components/common/ReactQuillWithEmoji";
function MentorClientDetails() {
  console.log("first");
  const theme = useTheme();
  const [open, setOpen] = useShowDialog(false);
  const [openEditPaymentLinkDialog, setOpenEditPaymentLinkDialog] =
    useShowDialog(false);
  const handleAddWallet = () => setOpen(true);
  const handleEditLink = () => setOpenEditPaymentLinkDialog(true);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      file: undefined,
    },
  });

  const handleChange = (value) => {};

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
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Resizable
            defaultSize={{
              width: 624,
            }}
            maxWidth={"80vw"}
            minWidth={628}
            style={{
              //   borderRight: "2px dashed rgba(0,0,0,0.1)"
              paddingRight: 4,
            }}
          >
            <FullWidthTabs handleAddWallet={handleAddWallet} />
          </Resizable>
          <Card
            sx={{ width: "100%", p: 2, minWidth: 260 }}
            className="resize_capsule"
          >
            <MDTypography fontSize="medium">Add new diet</MDTypography>
            <FlexBoxBetween justifyContent="right" mt={1}>
              <PrimaryButton style={{ width: "fit-content" }}>
                Create New Diet
              </PrimaryButton>
            </FlexBoxBetween>
            <MDTypography textAlign={"center"} fontSize="small" mt={2}>
              Default Start Date:{" "}
              <span className="font-bold">{dayjs().format("Do, MMM")}</span>
            </MDTypography>
            <FlexBoxBetween flexDirection="column" gap={2} alignItems="start">
              <MDInput
                label="Key Insight"
                sx={{ marginTop: 2 }}
                helperText="Save your additional assessment questions here.(For your records only)"
              />
              <MDInput label="Diet Name" fullWidth />
              <MDInput label="Subject" fullWidth />
              {editorArr.map((item, index) => (
                <Controller
                  key={String(index + item.label)}
                  name={""}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <div className="w-full">
                      <MDTypography fontSize="small">{item.label}</MDTypography>
                      <ReactQuillWithEmoji
                        theme="snow"
                        style={{
                          width: "100%",
                        }}
                        value={value}
                        onChange={onChange}
                      />
                    </div>
                  )}
                />
              ))}
              <Controller
                name={""}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <MDTypography
                      fontSize="small"
                      sx={{ marginBottom: -1.4 }}
                      color="error"
                    >
                      {"Note"}
                    </MDTypography>
                    <ReactQuillWithEmoji
                      theme="snow"
                      style={{
                        height: 160,
                        marginBottom: 80,
                        width: "100%",
                      }}
                      value={value}
                      onChange={onChange}
                    />
                  </>
                )}
              />
              <FlexBoxBetween width="100%" gap={2}>
                <MDInput label="Add Links" fullWidth />
                <PrimaryButton style={{ whiteSpace: "nowrap" }} size="">
                  Save Link
                </PrimaryButton>
              </FlexBoxBetween>
              <Controller
                name="file"
                control={control}
                render={({ field, fieldState }) => (
                  <MuiFileInput
                    label="Choose file"
                    multiple
                    sx={{ mt: 2 }}
                    // onChange={handleChange}
                    {...field}
                    helperText={
                      fieldState.invalid
                        ? "File is invalid"
                        : "format: image/pdf/word (Max 10 attachments)"
                    }
                    error={fieldState.invalid}
                  />
                )}
              />
            </FlexBoxBetween>
            <PrimaryButton
              style={{ whiteSpace: "nowrap", marginTop: 20 }}
              size=""
            >
              Save Diet
            </PrimaryButton>
          </Card>
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

export default MentorClientDetails;

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
              ))}
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

const editorArr = [
  {
    label: "Drafts",
  },
  {
    label: "On Rising",
  },
  {
    label: "Pre Breakfast",
  },
  {
    label: "Breakfast",
  },
  {
    label: "Mid Morning",
  },
  {
    label: "Pre Workout",
  },
  {
    label: "During Workout",
  },
  {
    label: "Pre Lunch",
  },
  {
    label: "Lunch",
  },
  {
    label: "Post Lunch",
  },
  {
    label: "Tea Eve",
  },
  {
    label: "Late Eve",
  },
  {
    label: "Pre Dinner",
  },
  {
    label: "Dinner",
  },
  {
    label: "Post Dinner",
  },
  {
    label: "Bed Time",
  },
];
