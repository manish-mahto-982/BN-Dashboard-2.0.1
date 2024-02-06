import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
  Divider,
  Card,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MDButton from "src/components/theme/common/MDButton";
import MDTypography from "src/components/theme/common/MDTypography";
import MDBox from "src/components/theme/common/MDBox";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import { grey } from "@mui/material/colors";

const messages = [
  { id: 1, text: "Hi there!", sender: "mentor" },
  { id: 2, text: "Hello!", sender: "user" },
  { id: 3, text: "How can I assist you today?", sender: "mentor" },
];

const MentorChatsNew = ({ darkMode }) => {
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      console.log(input);
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Card
      sx={{
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: 6,
        boxShadow: "none",
      }}
    >
      <FlexBoxBetween
        borderBottom={`1px solid`}
        borderColor="background.default"
        px={2}
        py={1.3}
        bgcolor=""
        justifyContent={"start"}
        columnGap={2}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <MDTypography fontSize={"medium"} fontWeight={"bold"}>
          Mentor
        </MDTypography>
      </FlexBoxBetween>

      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} {...{ darkMode }} />
        ))}
      </Box>
      {/* <Box sx={{ p: 2, borderTop:`1px solid ${grey[200]}` }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <MDButton
              fullWidth
              color="info"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </MDButton>
          </Grid>
        </Grid>
      </Box> */}
    </Card>
  );
};

const Message = ({ message, darkMode }) => {
  const user = message.sender === "user";

  return (
    <MDBox
      sx={{
        display: "flex",
        justifyContent: user ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: user ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: user
              ? [darkMode ? "light.main" : "dark.main"]
              : "success.main",
            fontSize: "small",
          }}
        >
          {user ? "U" : "M"}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            px: 2,
            py: 1.2,
            ml: user ? 1 : 0,
            mr: user ? 0 : 1,
            backgroundColor: user
              ? [darkMode ? "light.main" : "dark.main"]
              : "success.main",
            borderRadius: user ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <MDTypography
            fontSize="small"
            color={darkMode ? "dark.main" : "light"}
          >
            {message.text}
          </MDTypography>
        </Paper>
      </Box>
    </MDBox>
  );
};

export default MentorChatsNew;
