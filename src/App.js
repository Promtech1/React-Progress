import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name = "promise" love = "Coding"/>
      <Welcome name="promise" nickname="Promtech"/>
    </div>
  );
}

export default App;
