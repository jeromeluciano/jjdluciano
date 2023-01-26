export interface SpotifyType {
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
    album: {
      images: { url: string, height: number, width: number }[],
      name: string
    }
  };
  is_playing: boolean;
}