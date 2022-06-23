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
    select: false,
  },
  //   profile of type Object
  profile: {
    bio: { type: String, default: "this is my bio" },
    profileImage: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg",
    },
  },
  trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
});

UserSchema.plugin(uniqueValidator);
module.exports = model("User", UserSchema);
