import {createRoot} from 'react-dom/client';
import React, {useState} from 'react'
import './index.css'
import ListsPanel from './ListsPanel'
import Entries from './Entries'
import testData from './testData'

const App = () => {
  const [lists, setLists] = useState(testData.lists)
  const [entries, setEntries] = useState(testData.entries)
  const [selectedList, setSelectedList] = useState(0)

  const maxId = (arr) => {
    return arr.reduce((acc, current) => {
      if (current.id > acc) return current.id
      else return acc
    }, 0)
  }

  const count = (id) => {
    return entries.reduce((acc, current) => {
      return current.belongsTo === id ? acc + 1 : acc
    }, 0)
  }

  const addEntry = (entryText) => {
    setEntries(
      [...entries,
       {id: maxId(entries) + 1, belongsTo: selectedList, text: entryText}
      ]
    )
  }

  const updateEntry = (newEntry) => {
    setEntries(entries.map(entry => entry.id === newEntry.id ? newEntry : entry))
  }

  const removeEntry = (id) => setEntries(entries.filter(entry => entry.id !== id))

  const removeCheckedEntries = () => {
    setEntries(entries.filter(entry => !entry.checked))
  }

  const addList = (name) => {
    const newId = maxId(lists) + 1
    setLists([...lists, {id: newId, name: name}])
    setSelectedList(newId)
  }

  const removeList = (id) => {
    setEntries(entries.filter(entry => entry.belongsTo != id))
    const newLists = lists.filter(list => list.id != id)
    setLists(newLists)
    if (newLists.length > 0) setSelectedList(newLists[0].id)
  }

  const updateList = (newList) => {
    setLists(lists.map(list => list.id === newList.id ? newList : list))
  }

  const currentList = lists.filter(list => list.id === selectedList)[0]
    
  const currentEntries = entries.filter(entry => entry.belongsTo === selectedList)

  return (
    <div className="container">
      <ListsPanel lists={lists} 
                  setSelectedList={setSelectedList}
                  addList={addList} 
                  count={count} />
      <Entries list={currentList}
               entries={currentEntries}
               addEntry={addEntry}
               updateEntry={updateEntry}
               removeEntry={removeEntry}
               removeCheckedEntries={removeCheckedEntries}
               removeList={removeList}
               updateList={updateList} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App tab="home" />)