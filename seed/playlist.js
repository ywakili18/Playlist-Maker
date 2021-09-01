const db = require('../db')
const Playlist = require('../models/playlist.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // rap playlist
  // const rap = await Playlist.find({ name: 'Rap' })
  // //80s playlist
  // const eighties = await Playlist.find({ name: '80s' })

  const playlist = [
    {
      // rap tracks
      tracks: [
        {
          genre: 'rap',
          title: 'Flashing Lights',
          genre: 'rap',
          title: 'It Was a Good Day',
          genre: 'rap',
          title: 'I Wonder',
          genre: 'rap',
          title: 'Ms.Jackson',
          genre: 'rap',
          title: 'Shook Ones, Part II'
        }
      ]
      // playlist_id: rap[0]._id
    }
    // ,
    // {
    //   // 80s tracks
    //   tracks: [
    //     'Private Eyes',
    //     'Wait for Me',
    //     'Eye of the Tiger',
    //     'Billie Jean',
    //     'I Cant Go for That (No Can Do)'
    //   ]
    //   // playlist_id: eighties[0]._id
    // }
  ]

  await playlist.insertMany(songs)
  console.log('Created songs with playlists!')
}
const run = async () => {
  await main()
  db.close()
}

run()
