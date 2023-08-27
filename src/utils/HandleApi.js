import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
        .get(`${baseUrl}/all`)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (payload, setToDo ,setPayload ) => {

    axios
        .post(`${baseUrl}/save`, { payload })
        .then((data) => {
            console.log(data);
            setPayload({title: "", description :"" , active : true  })
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (text, setToDo, payload, setIsUpdating ,setPayload ) => {
    console.log('28....', payload)

    axios
        .post(`${baseUrl}/update`, payload)
        .then((data) => {
            // setText("")
            setPayload({title: "", description :""  , active : true })
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}
const markAsComplete = (setToDo,payload) => {
    console.log('28....', payload)

    axios
        .post(`${baseUrl}/markAsComplete`, payload)
        .then((data) => {
            // setText("")
            // setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}
const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo, markAsComplete }