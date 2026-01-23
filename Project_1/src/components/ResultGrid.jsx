import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi.js";
import { useEffect } from "react";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice.js";
import ResultCard from "./ResultCard.jsx";

function ResultGrid() {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query) return; // jab tak query nhi dega tab tak component render use effect mei kaa code execute nhi hoga

    const getData = async () => {
      dispatch(setLoading(true));

      try {
        let data = [];
        if (activeTab == "photos") {
          const response = await fetchPhotos(query);

          data = response.results.map((items) => ({
            id: items.id,
            type: "photo",
            title: items.alt_description,
            thumbnail: items.urls.small,
            src: items.urls.full,
            links: items.links.html
          }));
        }
        if (activeTab == "videos") {
          const response = await fetchVideos(query);

          data = response.videos.map((items) => ({
            id: items.id,
            type: "video",
            title: items.user.name || "video",
            thumbnail: items.image,
            videoSrc: items.video_files[0].link,
            links: items.url
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading.....</h1>;

  return (
    <div className="flex flex-wrap w-full justify-center gap-6 overflow-auto px-10">
      {false &&
        results.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 rounded-lg overflow-hidden"
          >
            {/* PHOTO */}
            {item.type === "photo" && (
              <img
                src={item.src}
                alt={item.title || "photo"}
                className="w-full h-52 object-cover"
              />
            )}

            {/* VIDEO */}
            {item.type === "video" && (
              <video
                src={item.videoSrc}
                controls
                className="w-full h-52 object-cover"
              />
            )}
          </div>
        ))}
      {/*Another way to comment*/}

      {results.map((items, idx)=>{
       return <div key={idx}>

        <ResultCard item={items}/>

        </div>
      })}

    </div>

  );
}

export default ResultGrid;
