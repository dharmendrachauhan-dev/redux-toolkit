import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/CollectionSplices";

function CollectionPages() {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAllItems = () => {
    dispatch(clearCollection());
  };

  return (
    <div>
      <div className="flex justify-between px-12 pt-4 items-center">
        <h2 className="text-xl font-semibold">
          {collection.length > 0 ? "Your Collection" : "Collection Empty"}
        </h2>
        {collection.length > 0 && (
          <button
            onClick={() => {
              clearAllItems();
            }}
            className="bg-red-700 px-4 py-2 rounded hover:bg-red-500 transition-all cursor-pointer"
          >
            Clear All Collection
          </button>
        )}
      </div>
      <div className="flex mt-3 flex-wrap w-full justify-center gap-6 overflow-auto px-10">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CollectionPages;
