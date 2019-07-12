//emily to build post route to save todo app on Planning page. Must be associated with user.


const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  todo: {
    type: String,
    require: true,
  },
});


module.exports=mongoose.model("todos",TodoSchema);