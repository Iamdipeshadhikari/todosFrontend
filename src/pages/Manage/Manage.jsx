import Layout from "../../components/Layout/Layout";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Backdrop from "../../components/Backdrop/Backdrop";
import TodoModel from "../../components/TodoModel/TodoModel";
import {
  getAllTodosAction,
  deleteTodoAction,
  getSingleTodoAction,
  updateTodoAction,
} from "../../redux/actions/todo";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  Content: {
    marginRight: "2.5rem",
    cursor: "pointer",

    "& .MuiTableCell-head": {
      fontSize: "1.8rem",
      fontFamily: "Roboto Condensed",
      color: "#999",
    },
    "& .MuiTableCell-body": {
      fontSize: "1.4rem",
      fontFamily: "Roboto Condensed",
      color: "#999",
    },

    "& i": {
      fontSize: "2rem",
      color: "#3180f2",
    },

    "& span": {
      color: "#fff",
      backgroundColor: "#9088d4",
      padding: ".5rem",
      fontSize: "1.2rem",
      borderRadius: ".5rem",
      marginRight: "1rem",
    },

    "& .viewTodo": {
      color: "#999",
      margin: "none",
      outline: "none",

      "&:hover": {
        color: "#015fe6",
      },
    },

    "& .deleteTodo": {
      color: "#999",
      margin: "none",
      outline: "none",

      "&:hover": {
        color: "#015fe6",
      },
    },

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
});

const Manage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.allTodos);
  const deleteTodo = useSelector((state) => state.deleteTodo);
  const singleTodo = useSelector((state) => state.singleTodo);
  const updateTodo = useSelector((state) => state.updateTodo);
  const [openModel, setOpenModel] = React.useState(false);

  const handleOpenModel = () => {
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
  };

  React.useEffect(() => {
    dispatch(getAllTodosAction());
  }, [deleteTodo.loading, updateTodo.loading]);

  // Model States

  return (
    <>
      <Layout>
        <div className={classes.Content}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Priority</TableCell>
                  <TableCell align="right">Tags</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allTodos &&
                  allTodos.todos &&
                  allTodos.todos.todos.length > 0 &&
                  allTodos.todos.todos.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell component="th" scope="row">
                        {item.title}
                      </TableCell>
                      <TableCell align="right">
                        {item.completed ? (
                          <i className="far fa-check-circle" />
                        ) : (
                          <i className="far fa-times-circle" />
                        )}
                      </TableCell>
                      <TableCell align="right">{item.priority}</TableCell>
                      <TableCell align="right">
                        {item.tags.map((item) => (
                          <span>{item}</span>
                        ))}
                      </TableCell>
                      <TableCell align="right">
                        <p
                          onClick={() => {
                            dispatch(getSingleTodoAction(item._id));
                            handleOpenModel();
                          }}
                          className="viewTodo"
                        >
                          {singleTodo && singleTodo.loading
                            ? "LOADING..."
                            : "VIEW"}
                        </p>

                        {/* Editing Todo Model */}
                        {openModel && (
                          <Backdrop closeModel={handleCloseModel} />
                        )}
                        {singleTodo &&
                          singleTodo.todo &&
                          singleTodo.todo.todo && (
                            <>
                              {openModel && (
                                <TodoModel closeModel={handleCloseModel} singleTodo={singleTodo} />
                              )}
                            </>
                          )}
                        {/* Editing Todo Model */}

                        <p
                          onClick={() => {
                            dispatch(deleteTodoAction(item._id));
                          }}
                          className="deleteTodo"
                        >
                          {deleteTodo && deleteTodo.loading
                            ? "DELETING..."
                            : "DELETE"}
                        </p>
                      </TableCell>
                      {allTodos && allTodos.loading && (
                        <div class="lds-ripple">
                          <div></div>
                          <div></div>
                        </div>
                      )}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Layout>
    </>
  );
};

export default Manage;
