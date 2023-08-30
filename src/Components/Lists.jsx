import ListItem from "./ListItem";

function Lists (props){

    return (
        <ul>
            {props.data.map((obj)=>(
                <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active}/>
            ))}
        </ul>
    )
}

export default Lists