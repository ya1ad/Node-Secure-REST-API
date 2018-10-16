const mongo = require("mongoose");
const config = require("../../common/config/env.config");
mongo.connect(
  config.dbConnect,
  { useNewUrlParser: true }
);

const userSchema = new mongo.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  permissionLevel: Number
});

const User = mongo.model("Users", userSchema);

exports.createUser = userData => {
  const user = new User(userData);
  return user.save();
};

exports.findById = id => {
  return User.findById(id)
    .then(result => {
      result = result.toJSON();
      delete result._id;
      delete result.__v;
      return result;
    })
    .catch(err => {
      console.log(err);
    });
};

exports.patchUser = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true });
};

exports.removeById = id => {
  return User.findByIdAndDelete(id);
};
