import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option select="selected" value="" key={-1}>
        No contact is selected
      </option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact}>
          {contact}
        </option>
      ))}
    </select>
  );
};
