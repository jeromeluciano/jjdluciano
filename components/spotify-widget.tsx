import {
  Box,
  Button,
  Center,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { getNowPlaying } from "../services/spotify";
import useSWR from "swr";
import { fetcher as currentlyPlayingFetch } from "../fetchers/currently-playing";
import Image from "next/image";

export default function SpotifyWidget() {
  const iconColor = useColorModeValue("#34D399", "#00DE80");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const bgColor = useColorModeValue("blue.50", "rgb(39 39 42)");
  const spotifyIconBnW = useColorModeValue("black", "white");

  const { data: song, isLoading } = useSWR(
    "/api/currently-playing",
    currentlyPlayingFetch
  );

  if (isLoading || song.isPlaying == false) {
    return;
  }

  return (
    <HStack alignContent={"center"} justifyContent="center">
      <FaSpotify color={iconColor} size={16} />
      {song.isPlaying ? (
        <Popover placement="top" trigger="hover">
          <PopoverTrigger>
            <Text color={textColor} fontWeight="semibold" fontSize="xs">
              <Text className="spotify-link">
                Listening to Spotify
              </Text>
            </Text>
          </PopoverTrigger>
          <PopoverContent w="fit-content" px="4" py="3" bg={bgColor} borderRadius="md">
            <VStack alignItems="start" spacing={3}>
              <HStack alignItems="center" justifyContent="space-between" w="full">
                <Text fontSize="sm">Listening to Spotify</Text>
                <Box>
                  <FaSpotify color={iconColor} size={16} />
                </Box>
              </HStack>
              <HStack justifyItems="center">
                <Box>
                  <Image src={song.imageUrl.url} width={64} height={64} />
                 </Box>
                <VStack  alignItems="start" spacing={1}>
                  <Text fontSize="xs" fontWeight="semibold">{song.songName}</Text>
                  <Text fontSize="xs">by {song.artist.name}</Text>
                  <Text fontSize="xs">on {song.albumName}</Text>
                </VStack>
              </HStack>
              <Link href={song.songUrl} isExternal w="full">
                <Button w="full" fontSize="xs" leftIcon={<FaSpotify color={spotifyIconBnW} size={16} />}>Play on Spotify</Button>
              </Link>
            </VStack>
          </PopoverContent>
        </Popover>
      ) : (
        <Text color={textColor} fontWeight="semibold" fontSize="xs">
          Not playing - Spotify
        </Text>
      )}
    </HStack>
  );
}
