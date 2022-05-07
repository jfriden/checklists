import {useState} from "react"
import {useSelector, useDispatch} from "react-redux"

import {updateEntry, removeEntry, removeChecked} from "../slices/entriesSlice"

const Entry = (props) => {
  const [textWasEmpty, setTextWasEmpty] = useState(false)

  const dispatch = useDispatch()

  const entry = useSelector(state => state.entries).find(entry => entry.id === props.entry)

  const handleChange = (e, entry) => {
    if (e.target.name === "checked") {
      dispatch(updateEntry({...entry, checked: !entry.checked}))
      if (props.removeCheckedOn) dispatch(removeChecked())
    } else {
      dispatch(updateEntry({...entry, [e.target.name]: e.target.value}))
    }
  }

  const handleKeyUp = (e, entry) => {
    if (e.target.value === "") {
      if (textWasEmpty && e.keyCode === 8) dispatch(removeEntry(entry.id))
      else setTextWasEmpty(true)
    } else {
      setTextWasEmpty(false)
    }
  }

  return (
    <li className="entry" key={entry.id}>
      <input type="checkbox"
             name="checked"
             checked={entry.checked}
             onChange={e => handleChange(e, entry)} /> 
      <input type="text"
             name="text"
             value={entry.text}
             onChange={e => handleChange(e, entry)} 
             onKeyUp={e => handleKeyUp(e, entry)} />
      <div className="entry-remove">
        <div className="add"
             onClick={() => dispatch(removeEntry(entry.id))}>
              <span className="material-icons">close</span>
        </div>
      </div>
    </li>  
  )
}

export default Entry