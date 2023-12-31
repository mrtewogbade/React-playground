interface Fruit {
   name: string,
   calories: number
}

function List(){
   const fruits: Fruit[] = [       
       {name: "apple", calories: 95}, 
       {name: "orange", calories: 45}, 
       {name: "banana", calories: 105}, 
       {name: "coconut", calories: 105}, 
       {name: "pineapple", calories: 37}
   ];

   const listItems = fruits.map((fruit )=> <li>{fruit.name}</li>)

   return(<ol>{listItems}</ol>)
}

export default List;
