
import { createBrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
// import Button from "@mui/material/Button"
import { createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import { Provider } from 'react-redux';
import { store } from './store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/Cart' index element={<Cart />} />
      <Route path='/Login' index element={<Login />} />
    </Route>
  )
);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App
