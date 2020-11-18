import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../redux/actions/profile";
import { deleteAccountAction, logoutAction } from "../../redux/actions/user";

const useStyles = makeStyles((theme) => ({
  ProfileContainer: {
    backgroundColor: "#fff",
    height: "100%",
    padding: "5rem 2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  ProfileImage: {
    height: "8rem",
    width: "8rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
    borderRadius: "50%",
    border: "5px solid rgba(1,95,230,0.5)",
  },
  ProfileTitle: {
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    fontSize: "2.5rem",
    margin: "2rem 0",
    cursor: "pointer",
  },
  SocialLinks: {
    display: "flex",
    listStyle: "none",
  },
  SocialItem: {
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "2px",
    backgroundColor: "#015fe6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
  },
  SocialLink: {
    color: "#fff",
    textDecoration: "none",
  },
  Paragraph: {
    color: "rgba(88,90,94,0.8)",
    fontFamily: "Roboto Condensed",
    fontWeight: 400,
    fontSize: "1.4rem",
    margin: "2rem 0",
    lineHeight: 1.6,
    textAlign: "center",
  },

  DeleteModel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "30vh",
    zIndex: "999",
    width: "40%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff !important",
    borderRadius: "1.5rem",
    padding: "1rem",

    "& .Content": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      justifyContent: "space-evenly",
      fontFamily: "Roboto Condensed",
      color: "#999",

      "& h2": {
        fontWeight: "900",
      },

      "& .actions": {
        "& button": {
          border: "none",
          outline: "none",
          padding: ".8rem 1.5rem",
          margin: "0 .5rem",
          fontSize: "1.6rem",
          borderRadius: "1rem",
          fontFamily: "Roboto Condensed",
        },

        "& .decline": {
          color: "#fff",
          backgroundColor: "#888",
          cursor: "pointer",
        },

        "& .accept": {
          color: "#fff",
          backgroundColor: "#3180f2",
          cursor: "pointer",
        },
      },
    },
  },
}));

const ProfileBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const deleteAccount = useSelector((state) => state.deleteAccount);
  const [openModel, setOpenModel] = React.useState(false);

  const handleOpenModel = () => {
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
  };

  React.useEffect(() => {
    dispatch(getUserProfileAction());

    // eslint-disable-next-line
  }, []);

  const handleDeleteAccount = () => {
    dispatch(deleteAccountAction());
    dispatch(logoutAction());
  };

  return (
    <>
      <div className={classes.ProfileContainer}>
        <img
          className={classes.ProfileImage}
          src={
            userProfile && userProfile.error
              ? "https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118822720.jpg"
              : userProfile.profile &&
                userProfile.profile.profile &&
                userProfile.profile.profile.image
          }
          alt={
            userProfile && userProfile.error
              ? "Placeholder"
              : userProfile.profile &&
                userProfile.profile.profile &&
                userProfile.profile.profile.fullname
          }
        />
        <h1 className={classes.ProfileTitle}>
          {userProfile && userProfile.error
            ? "Placeholder"
            : userProfile.profile &&
              userProfile.profile.profile &&
              userProfile.profile.profile.fullname}
        </h1>
        <ul className={classes.SocialLinks}>
          {userProfile && userProfile.error
            ? "Placeholder"
            : userProfile.profile &&
              userProfile.profile.profile &&
              userProfile.profile.profile.socialLinks.map((item) => {
                if (item.includes("facebook")) {
                  return (
                    <li className={classes.SocialItem}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item}
                        className={classes.SocialLink}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  );
                }

                if (item.includes("instagram")) {
                  return (
                    <li className={classes.SocialItem}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item}
                        className={classes.SocialLink}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  );
                }

                if (item.includes("twitter")) {
                  return (
                    <li className={classes.SocialItem}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item}
                        className={classes.SocialLink}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
        </ul>
        <p className={classes.Paragraph}>
          {userProfile && userProfile.error
            ? "Placeholder"
            : userProfile.profile &&
              userProfile.profile.profile &&
              userProfile.profile.profile.description}
        </p>

        {userProfile && userProfile.error ? null : (
          <Button
            text="Update Profile"
            link
            to="/update-profile"
            type="rounded"
            style={{ margin: "1rem 0" }}
          />
        )}
        <Button
          onClick={handleOpenModel}
          text={
            <>
              <i
                className="fas fa-trash-alt"
                style={{ marginRight: ".5rem" }}
              />
              <span>
                {deleteAccount && deleteAccount.loading
                  ? "Loading..."
                  : "Delete Account"}
              </span>
            </>
          }
          style={{ margin: "2rem 0" }}
        />
      </div>

      {/* DeleteAccount Model */}
      {openModel && <Backdrop closeModel={handleCloseModel} />}
      {openModel && (
        <div className={classes.DeleteModel}>
          <div className="Content">
            <h2>This Action in Not Reversible</h2>
            <p>Are you sure you want to delete your Account For Forever</p>
            <div className="actions">
              <button onClick={handleDeleteAccount} className="accept">
                Delete
              </button>
              <button onClick={handleCloseModel} className="decline">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileBar;
