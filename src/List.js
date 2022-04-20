import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = (props) => {
  console.log(props)
  return <ul className="user-list">
    {
      props.data.map(persona => (
        <li key={persona.id}>
          <Person {...persona} removeItem={props.removeItem}></Person>
        </li>
      ))
    }
  </ul>;
};

const Person = ({ id, nome, stato, img, removeItem}) => {
  return <article>
    <img src={img} alt='prs' className="person-img"></img>
    <div className="person-info">
      <div className="person-action">
        <h4>{nome}</h4>
        <button className="btn">
          <RiDeleteBack2Fill className="icon" onClick={() => removeItem(id)}/>
        </button>
      </div>
      <p>{stato}</p>
    </div>
  </article>;
};

export default List;
