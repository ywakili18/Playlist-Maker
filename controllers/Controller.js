// Reqiure Models Here
const { User, Playlist, Song } = require('../models/index')
// logic for your routes go here

//controller for taking username input and creating document
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    await newUser.save()
    if (newUser) {
      return res.status(200).json({ newUser })
    }
    return res.status(404).send('User not created')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const userByName = async (req, res) => {
  try {
    const { userName } = req.params
    const userByName = await User.find(req.params)
    if (userByName) {
      return res.status(200).json({ userName })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createUser,
  userByName
}
