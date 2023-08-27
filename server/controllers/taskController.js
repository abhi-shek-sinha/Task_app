const taskModel = require("../models/taskModel")

module.exports.getTask = async (req, res) => {
    const task = await taskModel.find()
    console.log("get request served");
    res.send(task);
}

// module.exports.getTaskbyid = async (req, res) => {

//     const task = await taskModel.findOne({ get_taskid: req.params._id })
//     console.log("get request served");
//     res.send(task);
// }

module.exports.saveTask = async (req, res) => {
    const { title, description, active } = req.body.payload;
    
    console.log('body...',req.body)
    taskModel
        .create({ title, description, active })
        .then((data) => {
            console.log("added succesfully");
            res.send(data)
        })

}

module.exports.updateTask = async (req, res) => {
    const { _id, title, description, active } = req.body;
    console.log('31..',req.body);

    taskModel
        .findByIdAndUpdate(_id, { title, description, active })
        .then(() => res.send("updated successfully"))
        .catch((err) => console.log(err))
}


module.exports.markAsComplete = async (req, res) => {
    const { _id, active } = req.body;
    console.log('31..',req.body);

    taskModel
        .findByIdAndUpdate(_id, { active })
        .then(() => res.send("updated successfully"))
        .catch((err) => console.log(err))
}

module.exports.deleteTask = async (req, res) => {
    const { _id } = req.body;

    taskModel
        .findByIdAndDelete(_id)
        .then(() => res.send("deleted successfully"))
        .catch((err) => console.log(err))
}