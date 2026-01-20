import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

function Tabs() {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();

  const activeTab = useSelector(
    (state) => state.search.activeTab
  );

  const handleDispatch = (elem) => {
    dispatch(setActiveTabs(elem));
  };

  return (
    <div className="flex text-white gap-5 justify-around p-10">
      {tabs.map((elem) => (
        <button
          key={elem}
          className={`${
            activeTab === elem ? "bg-blue-700" : "bg-gray-600"
          } cursor-pointer p-4 active:scale-95 rounded-xl uppercase`}
          onClick={() => handleDispatch(elem)}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
