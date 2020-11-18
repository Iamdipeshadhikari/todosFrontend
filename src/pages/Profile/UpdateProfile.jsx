import React from "react";
import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../redux/actions/profile";

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

const UpdateProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [social, setSocial] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const userProfile = useSelector((state) => state.userProfile);
  const updateProfile = useSelector((state) => state.updateProfile);

  // input states
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const profileObj = {
      fullname,
      description,
      facebook,
      instagram,
      twitter,
    };

    dispatch(updateProfileAction(profileObj));

    setFullname("");
    setDescription("");
    setFacebook("");
    setInstagram("");
    setTwitter("");
  };

  return (
    <Layout>
      <div className={classes.ProfileContainer}>
        <h1>Update Your Profile</h1>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <input
                className={classes.TextInput}
                type="text"
                placeholder="Full Name"
                name="fullname"
                defaultValue={
                  userProfile &&
                  userProfile.profile &&
                  userProfile.profile.profile.fullname
                }
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
                        defaultValue={
                          userProfile &&
                          userProfile.profile &&
                          userProfile.profile.profile.socialLinks[0]
                        }
                        name="facebook"
                        onChange={(e) => setFacebook(e.target.value)}
                      />
                    )}

                    {social === "instagram" && (
                      <input
                        className={classes.TextInput}
                        type="text"
                        placeholder="Give Instagram Profile"
                        defaultValue={
                          userProfile &&
                          userProfile.profile &&
                          userProfile.profile.profile.socialLinks[1]
                        }
                        name="instagram"
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    )}

                    {social === "twitter" && (
                      <input
                        className={classes.TextInput}
                        type="text"
                        placeholder="Give Twitter Profile"
                        defaultValue={
                          userProfile &&
                          userProfile.profile &&
                          userProfile.profile.profile.socialLinks[2]
                        }
                        name="twitter"
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
                defaultValue={
                  userProfile &&
                  userProfile.profile &&
                  userProfile.profile.profile.description
                }
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </Grid>
          </Grid>

          <button type="submit" className={classes.Button}>
            {updateProfile && updateProfile.loading
              ? "Updating..."
              : "Update Profile"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UpdateProfile;
