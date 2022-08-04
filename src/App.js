
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/funcComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Product Inventory System</h1>
        <AddProduct/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
