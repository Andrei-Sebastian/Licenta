import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import "./register.scss";
import "./test.css";
import Layout from "./layout";
import Schedule from "../schedule/schedule";

import profileImg from "../../images/profile.png";
import maleImg from "../../images/male.png";
import femaleImg from "../../images/female.png";
import regularUserImg from "../../images/regular-user-role.png";
import stylistImg from "../../images/stylist-role.png";

import PhoneInput from "react-phone-input-2";
import GoogleMaps from "../google-maps/google-maps";
import TextArea from "../TextArea/TextArea";

const Register = () => {
  const fileInput = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [role, setRole] = useState();
  const [address, setAddress] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [prices, setPrices] = useState({
    regular: "",
    newLook: "",
    modern: ""
  });

  const [schedule, setSchedule] = useState({});

  const [t1, setT1] = useState("");

  const [wFirstName, setWFirstName] = useState("");
  const [wLastName, setWLastName] = useState("");
  const [WMiddleName, setWMiddleName] = useState("");
  const [wRole, setWRole] = useState();
  const [WPhoneNumber, setWPhoneNumber] = useState();
  const [wGender, setWGender] = useState("");
  const [canSubmit, setSubmit] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("new-info")) {
      window.location.href = "/login";
    }
  });

  const changeGender = (gender) => {
    setGender(gender);
  };

  const hasNumber = (myString) => {
    return /\d/.test(myString);
  };

  const justNumbers = (myString) => {
    return /^[0-9]+$/.test(myString);
  };

  const uploadImage = (e) => {
    const f = e.target.files[0];
    console.log(f, "here");
    try {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfilePhoto(reader.result);
          setFile(f);
          console.log("here");
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } catch (err) {
      console.log(err);
      // error when close file explorer
    }
  };

  const setLocation = (location) => {
    setAddress(location);
  };

  const setScheduleData = (schedule) => {
    setSchedule(schedule);
  };

  // create new post and add in mongo
  const handleSubmit = async () => {
    let res;
    try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "folder_p");
    res = await axios.post(
      "https://api.cloudinary.com/v1_1/dm3pamnau/image/upload",
      data,
      {
        onUploadProgress: (progressEvent) => {
          console.log(
            `Process: ${
              Math.round(progressEvent.loaded / progressEvent.total) * 100
            }%`
          );
        },
      }
    );
    } catch (e) {}

    if (role === "stylist") {
      await axios.post(
        `http://localhost:8080/editProfile`,
        {
          name: lastName + " " + firstName + (middleName ? " " + middleName : ""),
          profilePhoto: res ? res.data.secure_url : "",
          address: address,
          gender: gender,
          phoneNumber: phoneNumber,
          role: role,
          about: about,
          address: address,
          schedule: schedule,
          prices: prices,
        },
        {
          headers: {
            Authorization: localStorage.getItem("new-info"),
          },
        }
      );
    } else {
      await axios.post(
        `http://localhost:8080/editProfile`,
        {
          name: lastName + " " + firstName + (middleName ? " " + middleName : ""),
          profilePhoto: res ? res.data.secure_url : "",
          address: address,
          gender: gender,
          phoneNumber: phoneNumber,
          role: role,
        },
        {
          headers: {
            Authorization: localStorage.getItem("new-info"),
          },
        }
      );
    }

    localStorage.setItem("user-info", localStorage.getItem("new-info"));
    localStorage.setItem("role", role);
    localStorage.removeItem("new-info");
    if (role === "stylist") {
      window.location.href = "/home";
    } else {
      window.location.href = "/welcome";
    }
  };

  return (
    <React.Fragment>
      <Layout title="Set profile" additionalClass="layout-form-profile">
        <div className="register-form">
          <div className="photo-form">
            <div className="img-profile-div">
              <img
                className="img-profile"
                src={profilePhoto !== "" ? profilePhoto : profileImg}
                alt="Not Found"
              />
            </div>
            <button
              className="choose-photo"
              onClick={() => fileInput.current.click()}
            >
              Choose a photo
            </button>
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              // accept="audio/*,video/*,image/*"
              accept="image/*"
              style={{ display: "none" }}
              onChange={uploadImage}
              ref={fileInput}
            />
          </div>

          <div className="left-register">
            <div className="form-group">
              {/* <label>First name: </label> */}
              <input
                type="text"
                className="form-control"
                placeholder="First Name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name *"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="gender">
                <div
                  className={
                    "gender-male " + (gender === "male" ? "gender-checked" : "")
                  }
                  onClick={() => {
                    changeGender("male");
                  }}
                >
                  <img src={maleImg} />
                  Male
                </div>
                <div
                  className={
                    "gender-female " +
                    (gender === "female" ? "gender-checked" : "")
                  }
                  onClick={() => {
                    changeGender("female");
                  }}
                >
                  <img src={femaleImg} />
                  Female
                </div>
              </div>
            </div>
            <div className="form-group">
              <PhoneInput
                placeholder="Enter phone number"
                country={"ro"}
                countryCodeEditable={false}
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </div>
          </div>
        </div>

        <hr />

        <p className="layout-title">Select your account type</p>
        <div className="choose-role-div">
          <div
            className={`regular-user-role ${
              role == "user" ? "role-selected" : ""
            }`}
            onClick={() => {
              setRole("user");
            }}
          >
            <img src={regularUserImg}></img>
            <p>Regular user</p>
          </div>
          <div
            className={`stylist-role ${
              role == "stylist" ? "role-selected" : ""
            }`}
            onClick={() => {
              setRole("stylist");
            }}
          >
            <img src={stylistImg}></img>
            <p>Stylist</p>
          </div>
        </div>
        <hr />

        <p className="layout-title">Set location</p>

        <div className="location-div">
          <div className="form-group">
            <GoogleMaps onSelectedLocation={setLocation} />
          </div>
        </div>

        {role === "stylist" && <React.Fragment>
          <hr />
          <p className="layout-title">About you</p>
          <TextArea 
            additionalClass="text-dimension"
            description={about}
            rows={3}
            onChange={(val) =>(setAbout(val.target.value))}
          />

          <hr />
          <p className="layout-title">Select your schedule</p>
          <Schedule setSchedule={setSchedule}/>

          <hr />
          <p className="layout-title">Prices</p>
          <div className="prices-flex">
            <div className="price-p">
              <p>Regular:</p>
              <p>New look:</p>
              <p>Modern haircut:</p>
            </div>
            <div>
              <input 
                onChange={(e) => {
                  console.log(e.target.value, prices)
                  prices.regular = "" + e.target.value;
                  setPrices(prices);
              }}/>
              <br/>
              <input 
              onChange={(e) => {
                console.log(e.target.value, prices)
                prices.newLook = "" + e.target.value;
                setPrices(prices);
            }}/>
              <br/>
              <input 
              onChange={(e) => {
                console.log(e.target.value, prices)
                prices.modern = "" + e.target.value;
                setPrices(prices);
            }}/>
            </div>

            <div className="price-p">
              <p>Lei</p>
              <p>Lei</p>
              <p>Lei</p>
            </div>
          </div> 
        </React.Fragment>}
        <hr/>

        <div className="profile-button">
          <button
            variant="primary"
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Let's started
          </button>{" "}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Register;
