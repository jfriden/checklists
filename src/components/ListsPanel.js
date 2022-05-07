import {useSelector, useDispatch} from "react-redux"
import {addList} from "../slices/listsSlice"

const ListsPanel = props => {
  const dispatch = useDispatch()

  const lists = useSelector(state => state.lists)
  const entries = useSelector(state => state.entries)
  const count = id => entries.filter(entry => entry.belongsTo === id).length

  return (
    <div className="lists-panel">
      <ul>
        {lists.map(list => {
          return <li key={list.id}
                     onClick={() => props.setSelectedList(list.id)}>
                       <span className="material-icons grey">list</span>
                       {list.name} ({count(list.id)})
                 </li>
        })}
      </ul>
      <div className="action"
           onClick={() => dispatch(addList("Namnlös lista"))}>
             <span className="material-icons">add</span> Ny lista
      </div>
    </div>
  )
}

export default ListsPanel