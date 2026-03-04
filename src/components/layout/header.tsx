"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { trackPhoneClick, trackCtaClick } from "@/lib/analytics";

function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

function DropdownNavItem({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }, [cancelClose]);

  useEffect(() => {
    return () => cancelClose();
  }, [cancelClose]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={cn(
          "inline-flex h-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900",
          open ? "bg-slate-100 text-slate-900" : "text-slate-700"
        )}
        onClick={() => setOpen((prev) => !prev)}
        onFocus={() => {
          cancelClose();
          setOpen(true);
        }}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1.5 w-[220px] overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <ul className="grid gap-1 p-2">
            <li>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                View all
              </Link>
            </li>
            {items.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Show-Me Home Ventures home"
          className="shrink-0"
        >
          <Image
            src="/brand/show-me-home-ventures-logo.png"
            alt="Show-Me Home Ventures"
            width={520}
            height={130}
            priority
            sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
            className="h-auto w-[140px] sm:w-[160px] lg:w-[180px]"
          />
          <span className="sr-only">Show-Me Home Ventures</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) =>
            item.children ? (
              <DropdownNavItem
                key={item.href}
                label={item.label}
                href={item.href}
                items={item.children}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900",
                  isActive(pathname, item.href)
                    ? "text-blue-700 font-semibold"
                    : "text-slate-700"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={formatPhoneLink(siteConfig.phone)}
            className="hidden items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-blue-700 sm:flex"
            onClick={() => trackPhoneClick("header_desktop")}
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phone}
          </a>
          <Button
            asChild
            size="sm"
            className="hidden bg-slate-900 hover:bg-slate-800 sm:inline-flex"
          >
            <Link href="/get-offer" onClick={() => trackCtaClick("Get Your Offer", "header")}>Get Your Offer</Link>
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (Sheet-like overlay) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-30 lg:hidden"
          aria-hidden
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-slate-200 bg-white shadow-lg transition-all lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col p-4">
          {mainNavigation.map((item) =>
            item.children ? (
              <div key={item.href} className="border-b border-slate-100 py-3">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-medium text-slate-900"
                >
                  {item.label}
                </Link>
                <div className="flex flex-wrap gap-2 pl-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm text-slate-600 hover:text-blue-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "block border-b border-slate-100 py-3 font-medium hover:text-blue-700",
                  isActive(pathname, item.href) ? "text-blue-700" : "text-slate-900"
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4">
            <a
              href={formatPhoneLink(siteConfig.phone)}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-700"
              onClick={() => { setMobileOpen(false); trackPhoneClick("header_mobile"); }}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button
              asChild
              size="sm"
              className="w-full bg-slate-900 hover:bg-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              <Link href="/get-offer">Get Your Offer</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
