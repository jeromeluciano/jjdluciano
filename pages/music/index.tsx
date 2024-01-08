import FollowedArtist from "../../components/followed-artist";
import Layout from "../../components/layouts/main";
import MusicTrack from "../../components/music-track";
import Section from "../../components/section";
import { getFollowedArtists, getTopTracks } from "../../services/spotify";
import { FollowedArtistType, RecentlyPlayedTrackType } from "../../typings";




export default function MusicPage({ recentlyPlayedItems, followedArtistItems }) {


  return (
    <Layout>
      <Section delay={0.6} className="mb-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="font-bold text-yellow-50 mt-4 mb-4">Recently Played Tracks</h1>

            <div className="flex flex-col space-y-6">
              {recentlyPlayedItems.map((item, index) => <MusicTrack track={item.track} key={index} />)}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-yellow-50 mt-4 mb-4">Followed Artists</h1>

            <div className="flex flex-col space-y-6">
              {followedArtistItems.map((item, index) => <FollowedArtist item={item} key={index} />)}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const recentlyPlayedRequest = await getTopTracks();
  const followedArtistRequest = await getFollowedArtists();


  const followedArtist: FollowedArtistType = await followedArtistRequest.json();
  const recentlyPlayedTracks: RecentlyPlayedTrackType = await recentlyPlayedRequest.json();

  return {
    props: { recentlyPlayedItems: recentlyPlayedTracks.items, followedArtistItems: followedArtist.artists.items }
  }
};
