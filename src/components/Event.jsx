import React from "react";

import { useState } from "react";

export default function Event() {
  const eventInfo = {
    eName: "",
    eDesignation: "",
    edate: "",
    location: "",
    eDetails: "",
  };

  const [eventData, setEventData] = useState(eventInfo);
  //   const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/event", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
