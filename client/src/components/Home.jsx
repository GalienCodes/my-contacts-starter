import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section className="container">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/add">
          <button>Add Contact</button>
        </Link>
        
      </section>
    </main>
  );
}

export default Home