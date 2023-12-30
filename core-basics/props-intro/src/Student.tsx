interface StudentProps {
 name: string;
 age?: number;
 isStudent?: boolean;
}

function Student(props: StudentProps){
   return(
       <div className="student">
           <p>Name: {props.name}</p>
           <p>Age: {props.age}</p>
           <p>Status: {props.isStudent ? "Yes" : "No"}</p>
       </div>
   )
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}



export default Student;
