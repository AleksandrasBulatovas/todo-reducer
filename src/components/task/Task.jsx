import { ListGroup, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context/TasksContext";


const Task = (props) => {
    const {removeTask} = useGlobalContext();
    return ( 
        <ListGroup.Item>
            <ul>
                <li className="list-group-item mt-3">Title: {props.title}</li>
                <li className="list-group-item ">Description: {props.desc}</li>
            </ul>
            <Button onClick={()=>{removeTask(props.id)}} className="float-end">Salinti</Button>
            <Button className="float-end mx-2">Atlikta</Button>
         </ListGroup.Item>
     );
}
 
export default Task;