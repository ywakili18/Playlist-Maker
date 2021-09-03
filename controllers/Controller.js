// Reqiure Models Here
const { User, Playlist, Song } = require('../models/index')
// logic for your routes go here

//controller for creating username post data
const createUser = async (req, res) => {
  console.log(req.body)
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
  console.log(req.body)
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
  console.log(req.body)
  try {
    const attachedUser = await User.findOne({ userName: req.params.userName })
    const newPlayList = await Playlist.create(req.body)
    let newLists = [...attachedUser.playLists, ...[newPlayList.id]]
    attachedUser.set({ playLists: newLists })
    await attachedUser.save()

    return res.status(201).json({
      newPlayList
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
// const createSong = async (req, res) => {
//   try {
//     const attachedPlaylist = await Playlist.findOne({
//       playlist_name: req.params.playlist_name
//     })
//     const newSongName = await Song.create(req.body)
//     let newSonglist = [...attachedPlaylist.song, ...[newSongName.id]]
//     attachedPlaylist.set({ song: newSonglist })
//     await attachedPlaylist.save()

//     return res.status(201).json({
//       newSonglist
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }
const createSong = async (req, res) => {
  console.log(req.body)
  try {
    const newSong = await Song.create(req.body.song_name)
    await newSong.save()
    if (newSong) {
      return res.status(200).json({ newSong })
    }
    return res.status(404).send('User not created')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//controller for creating
module.exports = {
  createUser,
  userByName,
  createPlaylist,
  createSong
}
