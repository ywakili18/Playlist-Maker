const { Schema } = require('mongoose')

const Playlist = new Schema(
  {
    playlist_name: { type: String, required: true },
    songs: [{ type: Schema.Types.ObjectId, ref: 'songs' }]
  },
  { timestamps: true }
)

module.exports = Playlist
