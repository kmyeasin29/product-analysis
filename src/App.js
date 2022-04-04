import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Review></Review>
      <Dashboard></Dashboard>
      <Blogs></Blogs>
      <About>

      </About>

    </div>
  );
}

export default App;
