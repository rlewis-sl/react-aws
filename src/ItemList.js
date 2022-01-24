import Item from './Item';

function ItemList({items}) {

    return (
      <ul>
        {items.map((o,i) => (
            <Item item={o} key={o.name} />
        ))}
      </ul>
    );
  }
  
  export default ItemList;
  