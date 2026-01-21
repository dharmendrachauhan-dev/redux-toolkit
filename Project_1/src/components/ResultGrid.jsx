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

function ResultGrid() {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query) return; // jab tak query nhi dega tab tak component render use effect mei kaa code execute nhi hoga

    const getData = async () => {
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
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading.....</h1>;

  return (
    <div className="text-white px-24 bg-slate-900 grid grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((item) => (
        <div key={item.id} className="bg-slate-900 rounded-lg overflow-hidden">
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
    </div>
  );
}

export default ResultGrid;
