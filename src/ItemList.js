import {useState} from 'react';
import Item from './Item';

function ItemList({getItems}) {

    const [listState, setListState] = useState({items: [], loading: true});

    if (listState.loading) {
        getItems()
            .then(data => setListState({items: data.items, loading: false}));

        return <div>Loading...</div>
    }

    return (
      <ul>
        {listState.items.map((o,i) => (
            <Item item={o} key={o.name} />
        ))}
      </ul>
    );
  }
  
  export default ItemList;
  