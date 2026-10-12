import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { useEffect } from "react";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-black px-4 text-white">
        <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-14 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 text-3xl">
            👥
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Your Network
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            No connections yet
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-400">
            Your network is just getting started. Discover developers, send
            connection requests, and build meaningful connections.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-800/50 bg-green-950/30 px-4 py-2 text-sm font-medium text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Your next connection awaits
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 border-b border-neutral-800 pb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Your Network
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Connections
          </h1>

          <p className="mt-3 text-sm text-neutral-400 sm:text-base">
            All the people you're connected with, in one place.
          </p>
        </div>

        {/* Empty State */}
        {connections.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 px-6 py-16 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-2xl text-neutral-400">
              👥
            </div>

            <h2 className="text-lg font-semibold text-white">
              No connections yet
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Your connections will appear here when you connect with people.
            </p>
          </div>
        ) : (
          /* Connection Cards */
          <div className="space-y-4">
            {connections.map((connection) => {
              const { _id, firstName, lastName, age, gender, about, photoUrl } =
                connection;

              return (
                <div
                  key={_id}
                  className="group flex flex-col gap-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition duration-200 hover:border-neutral-700 sm:flex-row sm:items-center sm:p-6"
                >
                  {/* Profile Photo */}
                  <div className="shrink-0">
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

                    {(age || gender) && (
                      <p className="mt-1 text-sm capitalize text-neutral-500">
                        {age ? `${age} years old` : ""}
                        {age && gender ? " · " : ""}
                        {gender || ""}
                      </p>
                    )}

                    <p className="mt-3 break-words text-sm leading-6 text-neutral-400">
                      {about?.trim() || "This user hasn't added a bio yet."}
                    </p>
                  </div>

                  {/* Connection Status */}
                  <div className="shrink-0 self-center sm:self-start">
                    <span className="inline-flex items-center gap-2 rounded-full border border-green-800/50 bg-green-950/50 px-3 py-2 text-xs font-medium text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                      Connected
                    </span>
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

export default Connections;
