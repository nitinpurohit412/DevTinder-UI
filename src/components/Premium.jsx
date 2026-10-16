import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useState } from "react";

const Premium = () => {

    const [isUserPremium, setIsUserPremium] = useState(false)

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if(res.data.ispremium){
        setIsUserPremium(true)
    }


  };

  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        memberShipType: type,
      },
      { withCredentials: true },
    );

    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Dev Tinder",
      description: "Connect ot other developers.",
      order_id: orderId, // This is the order_id created in the backend
      prefill: {
        name: notes.firsName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handle : verifyPremiumUser,
    };

    //* This will open your razorpay dashboard
    const rzp = new window.Razorpay(options);
    rzp.open();
  };


return isUserPremium ? (
  <div className="flex min-h-[80vh] items-center justify-center bg-black px-4 py-16 text-white">
    <div className="w-full max-w-lg rounded-3xl border border-neutral-800 bg-neutral-950 p-8 text-center shadow-2xl shadow-white/[0.03] sm:p-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        DevTinder Premium
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">
        You're already Premium User.
      </h1>

      <p className="mt-3 text-sm leading-6 text-neutral-400">
        Your networking journey is already upgraded. Keep discovering
        developers and building meaningful connections.
      </p>

      <div className="mt-7 rounded-2xl border border-neutral-800 bg-black p-4">
        <p className="text-sm text-neutral-300">
          Premium membership
        </p>
        <p className="mt-1 text-xs text-neutral-500">
          Thanks for being part of DevTinder.
        </p>
      </div>
    </div>
  </div>
) : (
  <div className="relative min-h-screen overflow-hidden bg-black px-4 py-14 text-white sm:px-6 lg:px-8">

    {/* Background Decoration */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />
      <div className="absolute -left-40 top-[35%] h-72 w-72 rounded-full bg-neutral-800/[0.10] blur-[100px]" />
      <div className="absolute -right-40 top-[55%] h-72 w-72 rounded-full bg-neutral-700/[0.08] blur-[100px]" />
    </div>

    <div className="relative mx-auto max-w-6xl">

      {/* Hero */}
      <div className="mx-auto mb-14 max-w-2xl text-center">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-950 shadow-xl shadow-white/[0.04]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 3 1.5 3.75L15 8.25l-3.75 1.5L9.75 13.5l-1.5-3.75L4.5 8.25l3.75-1.5L9.75 3Zm8.25 9 1.2 2.55L21.75 15.75l-2.55 1.2L18 19.5l-1.2-2.55-2.55-1.2 2.55-1.2L18 12Z"
            />
          </svg>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          The DevTinder Upgrade
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Your next connection
          <span className="mt-2 block bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            could change everything.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
          Discover more developers, increase your visibility, and create
          more opportunities to connect with people who share your passion
          for technology.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
          <span className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
            Developer discovery
          </span>
          <span className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
            Meaningful connections
          </span>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 lg:grid-cols-2">

        {/* Plus Plan */}
        <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/90 transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-2xl hover:shadow-white/[0.03]">

          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />

          <div className="flex flex-1 flex-col p-6 sm:p-8">

            {/* Plan Heading */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  For growing networks
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Plus
                </h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-400">
                  Discover more people and expand your developer circle.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900 transition group-hover:border-neutral-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-neutral-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3.75 14.25 9l5.25 2.25-5.25 2.25L12 18.75l-2.25-5.25L4.5 11.25 9.75 9 12 3.75Z"
                  />
                </svg>
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-8 rounded-2xl border border-neutral-800 bg-black p-5 sm:p-6">
              <p className="text-sm font-medium text-neutral-400">
                Monthly plan
              </p>

              <div className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                  ₹199
                </span>
                <span className="text-sm text-neutral-500">
                  / month
                </span>
              </div>

              <p className="mt-3 text-xs text-neutral-500">
                Flexible monthly subscription
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 flex-1">
              <p className="mb-5 text-sm font-semibold text-neutral-200">
                What's included
              </p>

              <ul className="space-y-4 text-sm text-neutral-400">
                {[
                  "See who liked your profile",
                  "Advanced developer discovery filters",
                  "More connection requests",
                  "Profile boost credits",
                  "Discover developers by skills and interests",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-xs text-white">
                      ✓
                    </span>
                    <span className="leading-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment */}
            <div className="mt-8 border-t border-neutral-800 pt-6">
              <button
                type="button"
                className="group/button flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-4 text-sm font-semibold text-white transition duration-200 hover:border-neutral-500 hover:bg-neutral-800 active:scale-[0.98]"
                onClick={() => handleBuyClick("plus")}
              >
                <span>Get Plus · ₹199/month</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform group-hover/button:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              <p className="mt-3 text-center text-xs text-neutral-600">
                Start growing your network today.
              </p>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-600 bg-neutral-950/95 shadow-2xl shadow-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-white/[0.05]">

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="flex flex-1 flex-col p-6 sm:p-8">

            {/* Plan Heading */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  For serious networking
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Pro
                </h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-400">
                  Build your presence and make the most of your network.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 transition group-hover:border-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12 3 2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3Z"
                  />
                </svg>
              </div>
            </div>

            {/* Pricing */}
            <div className="relative mt-8 rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900 to-black p-5 sm:p-6">
              <span className="absolute right-4 top-4 rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                Best value
              </span>

              <p className="pr-24 text-sm font-medium text-neutral-400">
                Annual plan
              </p>

              <div className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                  ₹1,499
                </span>
                <span className="text-sm text-neutral-500">
                  / year
                </span>
              </div>

              <p className="mt-3 text-xs text-neutral-500">
                Approximately ₹125/month, billed yearly
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 flex-1">
              <p className="mb-5 text-sm font-semibold text-neutral-200">
                Everything in Plus, and
              </p>

              <ul className="space-y-4 text-sm text-neutral-400">
                {[
                  "Priority profile visibility",
                  "Unlimited profile boosts",
                  "Weekly networking insights",
                  "Exclusive Pro profile badge",
                  "Advanced developer discovery",
                  "Priority access to new features",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-600 bg-neutral-800 text-xs text-white">
                      ✓
                    </span>
                    <span className="leading-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment */}
            <div className="mt-8 border-t border-neutral-800 pt-6">
              <button
                type="button"
                className="group/button flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-500 bg-neutral-200 px-5 py-4 text-sm font-bold text-black transition duration-200 hover:border-white hover:bg-white active:scale-[0.98]"
                onClick={() => handleBuyClick("pro")}
              >
                <span>Get Pro · ₹1,499/year</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform group-hover/button:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              <p className="mt-3 text-center text-xs text-neutral-600">
                Invest in your developer network.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-neutral-900 pt-7 text-center">
        <p className="text-sm font-medium text-neutral-300">
          Better connections start here.
        </p>

        <p className="mt-2 text-xs leading-5 text-neutral-600">
          All prices are displayed in INR. Premium features require an active
          subscription and backend verification.
        </p>
      </div>
    </div>
  </div>
);

};

export default Premium;
