"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

export type EventPopupConfig = {
  id: string;
  enabled: boolean;
  title: string;
  image: string;
  startDate?: string;
  endDate?: string;
  showOncePerSession?: boolean;
  ctaEnabled?: boolean;
  ctaText?: string;
  ctaHref?: string;
};

export const eventConfig: EventPopupConfig = {
  id: "dashain-2026",
  enabled: false,
  title: "Dashain Special Offer",
  image: "/images/events/dashain-offer.jpg",
  startDate: "2026-09-15T00:00:00+05:45",
  endDate: "2026-10-15T23:59:59+05:45",
  showOncePerSession: true,
  ctaEnabled: false,
  ctaText: "Explore Offer",
  ctaHref: "/tours",
};

function parseDate(value?: string): Date | null {
  if (!value) return null;

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function isEventActive(config: EventPopupConfig): boolean {
  if (!config.enabled) return false;

  const now = new Date();
  const start = parseDate(config.startDate);
  const end = parseDate(config.endDate);

  if (!start || !end) return false;

  return now >= start && now <= end;
}

function getSessionKey(id: string): string {
  return `meegin_event_popup_${id}`;
}

export function EventPopup({ config = eventConfig }: { config?: EventPopupConfig }) {
  const isActive = useMemo(() => isEventActive(config), [config]);

  const [isOpen, setIsOpen] = useState<boolean>(() => {
    if (typeof window === "undefined" || !isEventActive(config)) {
      return false;
    }

    const storageKey = getSessionKey(config.id);
    const hasDismissed = config.showOncePerSession && sessionStorage.getItem(storageKey) === "dismissed";

    return !hasDismissed;
  });

  const closePopup = useCallback(() => {
    setIsOpen(false);

    if (config.showOncePerSession && typeof window !== "undefined") {
      sessionStorage.setItem(getSessionKey(config.id), "dismissed");
    }
  }, [config.id, config.showOncePerSession]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closePopup, isOpen]);

  if (!isActive || !isOpen) {
    return null;
  }

  const imageMissing = !config.image || config.image.trim() === "";
  if (imageMissing) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/45 px-4 py-6 backdrop-blur-[2px]">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        onClick={closePopup}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={config.title || "Event announcement"}
        className="event-popup-panel relative z-10 w-full max-w-180 rounded-[28px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.18)]"
      >
        <button
          type="button"
          aria-label="Close event announcement"
          onClick={closePopup}
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] focus-visible:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="overflow-hidden rounded-[28px]">
          <div className="bg-white p-3 sm:p-4">
            <div className="overflow-hidden rounded-[22px] bg-slate-100">
              <Image
                src={config.image}
                alt={config.title}
                width={900}
                height={640}
                priority
                className="h-auto max-h-[65vh] w-full object-contain sm:max-h-[70vh]"
              />
            </div>
          </div>

          {config.ctaEnabled && config.ctaText && (
            <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6">
              <Link
                href={config.ctaHref || "/tours"}
                onClick={closePopup}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#0091DA] px-6 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/15 transition hover:bg-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AB8]"
              >
                {config.ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
