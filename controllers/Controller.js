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
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// controller for grabbing username by id
const getPlayList = async (req, res) => {
  try {
    const getUser = findById(req.body)
    await newUser.save()
    if (newUser) {
      return res.status(200).json({ newUser })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createUser,
  getPlayList
}
