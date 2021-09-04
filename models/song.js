const { Schema } = require('mongoose')
const User = require('./user')

const Song = new Schema(
  {
    songName: { type: String, required: true },
    userName: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true }
)

module.exports = Song
