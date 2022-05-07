import {useState} from "react"

import ListsPanel from "./ListsPanel"
import Entries from "./Entries"

const App = () => {
  const [selectedList, setSelectedList] = useState(0)

  return (
    <div className="container">
      <ListsPanel setSelectedList={setSelectedList} />
      <Entries list={selectedList} />
    </div>
  )
}

export default App