const { Schema } = require('mongoose')

const Song = new Schema(
  {
    song_name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Song
