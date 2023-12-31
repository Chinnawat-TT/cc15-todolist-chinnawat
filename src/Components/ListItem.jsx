import "./ListItem.scss";



function ListItem(props) {

    const listClassName =`list__item ${props.active ? "active" : ""}` ;
  return (
    <li className={listClassName}>
      {props.icon}
      <p className="list__item__text">{props.text}</p>
    </li>
  );
}

export default ListItem;
