const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, about, photoUrl } = user;
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 text-white shadow-xl transition duration-300 hover:border-neutral-700">
      {/* Profile Photo */}
      <div className="relative">
        <img
          src={
            photoUrl ||
            "https://placehold.co/600x400/171717/ffffff?text=Profile"
          }
          alt={`${firstName || ""} ${lastName || ""}`}
          className="h-80 w-full bg-neutral-900 object-cover"
        />

        {/* Photo Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* User Details */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-300">
            Developer Profile
          </p>

          <h2 className="text-2xl font-bold tracking-tight">
            {[firstName, lastName].filter(Boolean).join(" ") || "Unknown User"}
            {age !== "" && age != null && (
              <span className="ml-2 font-normal text-neutral-300">{age}</span>
            )}
          </h2>

          {gender && (
            <p className="mt-1 text-sm capitalize text-neutral-300">{gender}</p>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="p-5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          About
        </h3>

        <p className="mt-3 min-h-12 whitespace-pre-wrap break-words text-sm leading-6 text-neutral-300">
          {about?.trim() || "This user hasn't added a bio yet."}
        </p>

        <div className="my-5 border-t border-neutral-800" />

        {/* Action Buttons - UI only */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="btn h-11 rounded-xl border border-neutral-700 bg-neutral-900 text-sm font-semibold text-neutral-200 shadow-none hover:border-neutral-500 hover:bg-neutral-800"
          >
            Ignore
          </button>

          <button
            type="button"
            className="btn h-11 rounded-xl border border-blue-600 bg-blue-600 text-sm font-semibold text-white shadow-none hover:border-blue-500 hover:bg-blue-500"
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
