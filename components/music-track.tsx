import NextImage from "next/image"
import { Image } from '@chakra-ui/react'
import { Track } from "../typings"

type MusicTrackProps = {
  track: Track
}

export default function MusicTrack({ track }: MusicTrackProps) {
  const artistName = track.artists.map(artist => artist.name).join(', ')
  return (
    <div className="flex space-x-4 items-center">
      <div className="flex items-center">
        <NextImage className="rounded-xl" src={track.album.images[0].url} width={80} height={80}/>
      </div>
      <div className="flex flex-col space-y-1">
        <a href={track.external_urls.spotify} className="text-sm font-bold hover:decoration-yellow-50 underline underline-offset-4 transition-all duration-1000 decoration-yellow-50/50 text-yellow-50/90">{track.name}</a>
        <p className="text-sm text-yellow-50/80">{artistName}</p>
        <p className="text-sm text-yellow-50/80">{track.album.name}</p>
      </div>
    </div>
  )
}
