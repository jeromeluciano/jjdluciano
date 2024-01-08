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

type Image = {
  url: string;
  width: number;
  height: number;
}

type ArtistMeta = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export type Track = {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: ArtistMeta[]
  },
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  name: string;
  popularity: number;
}

export type RecentlyPlayedTrackType = {
  items: Track[];
  href: string;
  limit: number;
  next: string;
  cursors: {
    after: string;
    before: string;
  };
  total: number;
}


export type FollowedArtistType = {
  artists: {
    href: string;
    limit: number;
    next: string;
    cursor: {
      after: string;
      before: string;
    };
    total: number;
    items: Artist[];
  }
}
