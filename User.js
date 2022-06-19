const { model, Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
//   profile of type Object
profile:{
    bio:{type:String},
    profileImage:{type:String},
},
trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
});

UserSchema.plugin(uniqueValidator);
module.exports = model("User", UserSchema);