const mongoose = require('mongoose')
const UserSchema = require('./user.js')
const PlaylistSchema = require('./playlist.js')
const SongSchema = require('./user.js')

const User = mongoose.model('users', UserSchema)
const Playlist = mongoose.model('playlists', PlaylistSchema)
const Song = mongoose.model('songs', SongSchema)

module.exports = {
  User,
  Playlist,
  Song
}
