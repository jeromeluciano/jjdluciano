import Image from 'next/image';
import {Artist} from '../typings'

type FollowedArtistProps = {
  item: Artist
}
export default function FollowedArtist({ item }: FollowedArtistProps) {
  const formatter = new Intl.NumberFormat('en-GB', { 
    notation: "compact", 
    compactDisplay: "short" 
  })

  return (
    <div className='flex space-x-4 item-center'>
      <div className='flex item-center justify-center'>
        <Image className='rounded-xl' src={item.images[0].url} width={80} height={80} />
      </div>
      <div className='flex flex-col justify-center space-y-2'>
        <a href={item.external_urls.spotify} className='text-sm font-bold underline hover:decoration-yellow-50 decoration-yellow-50/50 underline-offset-4 transition-all duration-1000'>{item.name}</a>
        <p className='text-sm'>{formatter.format(item.followers.total)} followers</p>
      </div>
    </div>
  );
}
