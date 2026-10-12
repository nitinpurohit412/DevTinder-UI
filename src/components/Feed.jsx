import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-black px-4 text-white">
        <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-14 text-center shadow-lg">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-3xl">
            👥
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Your Network
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            No new developers
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-400">
            You've explored all available profiles for now. Check back later to
            discover new people and make meaningful connections.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-800/50 bg-green-950/30 px-4 py-2 text-sm font-medium text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            You're all caught up
          </div>
        </div>
      </div>
    );

 
return (
  feed && (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900 px-4 py-8">
      <UserCard user={feed[0]} />
    </div>
  )
);

};

export default Feed;
