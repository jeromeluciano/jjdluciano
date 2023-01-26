import { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../services/spotify";
import { SpotifyType } from "../../typings";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  if (response.status == 204 || response.status > 400) {
    return res.status(200).json({
      isPlaying: false
    });
  }
  const currentSongPlaying: SpotifyType = await response.json();

  if (currentSongPlaying.item == null) {
    return res.status(200).json({
      isPlaying: false
    })
  }

  const isPlaying = currentSongPlaying.is_playing;
  const songNameWithArtist = `${currentSongPlaying.item.name} - ${currentSongPlaying.item.artists[0].name}`;
  const songUrl = currentSongPlaying.item.external_urls.spotify;
  const imageUrl = currentSongPlaying.item.album.images[2]
  const albumName = currentSongPlaying.item.album.name;

  return res
          .status(200)
          .setHeader('cache-control', 'public, s-maxage=60, stale-while-revalidate=30')
          .json({
            isPlaying,
            songNameWithArtist,
            imageUrl,
            songUrl,
            songName: currentSongPlaying.item.name,
            artist: currentSongPlaying.item.artists[0],
            albumName
          });
}
