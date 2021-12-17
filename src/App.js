import data from './data'
import LineChart from './components/LineChart';
import BarChart from './components/BarChart'


function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">PIGLET</a> 
        </div>
        <div>
            <a href="/signin">Sign in</a>                
        </div>
        
    </header>
    
    <main>
   {/* <BarChart />
        <LineChart />
        */}
    </main>

    <footer className="row center">
        Powerful Intelligent Sensorial System 
    </footer>

</div>
  );
}


export default App;
