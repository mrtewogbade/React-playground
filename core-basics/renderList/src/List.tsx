import PropTypes from 'prop-types';

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

List.propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        calories: PropTypes.number.isRequired
    }))

}

List.defaultProps = {
    category: "Category",
    items: [] as Array<Edible>,
}

export default List;
