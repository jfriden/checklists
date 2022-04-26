import React from 'react'

const ListsPanel = (props) => {
  return (
    <div className="listsPanel">
      <ul>
        {props.lists.map(list => {
          return <li key={list.id}
                     onClick={() => props.setSelectedList(list.id)}>
                       <span className="material-icons grey">list</span>
                       {list.name} ({props.count(list.id)})
                 </li>
        })}
      </ul>
      <div className="add"
           onClick={() => props.addList("Namnlös lista")}>
             <span className="material-icons">add</span> Ny lista
      </div>
    </div>
  )
}

export default ListsPanel