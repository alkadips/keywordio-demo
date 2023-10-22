import { Button } from "@mui/material";
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
    <div className="shadow-md ... mt-5 p-5" style={{ height: "570px" }}>
      <div className="ml-5">Create Ads</div>
      <div className=" flex justify-center mt-5 gap-5 p-5">
        <div
          className="shadow-md ... rounded p-5"
          style={{ height: "385px", width: "275px" }}
        >
          <div>
            <input
              onChange={handleChangeText}
              checked={isCheckedText}
              type="checkbox"
              id="text"
              name="text"
              value="text"
            />
          </div>
          <div
            className="shadow-2xl ... rounded-3xl"
            style={{ height: "225px", width: "190px", margin: "0 auto" }}
          ></div>
          <div className="create-ass">
            <div className="text-secondary mt-5">Create</div>
            <div className="font-bold">Text Ad</div>
          </div>
        </div>

        <div
          className="shadow-md ... rounded p-5"
          style={{ height: "385px", width: "275px" }}
        >
          <div>
            <input
              onChange={handleChangeMedia}
              checked={isCheckedMedia}
              type="checkbox"
              id="media"
              name="media"
              value="media"
            />
          </div>
          <div
            className="shadow-2xl ... rounded-3xl"
            style={{ height: "225px", width: "190px", margin: "0 auto" }}
          ></div>
          <div className="create-ass1">
            <div className="text-secondary mt-5">Create</div>
            <div className="font-bold">Media Ad</div>
          </div>
        </div>
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
  );
}
