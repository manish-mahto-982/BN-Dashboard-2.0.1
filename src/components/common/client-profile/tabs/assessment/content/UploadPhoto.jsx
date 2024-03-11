import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { TbCloudUpload, TbSquareRoundedX } from "react-icons/tb";
import CustomDialog from "src/components/client-service/common/CustomDialog";

import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import LayoutContainerTitle from "src/components/client-service/layout/LayoutContainerTitle";
import useShowDialog from "src/hooks/useShowDialog";

function UploadPhoto({ theme }) {
  const [open, setOpen] = useShowDialog(false);
  const [paths, setPaths] = useState([
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
  ]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setPaths(acceptedFiles.map((file) => URL.createObjectURL(file)));
    },
    [setPaths]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Grid container rowGap={5} columnSpacing={4}>
        <Grid item xs={12}>
          <FlexBoxBetween minWidth={"100%"}>
            <LayoutContainerTitle theme={theme} title={"Photo"} />
            <PrimaryButton theme={theme} onClick={() => setOpen(true)}>
              Edit
            </PrimaryButton>
          </FlexBoxBetween>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
              aspectRatio: "1/1",
              borderRadius: 2,
              mx: "auto",
              objectFit: "contain",
              p: 1,
              bgcolor: 'background.default',
            }}
            alt="user-image"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Grid>
      </Grid>
      <CustomDialog
        theme={theme}
        openDialog={open}
        setOpenDialog={setOpen}
        dialogTitle={"Edit Photo"}
        dialogActionMain={"Save"}
        dialogContent={
          <Box sx={{ width: "300px", paddingTop: "20px" }}>
            {paths.length ? (
              paths.map((path) => (
                <Box
                  mx="auto"
                  width={"fit-content"}
                  position={"relative"}
                  bgcolor={'background.default'}
                  borderRadius={2}
                  p={1}
                >
                  <Box
                    component={"img"}
                    key={path}
                    src={path}
                    style={{ objectFit: "contain", aspectRatio: "1/1" }}
                    width={200}
                  />
                  <IconButton
                    onClick={() => setPaths([])}
                    sx={{ position: "absolute", top: -16, right: -16 }}
                  >
                    <TbSquareRoundedX />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Box
                {...getRootProps()}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "20px",
                  borderRadius: 5,
                  justifyContent: "center",
                  border: "1px dashed black",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    p: 1,
                    bgcolor: "rgba(0,255,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    margin: "auto",
                    aspectRatio: "1/1",
                  }}
                >
                  <TbCloudUpload
                    size={44}
                    style={{ margin: "auto" }}
                    color={'success'}
                  />
                </Box>
                <input {...getInputProps()} />
                <Typography py={2}>
                  Click here / Drop the files here ...{" "}
                </Typography>
              </Box>
            )}
          </Box>
        }
      />
    </>
  );
}

export default UploadPhoto;
