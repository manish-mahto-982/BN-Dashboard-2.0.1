/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */


// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "src/components/theme/common//MDBox";
import MDTypography from "src/components/theme/common//MDTypography";
import MDAvatar from "src/components/theme/common//MDAvatar";
import MDProgress from "src/components/theme/common//MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const avatars = (set) =>
    set.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "", accessor: "conversion", width: "45%", align: "left" },
      { Header: "Set", accessor: "set", width: "10%", align: "center" },
      { Header: "Avg./Monthly", accessor: "monthly", align: "center" },
      { Header: "Need to do Today", accessor: "needed", align: "center" },
    ],

    rows: [
      {
        conversion: <Company image={logoAtlassian} name="Lead" />,
        set: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            30
          </MDTypography>
        ),
        monthly: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            30
          </MDTypography>
        ),
        needed: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
      },
      {
        conversion: <Company image={logoSpotify} name="Consultation" />,
        set: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            40
          </MDTypography>
        ),
        monthly: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            40
          </MDTypography>
        ),
        needed: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
      },
      {
        conversion: <Company image={logoJira} name="Sales Unit" />,
        set: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            25
          </MDTypography>
        ),
        monthly: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            25
          </MDTypography>
        ),
        needed: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
      },
      {
        conversion: <Company image={logoInvesion} name="Sales Amount" />,
        set: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Rs.450000
          </MDTypography>
        ),
        monthly: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Rs.450000
          </MDTypography>
        ),
        needed: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Rs.28000
          </MDTypography>
        ),
      },
    ],
  };
}
