const db = require('../db')
const { Playlist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // rap playlist
  const rap = await Playlist.find({ name: 'Rap' })
  //80s playlist
  const eighties = await Playlist.find({ name: '80s' })

  const songs = [
    {
      // rap tracks
      tracks: [
        'Flashing Lights',
        'It Was a Good Day',
        'I Wonder',
        'Ms.Jackson',
        'Shook Ones, Part II'
      ],
      playlist_id: rap[0]._id
    },
    {
      // 80s tracks
      tracks: [
        'Private Eyes',
        'Wait for Me',
        'Eye of the Tiger',
        'Billie Jean',
        'I Cant Go for That (No Can Do)'
      ],
      playlist_id: eighties[0]._id
    }
  ]

  await Book.insertMany(songs)
  console.log('Created songs with playlists!')
}
const run = async () => {
  await main()
  db.close()
}

run()
