const { Schema } = require('mongoose')
const Playlist = require('./playlist')

const Song = new Schema(
  {
    songName: { type: String, required: true },
    userName: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = Song
