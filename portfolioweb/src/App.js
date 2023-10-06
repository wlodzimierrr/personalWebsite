import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import BouncingImage from './components/BouncingImage';
import BasicAccordion from './components/AccordionTabs';

const styles = makeStyles({
  accordion: {
    position: 'absolute', 
    bottom: 0, 
    width: "100%",
  },

})


function App() {
  const classes = styles(); 
  return (
    <div className="App">
      <header className={`${classes.heading}`}>
            <h1 class="heading">Wojciech Bak</h1>
      </header>
      <BouncingImage animationSpeed={2} rotationSpeed={2} />
      <div className={`${classes.accordion}`}>
      <BasicAccordion />
    </div>
    </div>
  );
}

export default App;
