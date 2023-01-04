import './App.css';
import Analysis from './components/Analysis';
import AvgRating from './components/Avg-Rating';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import Visitors from './components/Website-Visitors';
import './styles.css';

function App() {
  return (
    <div >
      <span className='parent-content'>
      <Dashboard/>

      <div className='container1'>

      <div className='container2'>

      <Reviews/>
      <AvgRating/>
      <Analysis/>
      </div>
      
      <Visitors/>
      </div>
      
      </span>
      
      
    </div>
  );
}

export default App;
