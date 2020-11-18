import React from "react";
import Layout from "../../components/Layout/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { createTodoAction } from "../../redux/actions/todo";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  Container: {
    width: "100%",
    padding: "1.5rem",
    borderRadius: "1rem",
    backgroundColor: "#015fe6",

    "& h1": {
      fontWeight: "300",
      fontFamily: "Roboto Condensed",
      marginBottom: "3rem",
    },

    "& .css-26l3qy-menu": {
      color: "#999",
    },

    "& .css-1rhbuit-multiValue": {
      backgroundColor: "#015fe6",
    },

    "& .css-12jo7m5": {
      color: "#fff",
    },
  },
  Input: {
    border: "none",
    outline: "none",
    fontSize: "1.6rem",
    padding: "1rem 1.5rem",
    borderRadius: ".5rem",
    width: "100%",
    fontFamily: "Roboto Condensed",
    color: "#555",

    "&::placeholder": {
      color: "#999",
    },
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

const PriorityData = [
  {
    value: "Low",
    label: "Low",
  },
  {
    value: "Normal",
    label: "Normal",
  },
  {
    value: "High",
    label: "High",
  },
  {
    value: "Urgent",
    label: "Urgent",
  },
];

const TagsData = [
  { value: "motivation", label: "Motivation" },
  { value: "change", label: "Change" },
  { value: "extreme", label: "Extreme" },
  { value: "health", label: "Health" },
  { value: "body-building", label: "Body Building" },
  { value: "coding", label: "Coding" },
];

const Add = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const createTodo = useSelector((state) => state.createTodo);
  const animatedComponents = makeAnimated();
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [priorityInput, setPriorityInput] = React.useState({
    value: "Low",
    label: "Low",
  });

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    const tagsArray = [];
    tags.forEach((item) => {
      tagsArray.push(item.value);
    });

    const todoObj = {
      title,
      priority: priorityInput.value,
      tags: tagsArray.join(","),
    };

    dispatch(createTodoAction(todoObj));

    setTitle("");
    setTags("");
    setPriorityInput({ value: "Low", label: "Low" });
  };

  return (
    <Layout>
      <div className={classes.Container}>
        <h1>Add New Todo // Make Yourself Better</h1>

        <form onSubmit={handleTodoSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <input
                className={classes.Input}
                type="text"
                name="title"
                placeholder="What To Do?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={TagsData}
                onChange={(e) => setTags(e)}
                value={tags}
              />
            </Grid>

            <Grid item xs={6}>
              <Select
                value={priorityInput}
                onChange={(e) => setPriorityInput(e)}
                options={PriorityData}
              />
            </Grid>
          </Grid>

          <button
            disabled={
              title === "" || priorityInput === "" || tags === ""
                ? "disabled"
                : null
            }
            type="submit"
            className={classes.Button}
          >
            {createTodo && createTodo.loading ? "Creating..." : "Add Todo"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Add;
