import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeRequest(_id))
    } catch (err) {}
  };

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data?.data || []));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 border-b border-neutral-800 pb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Your Network
          </p>

          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Connection Requests
              </h1>

              <p className="mt-3 text-sm text-neutral-400 sm:text-base">
                Meet developers who want to connect with you.
              </p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {requests.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-16 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-2xl">
              👥
            </div>

            <h2 className="text-xl font-semibold text-white">
              No pending requests
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-neutral-500">
              You're all caught up. New connection requests will show up here.
            </p>
          </div>
        ) : (
          /* Request Cards */
          <div className="space-y-4">
            {requests.map((request) => {
              const { firstName, lastName, age, gender, about, photoUrl } =
                request.fromUserId || {};

              return (
                <div
                  key={request._id}
                  className="group flex flex-col gap-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition-colors duration-200 hover:border-neutral-700 sm:flex-row sm:items-start sm:p-6"
                >
                  {/* Profile Photo */}
                  <div className="shrink-0 self-center sm:self-start">
                    <img
                      src={
                        photoUrl ||
                        "https://placehold.co/160x160/262626/FFFFFF?text=User"
                      }
                      alt={
                        `${firstName || ""} ${lastName || ""}`.trim() ||
                        "Profile photo"
                      }
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/160x160/262626/FFFFFF?text=User";
                      }}
                      className="h-24 w-24 rounded-2xl border border-neutral-800 bg-neutral-900 object-cover sm:h-28 sm:w-28"
                    />
                  </div>

                  {/* User Details */}
                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <h2 className="break-words text-xl font-semibold tracking-tight text-white">
                      {[firstName, lastName].filter(Boolean).join(" ") ||
                        "Unknown User"}
                    </h2>

                    {((age != null && age !== "") || gender) && (
                      <p className="mt-1 text-sm capitalize text-neutral-500">
                        {age != null && age !== "" ? `${age} years old` : ""}
                        {age != null && age !== "" && gender ? " · " : ""}
                        {gender || ""}
                      </p>
                    )}

                    <div className="mt-4">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        About
                      </p>

                      <p className="break-words text-sm leading-6 text-neutral-400">
                        {about?.trim() || "This user hasn't added a bio yet."}
                      </p>
                    </div>

                    {/* Request Status */}
                    <div className="mt-4 flex justify-center sm:justify-start">
                      <span className="inline-flex items-center gap-2 rounded-full border border-green-800/50 bg-green-950/30 px-3 py-1.5 text-xs font-medium text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        Wants to connect
                      </span>
                    </div>
                  </div>

                  {/* Accept and Reject Buttons */}
                  <div className="flex w-full shrink-0 flex-col gap-3 sm:w-32 sm:self-start">
                    <button
                      className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-500"
                      onClick={() => reviewRequest("accepted", request._id)}
                    >
                      Accept
                    </button>

                    <button
                      className="rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-neutral-300 transition-colors hover:border-red-800 hover:bg-red-950/40 hover:text-red-400"
                      onClick={() => reviewRequest("rejected", request._id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
