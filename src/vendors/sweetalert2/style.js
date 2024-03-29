// A style sheet
import { styled } from "@mui/system";

const useStyles = styled((theme) => ({
  container: {
    zIndex: 300,
  },
  popup: {
    width: "24em",
    overflow: "hidden",
    borderRadius: 15,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "400",
    color: theme.typography.h1.color,
  },
  closeButton: {
    color: theme.palette.text.primary,

    "&:focus": {
      boxShadow: "none",
    },
    "&:hover": {
      color: theme.typography.h1.color,
    },
  },
  image: {
    margin: theme.spacing(0, "auto", 2),
  },
  htmlContainer: {
    fontSize: "1rem",
    lineHeight: 1.5,
    margin: theme.spacing(1, 3, 0.5),

    "& a": {
      textDecoration: "none",
      color: 'info.main',
    },
  },
  confirmButton: {
    border: 0,
    margin: ".3125em",
    cursor: "pointer",
    color: theme.palette.common.white,
    boxSizing: "border-box",
    fontSize: "0.875rem",
    lineHeight: 1.75,
    padding: theme.spacing(0.75, 2),
    borderRadius: 4,
    fontFamily: "inherit",
    backgroundColor: 'info.main',

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cancelButton: {
    border: 0,
    margin: ".3125em",
    cursor: "pointer",
    color: theme.palette.common.white,
    boxSizing: "border-box",
    fontSize: "0.875rem",
    lineHeight: 1.75,
    padding: theme.spacing(0.75, 2),
    borderRadius: 4,
    fontFamily: "inherit",
    backgroundColor: theme.palette.grey[600],

    "&:hover, &:focus, &:active": {
      backgroundColor: theme.palette.grey[700],
    },
  },
  footer: {
    marginTop: "1.5rem",
    fontSize: ".875rem",
    borderColor: theme.palette.divider,
    "& a": {
      textDecoration: "none",
      color: 'info.main',
    },
  },
}));

export default useStyles;
