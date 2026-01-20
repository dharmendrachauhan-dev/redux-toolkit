import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi.js";
import { useEffect } from "react";
// import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice.js'

function ResultGrid() {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
      let data;
      if (activeTab == "photos") {
        const response = await fetchPhotos(query);
        data = response.results.map((items)=>({
            id:items.id,

            type:'photo',
            
            thumbnail:'',
            src:''
        }))
      }
      if (activeTab == "videos") {
        const response = await fetchVideos(query);
        data = response.videos;
      }
      console.log(data);
    };

    getData();
  }, [query, activeTab]);

  return (
    <div className="text-white">
      <button>GETDATA</button>
    </div>
  );
}

export default ResultGrid;
