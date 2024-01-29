

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Balance Nutrition React base styles
import colors from "src/assets/theme/base/colors";
import breakpoints from "src/assets/theme/base/breakpoints";
import typography from "src/assets/theme/base/typography";
import boxShadows from "src/assets/theme/base/boxShadows";
import borders from "src/assets/theme/base/borders";
import globals from "src/assets/theme/base/globals";

// Balance Nutrition React helper functions
import boxShadow from "src/assets/theme/functions/boxShadow";
import hexToRgb from "src/assets/theme/functions/hexToRgb";
import linearGradient from "src/assets/theme/functions/linearGradient";
import pxToRem from "src/assets/theme/functions/pxToRem";
import rgba from "src/assets/theme/functions/rgba";

// Balance Nutrition React components base styles for @mui material components
import sidenav from "src/assets/theme/components/sidenav";
import list from "src/assets/theme/components/list";
import listItem from "src/assets/theme/components/list/listItem";
import listItemText from "src/assets/theme/components/list/listItemText";
import card from "src/assets/theme/components/card";
import cardMedia from "src/assets/theme/components/card/cardMedia";
import cardContent from "src/assets/theme/components/card/cardContent";
import button from "src/assets/theme/components/button";
import iconButton from "src/assets/theme/components/iconButton";
import input from "src/assets/theme/components/form/input";
import inputLabel from "src/assets/theme/components/form/inputLabel";
import inputOutlined from "src/assets/theme/components/form/inputOutlined";
import textField from "src/assets/theme/components/form/textField";
import menu from "src/assets/theme/components/menu";
import menuItem from "src/assets/theme/components/menu/menuItem";
import switchButton from "src/assets/theme/components/form/switchButton";
import divider from "src/assets/theme/components/divider";
import tableContainer from "src/assets/theme/components/table/tableContainer";
import tableHead from "src/assets/theme/components/table/tableHead";
import tableCell from "src/assets/theme/components/table/tableCell";
import linearProgress from "src/assets/theme/components/linearProgress";
import breadcrumbs from "src/assets/theme/components/breadcrumbs";
import slider from "src/assets/theme/components/slider";
import avatar from "src/assets/theme/components/avatar";
import tooltip from "src/assets/theme/components/tooltip";
import appBar from "src/assets/theme/components/appBar";
import tabs from "src/assets/theme/components/tabs";
import tab from "src/assets/theme/components/tabs/tab";
import stepper from "src/assets/theme/components/stepper";
import step from "src/assets/theme/components/stepper/step";
import stepConnector from "src/assets/theme/components/stepper/stepConnector";
import stepLabel from "src/assets/theme/components/stepper/stepLabel";
import stepIcon from "src/assets/theme/components/stepper/stepIcon";
import select from "src/assets/theme/components/form/select";
import formControlLabel from "src/assets/theme/components/form/formControlLabel";
import formLabel from "src/assets/theme/components/form/formLabel";
import checkbox from "src/assets/theme/components/form/checkbox";
import radio from "src/assets/theme/components/form/radio";
import autocomplete from "src/assets/theme/components/form/autocomplete";
import container from "src/assets/theme/components/container";
import popover from "src/assets/theme/components/popover";
import buttonBase from "src/assets/theme/components/buttonBase";
import icon from "src/assets/theme/components/icon";
import svgIcon from "src/assets/theme/components/svgIcon";
import link from "src/assets/theme/components/link";
import dialog from "src/assets/theme/components/dialog";
import dialogTitle from "src/assets/theme/components/dialog/dialogTitle";
import dialogContent from "src/assets/theme/components/dialog/dialogContent";
import dialogContentText from "src/assets/theme/components/dialog/dialogContentText";
import dialogActions from "src/assets/theme/components/dialog/dialogActions";

export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
