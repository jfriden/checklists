import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"

import {removeChecked, addEntry} from "../slices/entriesSlice"
import {removeList, updateList} from "../slices/listsSlice"
import Entry from "./Entry"

const Entries = props => {
  const [listName, setListName] = useState("")
  const [removeCheckedOn, setRemoveCheckedOn] = useState(false)

  const dispatch = useDispatch()

  const currentList = 
    useSelector(state => state.lists).find(list => list.id === props.list)

  const entries = 
    useSelector(state => state.entries).filter(entry => entry.belongsTo === props.list)

  useEffect(() => {
    if (currentList) setListName(currentList.name)
    if (removeCheckedOn) dispatch(removeChecked())
  }, [currentList, removeCheckedOn])

  if (!currentList) return <div></div>

  const handleListNameChanged = e => {
    dispatch(updateList({...currentList, name: e.target.value}))
  }

  const handleRemoveChecked = e => {
    setRemoveCheckedOn(e.target.checked)
    dispatch(removeChecked())
  }

  return (
    <div className="entries">
      {<input type="text"
             className="list-name-title"
             value={listName}
             onChange={e => handleListNameChanged(e)} />}
      <ul>
        {entries.map(entry => 
          (
            <Entry key={entry.id}
                   entry={entry.id}
                   removeCheckedOn={removeCheckedOn} />
          )
        )}
      </ul>
      <div className="action"
           onClick={() => dispatch(addEntry(props.list, ""))}>
            <span className="material-icons">add</span> Ny rad
      </div>
      <div className="action"
           onClick={() => dispatch(removeList(props.list))}>
            <span className="material-icons">close</span> Ta bort lista
      </div>
      <input type="checkbox" 
             onChange={e => handleRemoveChecked(e)}
             checked={removeCheckedOn} />
      Ta bort kryssade föremål
    </div>
  )
}

export default Entries