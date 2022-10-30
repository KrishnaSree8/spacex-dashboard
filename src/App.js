import './App.scss';
import Navbar from './components/navBar';
import Dashboard from './components/dashboard'

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="main-container">
          <Dashboard  />
        </div>
    </div>
  );
}

export default App;
