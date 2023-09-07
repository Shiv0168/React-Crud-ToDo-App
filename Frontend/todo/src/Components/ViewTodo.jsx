import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewTodo = () => {
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    const url = "http://localhost:8080/todo";
    let result = await axios.get(url);
    setAllTodo(result.data);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8080/todo/${id}`);
    fetchTodo();
  };

  return (
    <div>
      <div className="container my-5">
        <table className="table table-striped shadow">
          <thead>
            <tr className="table-info">
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allTodo.map((todo, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <Link to={`/edit/${todo.id}`} className="btn btn-primary">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTodo;
