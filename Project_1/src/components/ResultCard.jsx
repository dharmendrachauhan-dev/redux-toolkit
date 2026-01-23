import React from 'react'
import {Link} from 'react-router-dom'

function ResultCard({item}) {
 
  return (
    <div className='w-[15vw] h-[50vh] relative overflow-hidden rounded'>
          <Link to={item.links} target='_blank' className='h-full cursor-default'>
            {item.type == 'photo' ? <img src={item.src} className='object-cover object-center w-full h-full'  alt="" /> : ''}
          {item.type == 'video' ? <video  src={item.videoSrc} autoPlay muted loop className='object-cover object-center w-full h-full'/> : ''}  
          </Link>

      <div id='bottom' className='flex items-center gap-2 px-6 py-10 w-full absolute bottom-0'>
        <h2 className='text-sm font-semibold uppercase'>{item.title}</h2>
        <button className='bg-indigo-500 rounded px-3 py-2 font-medium'>Save</button>
      </div>
    </div>
  )
}

export default ResultCard
 