import React, { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    nameIsDuplicate();
  }, [name, contacts, duplicate]);

  const nameIsDuplicate = () => {
    const checkDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (checkDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? "Name already exists" : ""}
        </h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
