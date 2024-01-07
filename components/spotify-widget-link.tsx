import {
  Box,
  Button,
  Center,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { getNowPlaying } from "../services/spotify";
import useSWR from "swr";
import { fetcher as currentlyPlayingFetch } from "../fetchers/currently-playing";
import Image from "next/image";
import useIconColor from "../hooks/useIconColor";

export default function SpotifyWidgetLink() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const bgColor = useColorModeValue("blue.50", "rgb(39 39 42)");
  const iconColor = useIconColor()


  const { data: song, isLoading } = useSWR(
    "/api/currently-playing",
    currentlyPlayingFetch
  );

  if (isLoading) {
    return;
  }

  return (
    <HStack alignContent={"center"} justifyContent="center" display={{ sm: "flex", md: "none" }}>
      {song.isPlaying ? (
        <Popover placement="top" trigger="hover">
          <PopoverTrigger>
            <Stack direction="row">
              <FaSpotify color={iconColor} size={18} />
            </Stack>
          </PopoverTrigger>
          <PopoverContent w="fit-content" px="4" py="3" bg={bgColor} borderRadius="md" mx={5}>
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
                <VStack alignItems="start" spacing={1}>
                  <Text fontSize="xs" fontWeight="semibold">{song.songName}</Text>
                  <Text fontSize="xs">by {song.artist.name}</Text>
                  <Text fontSize="xs">on {song.albumName}</Text>
                </VStack>
              </HStack>
              <Link href={song.songUrl} isExternal w="full">
                <Button w="full" fontSize="xs" leftIcon={<FaSpotify color={song.isPlaying ? "green.400":"green.100"} size={18} />}>Play on Spotify</Button>
              </Link>
            </VStack>
          </PopoverContent>
        </Popover>
      ) : (
        <FaSpotify color={iconColor} size={16} />
      )}
    </HStack>
  );
}
