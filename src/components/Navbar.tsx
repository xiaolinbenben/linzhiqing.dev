"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/resume", label: "简历" },
  { href: "/projects", label: "项目" },
  { href: "/contact", label: "联系" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) => {
    const isActive = pathname === href;

    return [
      "rounded-full px-4 py-2 text-sm font-medium transition",
      isActive
        ? "bg-slate-900 text-white shadow-card dark:bg-slate-100 dark:text-slate-900"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          linzhiqing.dev
        </Link>

        <button
          type="button"
          className="inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          aria-expanded={open}
          aria-label="切换导航菜单"
          onClick={() => setOpen((prev) => !prev)}
        >
          菜单
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="主导航">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <nav
          className="border-t border-slate-200 px-4 py-3 md:hidden dark:border-slate-800"
          aria-label="移动端主导航"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
