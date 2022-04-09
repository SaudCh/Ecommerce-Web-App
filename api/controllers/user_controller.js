const userschema = require("../models/userschema");

const register = async (req, res) => {
  const { name, password, email } = req.body;
  const newUser = new userschema({
    name: name,
    password: password,
    email: email
  });

  try {
    await newUser.save();
  } catch (err) {
    res.json({ error: "Signup Failed", errorDetail: err });
  }

  res.status(201).json({ message: "Signup Success" });
};

const login = async (req, res) => {
  //console.log("hello")
  let user;

  try {
    user = await userschema.findOne({ email: req.params.email });
  } catch (err) {
    console.log(err);
  }
  //console.log(user)
  if (!user || req.params.password != user.password) {
    res.status(401).json({ error: "Invalid Email or password" })
    return
  } else {
    res.json(user);
  }


};

exports.register = register;
exports.login = login;
