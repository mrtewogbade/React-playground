interface Edible {
 id: number;
 name: string;
 calories: number;
}

interface ItemProps {
 category: string;
 items: Array<Edible>;
}



function List(props: ItemProps){
 const category = props.category;
 const itemList = props.items.sort((a, b) => a.calories - b.calories);

 const listItems = itemList.map((item )=> <li key={item.id}>{item.name}: calories <b>{item.calories}</b> </li>)

 return(
   <>
     <h3 className="list-category">{category}</h3>
     <ol className="list-items">{listItems}</ol>
   </>
 )
}

export default List;
