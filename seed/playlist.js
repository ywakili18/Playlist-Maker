const db = require('../db')
const { Playlist, Song } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // rap playlist
  const rap = await Playlist.find({ name: 'Rap' })
  //80s playlist
  const eighties = await Publisher.find({ name: '80s' })

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
      publisher_id: rap[0]._id
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
      publisher_id: eighties[0]._id
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
