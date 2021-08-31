// Reqiure Models Here
const { User, Playlist, Song } = require('../models/index')
// logic for your routes go here
const GetExample = async (req, res) => {
  res.send({ msg: `This is a ${req.method} Example` })
}
const PostExample = async (req, res) => {
  res.send({ msg: `This is a ${req.method} Example`, data: req.body || [] })
}
const DeleteExample = async (req, res) => {
  res.send({ msg: `${req.method} Example` })
}

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

module.exports = {
  GetExample,
  PostExample,
  DeleteExample,
  createUser
}
