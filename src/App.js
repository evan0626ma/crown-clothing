import { Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from "./pages/home/home";
import Navigation from './pages/navigation/navigation';

const Shop = () => {
  return (
    <div>
      <h1>I am the shop page</h1>
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />
        } />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;
