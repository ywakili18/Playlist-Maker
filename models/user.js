const { Schema } = require('mongoose')

const User = new Schema(
  {
    userName: { type: String, required: true, unique: true }
    // playLists: [{ type: Schema.Types.ObjectId, ref: 'playLists' }]
  },
  { timestamps: true }
)

module.exports = User
