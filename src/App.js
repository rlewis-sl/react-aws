import ItemList from './ItemList';
import './App.css';

function App() {
  const items = [
    { name: 'An item' }, 
    { name: 'Another item' }, 
    { name: 'Yet another item' }, 
    { name: 'Some random item' }
  ];

  return (
    <div className="App">
      <ItemList items={items}/>
    </div>
  );
}

export default App;
