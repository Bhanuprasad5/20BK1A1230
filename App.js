import './App.css';
import Card from './card';
function App() {
  return (
    <div className="App">
      <Card title="Chennai Express" price={200} />
      <Card title="Hyderabad express" price={300} />
      <Card title="Delhi Door express" price={400} />
    </div>
  );
}

export default App;