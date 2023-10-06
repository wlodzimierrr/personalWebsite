import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import BouncingImage from './components/BouncingImage';

const styles = makeStyles({
  
})


function App() {
  const classes = styles(); 
  return (
    <div className="App">
      <header className={`${classes.heading}`}>
            <h1 class="heading">Wojciech Bak</h1>
      </header>
      <BouncingImage animationSpeed={2} rotationSpeed={2} />
    </div>
  );
}

export default App;
