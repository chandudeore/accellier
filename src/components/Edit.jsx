import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Edit() {
  let eventInfo = {
    eName: "",
    eDesignation: "",
    edate: "",
    location: "",
    eDetails: "",
  };

  const [eventData, setEventData] = useState(eventInfo);

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/event/${id}`, {
      method: "PUT",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleReset = () => {
    eventInfo = {
      eName: "",
      eDesignation: "",
      edate: "",
      location: "",
      eDetails: "",
    };
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="eName">Event-Name</label>
          <input
            type="text"
            placeholder="Enter Event Name"
            required
            name="eName"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="eDesignation">Event-Designation</label>
          <input
            type="text"
            required
            placeholder="Enter Event Designation"
            name="eDesignation"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="edate">Date</label>
          <input type="date" required onChange={handleChange} name="edate" />
          <br />
          <select name="location" required onChange={handleChange}>
            <option value="">----</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mohali">Mohali</option>
            <option value="Nashik">Nashik</option>
          </select>
          <br />
          <label htmlFor="eDetails">Event-Details</label>
          <textarea
            name="eDetails"
            onChange={handleChange}
            placeholder="Enter Details of Event"
            required
          ></textarea>
          <div>
            <button>
              <Link to="/">Cancel</Link>
            </button>
            <button type="submit">Save</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
