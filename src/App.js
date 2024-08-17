import logo from './logo.svg';
import './App.css';
import Lp from './components/Lp.jsx';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx';

function App() {
  return (
    <div className="app bg-stone-500">
      <Lp/>
      <Programs/> 
      <Reasons/>
    </div>
  );
}

export default App;
