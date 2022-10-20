import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./components/List";
import { GrLogin } from "react-icons/gr";
import { Link } from "react-router-dom";


function App() {
  const [contacts, setContacts] = useState([]);
  const loadContacts = async () => {
    try {
      const results =await axios.get("/api/v1/contacts/");
      console.log("here is the response: ");
      console.log(contacts);
      setContacts(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadContacts()
  }, []);




  return (
    <main>
      <section className="container">
        {/* <div className="topNav">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/add">
            <p>Add Contact</p>
          </Link>
        </div> */}

        <div>
          <h3>You have {contacts.length} contacts</h3>
        </div>
        <List contacts={contacts} setContacts={setContacts} />
        <button onClick={() => setContacts([])}>view all contacts</button>
      </section>
    </main>
  );
}

export default App;
