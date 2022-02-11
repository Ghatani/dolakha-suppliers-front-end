import { useParams } from "react-router-dom";

const Material =()=>{
    const {id} = useParams();
    return(
        <div>This is material section. Your material id is {id}</div>
    )
}


export default Material;