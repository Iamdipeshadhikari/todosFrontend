import React from "react";
import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { createProfileAction } from "../../redux/actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const useStyles = makeStyles(() => ({
  ProfileContainer: {
    width: "100%",
    padding: "1.5rem",
    backgroundColor: "#015fe6",
    borderRadius: "1.5rem",

    "& h1": {
      fontSize: "2.5rem",
      fontWeight: "300",
    },

    "& form": {
      padding: "3rem 0",
    },
  },
  TextInput: {
    border: "none",
    outline: "none",
    fontSize: "1.6rem",
    padding: ".7rem 1.5rem",
    borderRadius: ".5rem",
    width: "100%",
    fontFamily: "Roboto Condensed",
    color: "#555",

    "&::placeholder": {
      color: "#999",
    },
  },

  TextAreaInput: {
    height: "10rem",
    resize: "none",
    border: "none",
    outline: "none",
    fontSize: "1.6rem",
    padding: ".7rem 1.5rem",
    borderRadius: ".5rem",
    width: "100%",
    fontFamily: "Roboto Condensed",
    color: "#555",

    "&::placeholder": {
      color: "#999",
    },
  },

  SocialInput: {
    display: "flex",
    alignItems: "center",

    "& .MuiSelect-select": {
      background: "#fff",
      width: "10rem",
      padding: ".7rem 1.5rem !important",
      height: "2.2rem",
      borderRadius: ".5rem",
    },

    "& .MuiSelect-icon": {
      fontSize: "2.5rem",
    },

    "& .MuiSelect-selectMenu": {
      fontSize: "1.6rem",
      fontFamily: "Roboto Condensed",
      color: "#555",
    },

    "& input": {
      marginLeft: "1.2rem",
      marginRight: "1.2rem",
    },

    "& span": {
      fontSize: "1.2rem",
      fontFamily: "Roboto Condensed",
      color: "#555",
      padding: ".7rem 1rem",
      borderRadius: ".5rem",
      cursor: "pointer",
      backgroundColor: "#fff",
    },
  },

  Upload: {
    position: "relative",
    width: "20rem",

    "& input": {
      display: "none",
    },

    "& label": {
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",

      "& i": {
        fontSize: "3rem",
      },

      "& span": {
        fontSize: "1.5rem",
        color: "#fff",
        marginLeft: "1rem",
      },
    },

    "& img": {
      height: "7rem",
      width: "7rem",
      borderRadius: "50%",
      cursor: "pointer",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    },
  },

  ImageRemoveIcon: {
    height: "2rem",
    width: "2rem",
    backgroundColor: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#555",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "10rem",
    cursor: "pointer",
  },

  Button: {
    padding: ".7rem 1.5rem",
    borderRadius: ".5rem",
    color: "#999",
    backgroundColor: "#fff",
    boxShadow: "3px 3px 7px rgba(0,0,0,0.1)",
    marginTop: "2rem",
    fontSize: "2rem",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
}));

const Profile = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const createProfile = useSelector((state) => state.createProfile);
  const userProfile = useSelector((state) => state.userProfile);

  React.useEffect(() => {
    if (
      userProfile &&
      userProfile.profile &&
      userProfile.profile.profile &&
      userProfile.profile.profile.fullname
    ) {
      history.push("/update-profile");
      toast.success(
        "You already have profile, Redirecting to update profile page"
      );
    }
    // eslint-disable-next-line
  }, [userProfile]);

  const [social, setSocial] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // input states
  const [image, setImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [facebook, setFacebook] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [twitter, setTwitter] = React.useState("");

  const handleChange = (event) => {
    setSocial(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleImageUrl = (e) => {
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    formData.append("fullname", fullname);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("twitter", twitter);

    dispatch(createProfileAction(formData));

    setImage(null);
    setFullname("");
    setDescription("");
    setImageURL("");
    setFacebook("");
    setInstagram("");
    setTwitter("");
    setSocial("");
  };

  return (
    <Layout>
      <div className={classes.ProfileContainer}>
        <h1>Add Your Profile</h1>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <input
                className={classes.TextInput}
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.SocialInput}>
                <Select
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={social}
                  onChange={handleChange}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={"facebook"}>Facebook</MenuItem>
                  <MenuItem value={"twitter"}>Twitter</MenuItem>
                  <MenuItem value={"instagram"}>Instagram</MenuItem>
                </Select>

                {social && (
                  <>
                    {social === "facebook" && (
                      <input
                        className={classes.TextInput}
                        type="text"
                        placeholder="Give Faceboook Profile"
                        name="facebook"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                      />
                    )}

                    {social === "instagram" && (
                      <input
                        className={classes.TextInput}
                        type="text"
                        placeholder="Give Instagram Profile"
                        name="instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    )}

                    {social === "twitter" && (
                      <input
                        className={classes.TextInput}
                        type="text"
                        placeholder="Give Twitter Profile"
                        name="twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                      />
                    )}
                  </>
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              <textarea
                className={classes.TextAreaInput}
                placeholder="Sweet and short description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.Upload}>
                {imageURL ? (
                  <>
                    <img src={imageURL} alt="Profile Pic" />
                    <i
                      onClick={() => {
                        setImageURL("");
                        setImage(null);
                      }}
                      className={`fas fa-times ${classes.ImageRemoveIcon}`}
                    />
                  </>
                ) : (
                  <>
                    <label for="file-input">
                      <i className="fas fa-cloud" />
                      <span>No Image Selected</span>
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      name="image"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        handleImageUrl(e);
                      }}
                    />
                  </>
                )}
              </div>
            </Grid>
          </Grid>

          <button type="submit" className={classes.Button}>
            {createProfile && createProfile.loading
              ? "Creating..."
              : "Create profile"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
