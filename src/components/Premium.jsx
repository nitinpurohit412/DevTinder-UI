import axios from "axios";
import { BASE_URL } from "../utils/constant";

const Premium = () => {
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        memberShipType: type,
      },
      { withCredentials: true },
    );

    const {amount, keyId, currency,notes, orderId} = order.data

    const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits.
        currency: 'INR',
        name: 'Dev Tinder',
        description: 'Connect ot other developers.',
        order_id: orderId, // This is the order_id created in the backend
        prefill: {
          name: notes.firsName + " " + notes.lastName,
          email: notes.emailId,
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

    //* This will open your razorpay dashboard
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-black px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-950 shadow-xl shadow-white/[0.03]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 3 1.5 3.75L15 8.25l-3.75 1.5L9.75 13.5l-1.5-3.75L4.5 8.25l3.75-1.5L9.75 3Zm8.25 9 1.2 2.55L21.75 15.75l-2.55 1.2L18 19.5l-1.2-2.55-2.55-1.2 2.55-1.2L18 12Z"
              />
            </svg>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            DevTinder Premium
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your network,
            <span className="mt-2 block text-neutral-400">without limits.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Meet more developers, discover better opportunities, and build
            connections that move you forward.
          </p>
        </div>

        {/* Payment Plans */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Plus Plan */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-2xl hover:shadow-white/[0.03]">
            <div className="h-1 w-full bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800" />

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    For growing networks
                  </p>
                  <h2 className="mt-3 text-2xl font-bold">Plus</h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    More ways to find the right people.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-neutral-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3.75 14.25 9l5.25 2.25-5.25 2.25L12 18.75l-2.25-5.25L4.5 11.25 9.75 9 12 3.75Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 rounded-2xl border border-neutral-800 bg-black/60 p-5">
                <p className="text-sm text-neutral-500">Monthly subscription</p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    ₹199
                  </span>
                  <span className="text-sm text-neutral-500">/ month</span>
                </div>

                <p className="mt-2 text-xs text-neutral-500">
                  Flexible monthly billing
                </p>
              </div>

              {/* Features */}
              <div className="mt-7 flex-1">
                <p className="mb-4 text-sm font-semibold text-neutral-200">
                  Your Plus benefits
                </p>

                <ul className="space-y-4 text-sm text-neutral-400">
                  {[
                    "See who liked your profile",
                    "Advanced developer discovery filters",
                    "More connection requests",
                    "Profile boost credits",
                    "Find developers by skills and interests",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-xs text-white">
                        ✓
                      </span>
                      <span className="leading-5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment CTA */}
              <div className="mt-8 border-t border-neutral-800 pt-6">
                <button
                  type="button"
                  className="group/button flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-4 font-semibold text-white transition duration-200 hover:border-neutral-500 hover:bg-neutral-800 active:scale-[0.98]"
                  onClick={() => handleBuyClick("plus")}
                >
                  <span>Pay ₹199 / month</span>
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
                  Choose Plus and grow your developer network.
                </p>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-600 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-2xl hover:shadow-white/[0.05]">
            <div className="h-1 w-full bg-gradient-to-r from-neutral-700 via-neutral-300 to-neutral-700" />

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    For serious networking
                  </p>
                  <h2 className="mt-3 text-2xl font-bold">Pro</h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Maximum visibility. More opportunities.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900">
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

              {/* Price */}
              <div className="mt-8 rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-900 to-black p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-neutral-400">
                    Annual subscription
                  </p>
                  <span className="rounded-full border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                    Best value
                  </span>
                </div>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    ₹1,499
                  </span>
                  <span className="text-sm text-neutral-500">/ year</span>
                </div>

                <p className="mt-2 text-xs text-neutral-500">
                  Approximately ₹125 per month, billed yearly
                </p>
              </div>

              {/* Features */}
              <div className="mt-7 flex-1">
                <p className="mb-4 text-sm font-semibold text-neutral-200">
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
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-600 bg-neutral-800 text-xs text-white">
                        ✓
                      </span>
                      <span className="leading-5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment CTA */}
              <div className="mt-8 border-t border-neutral-800 pt-6">
                <button
                  type="button"
                  className="group/button flex w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-neutral-100 px-5 py-4 font-semibold text-black transition duration-200 hover:border-white hover:bg-white active:scale-[0.98]"
                  onClick={() => handleBuyClick("pro")}
                >
                  <span>Pay ₹1,499 / year</span>
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
                  Go Pro and unlock more networking possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-sm text-neutral-400">
            Build connections that move you forward.
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            All prices are displayed in INR. Payment processing must be
            connected separately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
