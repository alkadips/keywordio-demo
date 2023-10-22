import { Button, Card, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function TextAds() {
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
      <div>Create Text</div>
      <div className="flex mt-5 justify-between gap-5">
        <div style={{ width: "50%" }}>
          <div>
            <div>Heading 01</div>
            <div className="mt-2">
              <TextField
                className="w-full"
                size="small"
               
              />
            </div>
          </div>
          <div className="mt-5">Heading 02</div>
          <div className="mt-2">
            <TextField
              className="w-full"
              size="small"
             
            />
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div>Description 01</div>
          <div className="mt-2">
          <TextareaAutosize className="w-full" style={{height:'130px',border:'1px solid #cdc7c7'}}/>

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
            <Button sx={{textTransform: "none"}} style={{color:'black',fontWeight:'bold',padding:"8px 40px 8px 40px"}} variant="outlined">
              Back
            </Button>
          </div>
        </Link>
        <div>
          <Button sx={{textTransform: "none"}} style={{padding:"8px 40px 8px 40px"}} onClick={handleClickOpen} color="primary" variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </Card>
  );
}
