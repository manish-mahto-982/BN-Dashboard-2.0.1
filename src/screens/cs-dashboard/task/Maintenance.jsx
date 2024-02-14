import React from "react";
import CSLayout from "../layout";
import { TbUsersGroup } from "react-icons/tb";
import { commonDataAllTable } from "src/utils/constants";
import { Card, Divider, Grid, Icon } from "@mui/material";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import { useMaterialUIController } from "src/context";
function Maintenance() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <CSLayout>
      <Grid container spacing={3} mt={3}>
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          mt={2}
          className="flex w-full flex-1 flex-col"
        >
          <Card className="w-full cursor-pointer">
            <MDBox
              bgColor={"error"}
              variant="gradient"
              className="-mt-3 ml-3 flex w-fit items-center justify-center gap-x-2  rounded-lg px-3 py-3"
              color={"background"}
            >
              <Icon fontSize="default">{"people"}</Icon>
              <MDTypography
                variant="h6"
                //   fontWeight="medium"
                sx={{ color: "background.default" }}
                textTransform="capitalize"
              >
                {"Client on Maintenance"}
              </MDTypography>
            </MDBox>
            <MDBox p={2} mx={3} display="flex" justifyContent="center"></MDBox>
            <MDBox pb={4} px={2} textAlign="center" lineHeight={1.25}>
              <MDTypography variant="h2">{20}</MDTypography>
            </MDBox>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CardWithDialogTable
            data={maintenanceWeightOdData}
            cardTitle={"Maintenance Weight OD"}
            darkMode={darkMode}
          />
        </Grid>
      </Grid>
    </CSLayout>
  );
}

export default Maintenance;

const maintenanceWeightOdData = [
  { title: "10th day OD", value: 20 },
  { title: "20th day OD", value: 24 },
  { title: "30th day OD", value: 52 },
];
