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
  keyframes
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { getNowPlaying } from "../services/spotify";
import useSWR from "swr";
import { fetcher as currentlyPlayingFetch } from "../fetchers/currently-playing";
import Image from "next/image";
import FeaturedCard from "./featured-card";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export default function SpotifyWidget() {
  const iconColor = useColorModeValue("#34D399", "#00DE80");
  const textColor = useColorModeValue("yellow.300", "yellow.50");
  const bgColor = useColorModeValue("blue.50", "rgb(39 39 42)");
  const spotifyIconBnW = useColorModeValue("black", "white");
  const spinAnimation = `${spin} infinite 2s linear`;

  const { data: song, isLoading } = useSWR(
    "/api/currently-playing",
    currentlyPlayingFetch
  );

  if (isLoading) {
    return;
  }

  return (
    <HStack alignContent={"center"} justifyContent="center" display={{sm: "none", md: "flex"}}>
      {song.isPlaying ? (
        <Popover placement="top" trigger="hover" >
          <PopoverTrigger>
            <Stack direction="row" bgColor="green.900" _hover={{ backgroundColor: "green.800" }} px={3} py={1.5} rounded={"xl"}>
              <Box animation={spinAnimation}>
                <FaSpotify color={iconColor} size={18} />
              </Box>
              <Text color={textColor} fontWeight="semibold" fontSize="xs">
                <Text>
                  Listening to Spotify
                </Text>
              </Text>
            </Stack>
          </PopoverTrigger>
          <PopoverContent w="fit-content" px="4" py="3" bg={"green.900"} borderRadius="15">
            <VStack alignItems="start" spacing={3}>
              <HStack alignItems="center" justifyContent="space-between" w="full">
                <Text fontSize="sm">Now Playing</Text>
                <Box>
                  <FaSpotify color={iconColor} size={18} />
                </Box>
              </HStack>
              <HStack justifyItems="center">
                <Box>
                  <Image src={song.imageUrl.url} width={64} height={64} alt="album cover"/>
                </Box>
                <VStack alignItems="start" spacing={1}>
                  <Text fontSize="xs" fontWeight="semibold">{song.songName}</Text>
                  <Text fontSize="xs">by {song.artist.name}</Text>
                  <Text fontSize="xs">on {song.albumName}</Text>
                </VStack>
              </HStack>
              <Link href={song.songUrl} isExternal w="full">
                <Button w="full" fontSize="xs" leftIcon={<FaSpotify color={spotifyIconBnW} size={18}/>}>Play on Spotify</Button>
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
