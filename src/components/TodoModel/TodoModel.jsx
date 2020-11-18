import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { makeStyles } from "@material-ui/core/styles";
import { updateTodoAction } from "../../redux/actions/todo";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  EditFormModel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "40vh",
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
    },

    "& .css-1okebmr-indicatorSeparator": {
      display: "none",
    },
  },

  Input: {
    border: "2px solid #999",
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
    color: "#fff",
    backgroundColor: "#3180f2",
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

const TodoModel = ({ singleTodo, closeModel }) => {
  const animatedComponents = makeAnimated();
  const updateTodo = useSelector((state) => state.updateTodo);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState(
    singleTodo &&
      singleTodo.todo &&
      singleTodo.todo.todo &&
      singleTodo.todo.todo.title
  );
  const [priorityInput, setPriorityInput] = React.useState({
    value:
      singleTodo &&
      singleTodo.todo &&
      singleTodo.todo.todo &&
      singleTodo.todo.todo.priority,
    label:
      singleTodo &&
      singleTodo.todo &&
      singleTodo.todo.todo &&
      singleTodo.todo.todo.priority,
  });

  const selectTags = () => {
    const array = [];
    singleTodo.todo.todo.tags.map((item) => {
      const obj = {
        value: item,
        label: item,
      };

      array.push(obj);
    });

    return array;
  };
  const tagsOptions = selectTags();

  const [tags, setTags] = React.useState(tagsOptions);

  const handleSubmit = () => {
    const tagsArray = [];
    tags.forEach((item) => {
      tagsArray.push(item.value);
    });

    const todoObj = {
      title,
      priority: priorityInput.value,
      tags: tagsArray.join(","),
    };

    dispatch(updateTodoAction(todoObj, singleTodo.todo.todo._id));

    closeModel();
  };

  return (
    <div className={classes.EditFormModel}>
      <div className="Content">
        <h1>Update Your Todo</h1>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <input
              className={classes.Input}
              type="text"
              name="title"
              placeholder="Give todo title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              options={PriorityData}
              onChange={(e) => setPriorityInput(e)}
            />
          </Grid>
        </Grid>

        <button onClick={handleSubmit} className={classes.Button}>
          {updateTodo && updateTodo.loading ? "UPDATING..." : "Update Todo"}
        </button>
      </div>
    </div>
  );
};

export default TodoModel;
