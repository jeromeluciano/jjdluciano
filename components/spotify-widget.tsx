import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

interface SpotifyType {
  item: {
    name: string;
    artists: {
      external_urls: string;
      href: string;
      id: string;
      name: string;
      type: string;
    }[];
    external_urls: {
      spotify: string
    };
  };
  is_playing: boolean;
}

export default function SpotifyWidget() {
  const iconColor = useColorModeValue("#34D399", "#00DE80");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const [spotifyData, setSpotifyData] = useState<SpotifyType | null>(null);

  const getSpotifyCurrentPlaying = async () => {
    const data: SpotifyType = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_KEY}`,
        },
      }
    ).then((res) => res.json());

    setSpotifyData(data);
  };

  useEffect(() => {
    getSpotifyCurrentPlaying();
  }, []);

  if (!spotifyData) {
    return;
  }

  return (
    <HStack alignContent={"center"} justifyContent="center">
      <FaSpotify color={iconColor} size={16} />
      <Text color={textColor} fontWeight="semibold" fontSize="xs">
        {spotifyData.is_playing
          ? <a href={spotifyData.item.external_urls.spotify} className="spotify-link">{`Listening to ${spotifyData.item.name} - ${spotifyData.item.artists[0].name}`}</a>
          : "Not playing - Spotify"}
      </Text>
    </HStack>
  );
}
