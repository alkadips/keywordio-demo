import { Button, Card, TextField } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function MediaAds() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      navigate("/createAs");
    }, 6000);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      sx={{ maxWidth: 1490 }}
      style={{ margin: "0 auto", marginTop: "20px" }}
      variant="outlined"
      className=" p-5"
    >
      <div>Create Text & Media</div>
      <div className="flex mt-5 justify-between gap-5">
        <div style={{ width: "50%" }}>
          <div>
            <div>Heading 01</div>
            <div className="mt-2">
              <TextField
                className="w-full"
                size="small"
                label="Small Outlined Input"
              />
            </div>
          </div>
          <div className="mt-5">Heading 02</div>
          <div className="mt-2">
            <TextField
              className="w-full"
              size="small"
              label="Small Outlined Input"
            />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div>Description 01</div>
          <div className="mt-2">
            <TextField
              style={{ height: "145px" }}
              size="large"
              className="w-full"
            ></TextField>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          className="text-center"
          style={{ width: "400px", height: "180px" }}
        >
          <CheckCircleIcon style={{ fontSize: "35px", marginTop: "25px" }} />
          <DialogContentText
            style={{ fontWeight: "bold", marginTop: "12px", fontSize: "20px" }}
            id="alert-dialog-description"
          >
            Submitted
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <div className="flex justify-between mt-5">
        <div>Landscape marketing Image</div>
        <div>Portrate Marketing Image</div>
        <div>Square Marketing Image</div>
      </div>
      <div className="flex justify-between mt-2 gap-5">
        <div style={{ width: "33%" }}>
          <TextField className="w-full" size="small" />
        </div>
        <div style={{ width: "33%" }}>
          <TextField className="w-full" size="small" />
        </div>
        <div style={{ width: "33%" }}>
          <TextField className="w-full" size="small" />
        </div>
      </div>
      <div className="mt-5">
        <div>Video URL</div>
        <div className="mt-2">
          <TextField className="w-full" size="small" />
        </div>
      </div>
      <div className="flex mt-5 justify-between">
        <div>Bussiness Name</div>
        <div>Button Label</div>
      </div>
      <div className="flex mt-2 justify-between gap-5">
        <div style={{ width: "50%" }}>
          <TextField className="w-full" size="small" />
        </div>
        <div style={{ width: "50%" }}>
          <TextField className="w-full" size="small" />
        </div>
      </div>
      <div>
        <div className="mt-5">Website URL</div>
        <div className="mt-2">
          <TextField className="w-full" size="small" />
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-5">
        <Link to="/createAs">
          <div>
            <Button className="text-black" variant="outlined">
              Back
            </Button>
          </div>
        </Link>
        <div>
          <Button onClick={handleClickOpen} variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </Card>
  );
}
