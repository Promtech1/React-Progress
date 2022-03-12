import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import BindHandlers from './components/BindHandlers';

function App() {
  return (
    <div className="App">
      <Greet name = "promise" love = "Coding"/>
      <Welcome name="promise" nickname="Promtech"/>
      <BindHandlers/>
    </div>
  );
}

export default App;
