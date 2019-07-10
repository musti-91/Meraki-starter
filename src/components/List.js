import React from "react"

/**
 * @author
 * @function List
 **/

const List = props => {
  return (
    <div>
      {props.list.map(i => (
        <li key={i.id} className="item">
          <h3>{i.name}</h3>
        </li>
      ))}
    </div>
  )
}

export default List
