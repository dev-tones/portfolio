"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

const LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SideNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between bg-neutral-950/80 backdrop-blur px-4 py-3 border-b border-white/10">
        <button
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
          className="rounded-md border border-white/15 px-3 py-2 text-neutral-200 hover:bg-white/5"
        >
          ☰
        </button>
        <span className="text-neutral-200 font-medium">Menu</span>
        <div className="w-9" />
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:shrink-0 md:h-dvh md:sticky md:top-0 border-r border-white/10 bg-neutral-950 text-neutral-200">
        <div className="p-4 border-b border-white/10">
          <Link href="/" className="block text-lg font-semibold">
            Matthew Twigg
          </Link>
          <p className="mt-1 text-sm text-neutral-400">Developer Portfolio</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block rounded-lg px-3 py-2",
                      "text-neutral-300 hover:text-white hover:bg-white/5",
                      active && "bg-white/10 text-white ring-1 ring-inset ring-white/15",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-3 border-t border-white/10 text-xs text-neutral-400">
          © {new Date().getFullYear()} Matthew Twigg
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        aria-hidden={!open}
        className={[
          "md:hidden fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Panel */}
        <div
          className={[
            "absolute left-0 top-0 h-full w-80 max-w-[85%]",
            "bg-neutral-950 border-r border-white/10 text-neutral-200",
            "transition-transform",
            open ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-base font-semibold">Navigation</span>
            <button
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="rounded-md border border-white/15 px-3 py-2 text-neutral-200 hover:bg-white/5"
            >
              ✕
            </button>
          </div>

          <nav className="p-3">
            <ul className="space-y-1">
              {LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "block rounded-lg px-3 py-2",
                        "text-neutral-300 hover:text-white hover:bg-white/5",
                        active && "bg-white/10 text-white ring-1 ring-inset ring-white/15",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
