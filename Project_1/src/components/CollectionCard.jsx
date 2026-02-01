import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/CollectionSplices'

function CollectionCard({item}) {

  const dispatch = useDispatch()

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }

  return (
       <div className="w-[30vw] h-[50vh] relative overflow-hidden rounded">
      <Link to={item.links} target="_blank" className="h-full cursor-default">
        {item.type == "photo" ? (
          <img
            src={item.src}
            className="object-cover object-center w-full h-full"
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            src={item.videoSrc}
            autoPlay
            muted
            loop
            className="object-cover object-center w-full h-full"
          />
        ) : (
          ""
        )}
      </Link>

      <div
        id="bottom"
        className="flex items-center justify-between px-6 py-10 w-full absolute bottom-0"
      >
        <h2 className="text-sm font-semibold uppercase">{item.title}</h2>
        <button
        onClick={()=>{
            return removeFromCollection(item)
        }}
          className="bg-indigo-500 rounded px-3 py-2 font-medium cursor-pointer"
        >
          Removed
        </button>
      </div>
    </div>
   
  )
}

export default CollectionCard
