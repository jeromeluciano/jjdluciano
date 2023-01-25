import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { getNowPlaying } from "../services/spotify";
import useSWR from 'swr';
import { fetcher as currentlyPlayingFetch } from "../fetchers/currently-playing";


export default function SpotifyWidget() {
  const iconColor = useColorModeValue("#34D399", "#00DE80");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const { data: song, isLoading } = useSWR('/api/currently-playing', currentlyPlayingFetch)

  if (isLoading) {
    return;
  }

  return (
    <HStack alignContent={"center"} justifyContent="center">
      <FaSpotify color={iconColor} size={16} />
      <Text color={textColor} fontWeight="semibold" fontSize="xs">
        {song.isPlaying
          ? <a href={song.songUrl} className="spotify-link">{song.songNameWithArtist}</a>
          : "Not playing - Spotify"}
      </Text>
    </HStack>
  );
}
