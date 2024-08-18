import logo from './logo.svg';
import './App.css';
import Lp from './components/Lp.jsx';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Plans from './components/Plans/Plans.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Join from './components/Join/Join.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="app bg-stone-500">
      <Lp/>
      <Programs/> 
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
