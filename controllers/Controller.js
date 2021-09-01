// Reqiure Models Here
const { User, Playlist, Song } = require('../models/index')
// logic for your routes go here

//controller for creating username post data
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

// controller for getting username by user name
const userByName = async (req, res) => {
  try {
    const { userName } = req.params
    console.log(userName)
    const userByName = await User.find({ userName: userName })
    if (userByName) {
      return res.status(200).json({ userByName })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// controller for creating playlist post data
const createPlaylist = async (req, res) => {
  try {
    const attachedUser = await User.findOne({ userName: req.params.userName })
    const newPlayList = await Playlist.create(req.body)
    let newLists = [...attachedUser.playLists, ...[newPlayList.id]]
    attachedUser.set({ playLists: newLists })
    await attachedUser.save()
    console.log(attachedUser, 'this is log of attacheduser')

    return res.status(201).json({
      newPlayList
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// getting playlist by id
const getPlaylistById = async (req, res) => {
  try {
    const { id } = req.params
    const playList = await Playlist.findById(id)
    if (playList) {
      return res.status(200).json({ playList })
    }
    return res
      .status(404)
      .send('Play list with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createUser,
  userByName,
  createPlaylist,
  getPlaylistById
}
