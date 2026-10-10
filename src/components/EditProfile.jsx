import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [showToast, setShowToast] = useState(false)
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm text-neutral-500">ACCOUNT SETTINGS</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Your Profile
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Manage your personal information and preview your profile.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5">
          {/* Edit Profile - Left */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 lg:col-span-3">
            <div className="border-b border-neutral-800 px-6 py-5">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <p className="mt-1 text-sm text-neutral-400">
                Update your details below.
              </p>
            </div>

            <div className="space-y-5 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm text-neutral-300">
                    First Name
                  </legend>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input h-12 w-full rounded-lg border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm text-neutral-300">
                    Last Name
                  </legend>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input h-12 w-full rounded-lg border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm text-neutral-300">
                    PhotoUrl
                  </legend>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="input h-12 w-full rounded-lg border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
                  />
                </fieldset>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm text-neutral-300">
                    Age
                  </legend>
                  <input
                    type="number"
                    min="18"
                    placeholder="Your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input h-12 w-full rounded-lg border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm text-neutral-300">
                    Gender
                  </legend>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="select h-12 w-full rounded-lg border-neutral-700 bg-neutral-900 text-white focus:border-neutral-500 focus:outline-none"
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </fieldset>
              </div>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm text-neutral-300">
                  About
                </legend>
                <textarea
                  placeholder="Write a little about yourself..."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  rows={5}
                  maxLength={300}
                  className="textarea min-h-32 w-full resize-y rounded-lg border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none"
                />
                <p className="text-right text-xs text-neutral-500">
                  {about?.length ?? 0}/300 characters
                </p>
              </fieldset>

              {error && (
                <p className="rounded-lg border border-red-900 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="button"
                className="btn h-12 w-full rounded-lg border-blue-600 bg-blue-600 text-white shadow-none hover:border-blue-500 hover:bg-blue-500"
                onClick={saveProfile}
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* User Card Preview - Right */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Profile Preview</h2>
              <p className="mt-1 text-sm text-neutral-400">
                This is how your profile looks.
              </p>
            </div>

            {/* Replace UserCard with your actual component and props */}
            <UserCard
              user={{
                firstName,
                lastName,
                age,
                gender,
                about,
                photoUrl,
              }}
            />

            <p className="mt-4 text-center text-xs text-neutral-500">
              Your preview updates as you edit your details.
            </p>
          </div>
        </div>
      </div>
     {showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div>}
    </div>
  );
};

export default EditProfile;
