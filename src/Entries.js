import React, {useState, useEffect} from 'react'
import Entry from './Entry'

const Entries = (props) => {
  const [entries, setEntries] = useState(props.entries)
  const [listName, setListName] = useState("")
  const [removeChecked, setRemoveChecked] = useState(false)

  useEffect(() => {
    setEntries(props.entries)
    if (props.list) setListName(props.list.name)
    if (removeChecked) props.removeCheckedEntries()
  }, [props])

  if (!props.list) return <div></div>

  const handleListNameChanged = (e) => {
    props.updateList({...props.list, name: e.target.value})
  }

  const handleRemoveChecked = (e) => {
    setRemoveChecked(e.target.checked)
    props.removeCheckedEntries()
  }

  return (
    <div className="entries">
      <input type="text"
             className="list-name-title"
             value={listName}
             onChange={(e) => handleListNameChanged(e)} />
      <ul>
        {entries.map(entry =>
          (
            <Entry key={entry.id}
                   entry={entry}
                   removeChecked={removeChecked}
                   updateEntry={props.updateEntry}
                   removeEntry={props.removeEntry} />
          )
        )}
      </ul>
      <div className="add"
           onClick={() => props.addEntry("")}>
            <span className="material-icons">add</span> Ny rad
      </div>
      <div className="add"
           onClick={() => props.removeList(props.list.id)}>
            <span className="material-icons">close</span> Ta bort lista
      </div>
      <div className="remove-checked">
      <input type="checkbox" 
             onChange={(e) => handleRemoveChecked(e)}
             checked={removeChecked} />
      Ta bort kryssade föremål
      </div>
    </div>
  )
}

export default Entries