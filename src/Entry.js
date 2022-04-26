import React, {useState} from 'react'

const Entry = (props) => {
  const [textWasEmpty, setTextWasEmpty] = useState(false)

  const handleChange = (e, entry) => {
    if (e.target.name === "checked") {
      props.updateEntry({...entry, checked: !entry.checked})
    } else {
      props.updateEntry({...entry, [e.target.name]: e.target.value})
    }
  }

  const handleKeyUp = (e, entry) => {
    if (e.target.value === "") {
      if (textWasEmpty && (e.keyCode === 8)) props.removeEntry(entry.id)
      else setTextWasEmpty(true)
    } else {
      setTextWasEmpty(false)
    }
  }

  return (
    <li className="entry" key={props.entry.id}>
      <input type="checkbox"
             name="checked"
             checked={props.entry.checked}
             onChange={e => handleChange(e, props.entry)} /> 
      <input type="text"
             name="text"
             value={props.entry.text}
             onChange={e => handleChange(e, props.entry)} 
             onKeyUp={e => handleKeyUp(e, props.entry)} />
      <div className="entry-remove">
        <div className="add"
             onClick={() => props.removeEntry(props.entry.id)}>
              <span className="material-icons">close</span>
        </div>
      </div>
    </li>  
  )
}

export default Entry