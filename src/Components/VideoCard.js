import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import VideoLength from './VideoLength'
const VideoCard = ({ video }) => {
 
  return <Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
        <img className="h-full w-full object-cover"
          src={video?.thumbnails?.[0]?.url} />
        {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
      </div>
    <div className="flex text-white mt-3">
<div className="flex item-start">
  <div className="flex h-9 w-9 rounded-full overflow-hidden">
    <img className="h-full w-full object-cover" src={video?.author?.avatar[0]?.url}  alt="" />
  </div>
</div>
<div className="flex flex-col ml-2 overflow-hidden relative">
  
  <span className='text-[0.6rem] h-[4rem] overflow-hidden line-clamp-2 flex-row'>
    {video?.title}
    <div className="flex gap-2">
   <span> {video?.author?.badges[0]?.type==='VERIFIED_CHANNEL'&&(<BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />)}</span>
    <span className='font-bold'>  {video?.author?.title}</span>
    </div>
    <span className=''>{`${abbreviateNumber(video?.stats?.views,2)}`} views</span>
   <span className='ml-2'>
    {video?.publishedTimeText}
    </span> 
  </span>
  
</div>
    </div>
    
    </div>
  </Link>
}

export default VideoCard 