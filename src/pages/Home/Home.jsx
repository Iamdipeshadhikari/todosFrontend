import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Layout from "../../components/Layout/Layout";
import {
  showCompletedTodoAction,
  showUncompletedTodoAction,
} from "../../redux/actions/todo";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoAction } from "../../redux/actions/todo";

const useStyles = makeStyles((theme) => ({
  HomeContainer: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  Box: {
    backgroundColor: "#015fe6",
    padding: "2rem",
    borderRadius: "1.5rem",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",

    "& h1": {
      fontFamily: "Roboto Condensed",
      fontWeight: "300",
      fontSize: "2.5rem",
      marginBottom: "2.5rem",
    },
  },

  BoxRight: {
    backgroundColor: "#015fe6",
    padding: "2rem",
    marginRight: "1rem",
    borderRadius: "1.5rem",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",

    "& h1": {
      fontFamily: "Roboto Condensed",
      fontWeight: "300",
      fontSize: "2.5rem",
      marginBottom: "2.5rem",
    },
  },

  SingleTodo: {
    backgroundColor: "#fff",
    padding: ".5rem 1rem",
    borderRadius: ".8rem",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    color: "#999",
    display: "flex",
    flexDirection: "column",
    marginBottom: "2.5rem",
    cursor: "pointer",
    position: "relative",

    "& p": {
      fontSize: "1.8rem",
      paddingBottom: ".5rem",
    },

    "& .Priority": {
      color: "#555",
      padding: ".5rem 0",
      borderRadius: ".5rem",
      marginBottom: ".5rem",
      display: "flex",
      alignItems: "center",

      "& i": {
        marginRight: ".5rem",
      },
    },

    "& .tags": {
      display: "flex",
      alignItems: "center",

      "& span": {
        color: "#fff",
        backgroundColor: "#9088d4",
        padding: ".5rem",
        fontSize: "1.2rem",
        borderRadius: ".5rem",
        marginRight: "1rem",
      },
    },

    "& .makeCompleted": {
      "& button": {
        position: "absolute",
        top: "50%",
        right: "1rem",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        fontSize: "3rem",
        color: "#999",
        cursor: "pointer",
        transition: "all 0.2s ease",

        "&:hover": {
          color: "#28df99",
        },
      },
    },

    "& .Completed": {
      textDecoration: "line-through",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const completedTodos = useSelector((state) => state.completedTodos);
  const uncompletedTodos = useSelector((state) => state.uncompletedTodos);
  const updateTodo = useSelector((state) => state.updateTodo);

  React.useEffect(() => {
    dispatch(showCompletedTodoAction());
    dispatch(showUncompletedTodoAction());
  }, [updateTodo.loading]);

  return (
    <Layout>
      <div className={classes.HomeContainer}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={classes.Box}>
              <h1>Completed Todos:</h1>

              {completedTodos && completedTodos.loading ? (
                <div class="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <>
                  {completedTodos &&
                  completedTodos.todos &&
                  completedTodos.todos.todos &&
                  completedTodos.todos.todos.length > 0 ? (
                    <>
                      {completedTodos.todos.todos.map((item) => (
                        <div className={classes.SingleTodo}>
                          <p className="Completed">{item.title}</p>
                          <span className="Priority">
                            <i
                              style={{
                                color: `${
                                  item.priority === "Low"
                                    ? "#28df99"
                                    : item.priority === "Normal"
                                    ? "#0278ae"
                                    : item.priority === "High"
                                    ? "#fddb3a"
                                    : item.priority === "Urgent"
                                    ? "#ff414d"
                                    : null
                                }`,
                              }}
                              className="fas fa-circle"
                            />{" "}
                            Priority: {item.priority}
                          </span>
                          <div className="tags">
                            {item.tags.map((item) => (
                              <span>{item}</span>
                            ))}
                          </div>

                          <form
                            onSubmit={(e) => {
                              e.preventDefault();

                              dispatch(
                                updateTodoAction(
                                  {
                                    completed: "false",
                                    title: item.title,
                                  },
                                  item._id
                                )
                              );
                            }}
                            className="makeCompleted"
                          >
                            <button type="submit">
                              <i className="far fa-times-circle" />
                            </button>
                          </form>
                        </div>
                      ))}
                    </>
                  ) : (
                    <h1>Sorry No todos completed yet</h1>
                  )}
                </>
              )}
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className={classes.BoxRight}>
              <h1>Uncompleted Todos:</h1>

              {uncompletedTodos && uncompletedTodos.loading ? (
                <div class="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <>
                  {uncompletedTodos &&
                  uncompletedTodos.todos &&
                  uncompletedTodos.todos.todos &&
                  uncompletedTodos.todos.todos.length > 0 ? (
                    <>
                      {uncompletedTodos.todos.todos.map((item) => (
                        <div className={classes.SingleTodo}>
                          <p>{item.title}</p>
                          <span className="Priority">
                            <i
                              style={{
                                color: `${
                                  item.priority === "Low"
                                    ? "#28df99"
                                    : item.priority === "Normal"
                                    ? "#0278ae"
                                    : item.priority === "High"
                                    ? "#fddb3a"
                                    : item.priority === "Urgent"
                                    ? "#ff414d"
                                    : null
                                }`,
                              }}
                              className="fas fa-circle"
                            />{" "}
                            Priority: {item.priority}
                          </span>
                          <div className="tags">
                            {item.tags.map((item) => (
                              <span>{item}</span>
                            ))}
                          </div>

                          <form
                            onSubmit={(e) => {
                              e.preventDefault();

                              dispatch(
                                updateTodoAction(
                                  {
                                    completed: "true",
                                    title: item.title,
                                  },
                                  item._id
                                )
                              );
                            }}
                            className="makeCompleted"
                          >
                            <button type="submit">
                              <i className="far fa-check-circle" />
                            </button>
                          </form>
                        </div>
                      ))}
                    </>
                  ) : (
                    <h1>Great No todos LEFT</h1>
                  )}
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Home;
