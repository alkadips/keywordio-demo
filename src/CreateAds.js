import { Button, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function CreateAds() {
  const [textads, setTextAds] = React.useState("text");
  const [mediaAds, setmediaAds] = React.useState("media");
  const [isCheckedText, setIsCheckedText] = React.useState(false);
  const [isCheckedMedia, setIsCheckedMedia] = React.useState(false);
  const handleChangeText = (event) => {
    setIsCheckedText(event.target.checked);
    setTextAds(event.target.checked);
  };
  const handleChangeMedia = (event) => {
    setIsCheckedMedia(event.target.checked);
    setmediaAds(event.target.checked);
  };
  return (
    <Card
      sx={{ maxWidth: 1485 }}
      style={{ margin:'0 auto',marginTop:'20px' }}
      variant="outlined"
      className="p-5"
    >
      <div style={{ height: "570px" }}>
        <div>Create Ads</div>
        <div className=" flex justify-center mt-5  p-5" style={{gap:'50px'}}>
          <Card
            sx={{ maxWidth: 300 }}
            style={{  borderRadius:'10px' }}
            variant="outlined"
            
            className=" p-5 rounded"
          >
            <div>
              <input
                onChange={handleChangeText}
                checked={isCheckedText}
                type="checkbox"
                id="text"
                name="text"
                value="text"
                style={{height:'20px',width:'20px'}}
              />
            </div>
            <Card
              sx={{ maxWidth: 300 }}
              style={{ borderRadius:'35px'}}
              variant="outlined"
              className=" p-5"
            >
              <div
                className="rounded"
                style={{ height: "385px", width: "275px" }}
              >
                <div
                 
                  style={{ height: "225px", width: "190px", margin: "0 auto" }}
                ></div>
                <div className="create-ass">
                  <div className="text-secondary mt-5">Create</div>
                  <div className="font-bold text-xl">Text Ad</div>
                </div>
              </div>
            </Card>
          </Card>

          <Card
            sx={{ maxWidth: 300 }}
            style={{ borderRadius:'10px' }}
            variant="outlined"
            className=" p-5"
          >
             <div>
                <input
                  onChange={handleChangeMedia}
                  checked={isCheckedMedia}
                  type="checkbox"
                  id="media"
                  name="media"
                  value="media"
                  style={{height:'20px',width:'20px'}}

                />
              </div>
              <Card
              sx={{ maxWidth: 300 }}
              style={{  borderRadius:'35px' }}
              variant="outlined"
              className=" p-5"
            >
            <div
              className=" rounded p-5"
              style={{ height: "385px", width: "275px" }}
            >
             
              <div
                className=" rounded-3xl"
                style={{ height: "225px", width: "190px", margin: "0 auto" }}
              ></div>
              <div className="create-ass1">
                <div className="text-secondary mt-5">Create</div>
                <div className="font-bold text-xl">Media Ad</div>
              </div>
            </div>
            </Card>
          </Card>
        </div>

        <Link
          to={
            mediaAds
              ? "/mediaads"
              : "/textads" && textads
              ? "/textads"
              : "/mediaads"
          }
        >
          <div style={{ float: "right" }}>
            <Button
              style={{ padding: "10px 35px 10px 35px" }}
              variant="contained"
            >
              Next
            </Button>
          </div>
        </Link>
      </div>
    </Card>
  );
}
