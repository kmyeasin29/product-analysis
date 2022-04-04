import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
// import About from './components/About/About';
// import Blogs from './components/Blogs/Blogs';
// import Dashboard from './components/Dashboard/Dashboard';
// import Home from './components/Home/Home';
// import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      {/* <Home></Home>
      <Review></Review>
      <Dashboard></Dashboard>
      <Blogs></Blogs>
      <About></About> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Review' element={<Review></Review>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
