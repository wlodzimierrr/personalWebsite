import './App.css';
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  
})


function App() {
  const classes = styles(); 
  return (
    <div className="App">
      <header className={`${classes.heading}`}>
            <h1 class="heading">Wojciech Bak</h1>
      </header>
    </div>
  );
}

export default App;
