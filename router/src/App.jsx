
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">this is footer</footer>
    </div>
  );
}

function Dashboard() {
  return (
    <h1>This is Dashboard</h1>
  );
}

function Home() {
  return (
    <h1>This is Home</h1>
  );
}

function About() {
  return (
    <h1>This is About</h1>
  );
}

export default App
