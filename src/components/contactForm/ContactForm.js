import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          placeholder="Contact Name"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
      </label>
      <br />
      <label>
        <input
          type="tel"
          value={phone}
          placeholder="Contact Phone (###-###-####)"
          // regex for US phone numbers
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          onChange={(e) => setPhone(e.target.value)}
          required
        ></input>
      </label>
      <br />
      <label>
        <input
          type="email"
          value={email}
          placeholder="Contact Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </label>
      <br />
      <input type="submit" value="Add Contact"></input>
    </form>
  );
};
