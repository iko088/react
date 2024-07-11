import "./App.css";

function App() {

  return (
    <>
      <div className="App">
        <nav className="navbar">
          <div className="logo">MyBrand</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Laptop"
            />
          </div>
          <div className="text-container">
            <h1>Welcome to MyBrand</h1>
            <p>
              Discover the best solutions for your business. We provide
              top-notch services to help you succeed in the digital world.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
