import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [payload, setPayload] = useState({ title: '', description: '', active: true })
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  const [color, setColor] = useState();


  useEffect(() => {
    getAllToDo(setToDo)
  }, [])


  const updateMode = (item) => {
    setPayload({ ...item, active: true })
    console.log('20...', payload);
    setIsUpdating(true)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>Task App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add Title..."
            value={payload.title}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Add Description..."
            value={payload.description}
            onChange={(e) => setPayload({ ...payload, description: e.target.value })}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, setToDo, payload, setIsUpdating ,setPayload )
              : () => addToDo(payload, setToDo , setPayload )}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">
          {toDo.map((item) => <ToDo
            key={item._id}
            color={!item.active ? "#cceb34" : "#f4f4f4"}
            setColor={setColor}
            todoData={item}
            toDo={toDo}
            setToDo={setToDo}
            updateMode={() => updateMode(item)}
            deleteToDo={() => deleteToDo(item._id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;
