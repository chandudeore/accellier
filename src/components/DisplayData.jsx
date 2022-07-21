import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DisplayData() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3001/event")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/event/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <td>Event-Name</td>
              <td>Event-Designation</td>
              <td>Date</td>
              <td>Location</td>
              <td>Event-Details</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.eName}</td>
                  <td>{item.eDesignation}</td>
                  <td>{item.edate}</td>
                  <td>{item.location}</td>
                  <td>{item.eDetails}</td>
                  <td>
                    <Link to={`/edit/${item.id}`}>Edit</Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
