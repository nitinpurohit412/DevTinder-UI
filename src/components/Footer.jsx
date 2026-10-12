const Footer = () => {
  return (
   <footer className="border-t border-neutral-800 bg-black px-4 py-6 text-neutral-400 sm:px-8">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

    {/* Branding */}
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-green-800/50 bg-green-950/40 text-lg font-bold text-green-400">
        D
      </div>

      <div>
        <h2 className="text-base font-bold tracking-tight text-white">
          Dev<span className="text-green-400">Tinder</span>
        </h2>
        <p className="text-xs text-neutral-500">
          Connect. Collaborate. Grow.
        </p>
      </div>
    </div>

    {/* Copyright */}
    <p className="text-center text-xs text-neutral-500 sm:text-sm">
      © {new Date().getFullYear()} DevTinder. All rights reserved.
    </p>

    {/* Status */}
    <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-green-400" />
      <span className="text-xs font-medium text-neutral-400">
        Built for developers
      </span>
    </div>

  </div>
</footer>
  );
};

export default Footer;
