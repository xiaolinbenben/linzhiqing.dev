"use client";

import { KeyboardEvent, PointerEvent, useEffect, useRef, useState } from "react";
import type { QrItem } from "@/data/profile";
import styles from "./contact.module.css";

type Placement = "top" | "bottom";

interface QrButtonProps {
  item: QrItem;
}

const MOBILE_QUERY = "(max-width: 640px)";
const PREVIEW_GAP = 10;
const SAFE_SPACE = 12;

export default function QrButton({ item }: QrButtonProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>("top");
  const [maxPreviewHeight, setMaxPreviewHeight] = useState<number>();
  const fileName = item.file.split("/").pop() ?? "qrcode.jpg";

  const isMobile = () => window.matchMedia(MOBILE_QUERY).matches;

  const updatePlacement = () => {
    const root = rootRef.current;
    const preview = previewRef.current;

    if (!root || !preview) {
      return;
    }

    if (isMobile()) {
      setPlacement("bottom");
      setMaxPreviewHeight(undefined);
      return;
    }

    const rootRect = root.getBoundingClientRect();
    const previewRect = preview.getBoundingClientRect();
    const headerRect = document.querySelector("header")?.getBoundingClientRect();
    const topBoundary = Math.max(headerRect?.bottom ?? 0, 0) + SAFE_SPACE;
    const bottomBoundary = window.innerHeight - SAFE_SPACE;
    const previewHeight = Math.max(previewRect.height, 180);
    const spaceAbove = rootRect.top - topBoundary - PREVIEW_GAP;
    const spaceBelow = bottomBoundary - rootRect.bottom - PREVIEW_GAP;

    if (spaceAbove >= previewHeight) {
      setPlacement("top");
      setMaxPreviewHeight(undefined);
      return;
    }

    if (spaceBelow >= previewHeight || spaceBelow > spaceAbove) {
      setPlacement("bottom");
      setMaxPreviewHeight(spaceBelow > 0 ? spaceBelow : undefined);
      return;
    }

    setPlacement("top");
    setMaxPreviewHeight(spaceAbove > 0 ? spaceAbove : undefined);
  };

  const showPreview = () => {
    setOpen(true);
    window.requestAnimationFrame(updatePlacement);
  };

  const hidePreview = () => {
    if (!isMobile()) {
      setOpen(false);
    }
  };

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") {
      showPreview();
    }
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") {
      hidePreview();
    }
  };

  const handleClick = () => {
    if (isMobile()) {
      setOpen(true);
      window.requestAnimationFrame(updatePlacement);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    showPreview();
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: globalThis.PointerEvent) => {
      if (rootRef.current?.contains(event.target as Node)) {
        return;
      }

      setOpen(false);
    };

    const handleViewportChange = () => updatePlacement();

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={styles.button}
      data-open={open ? "true" : undefined}
      data-placement={placement}
      role="button"
      tabIndex={0}
      title={item.title}
      onClick={handleClick}
      onFocus={showPreview}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={handleKeyDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.hint}>{item.hint}</span>
      <a
        className={styles.download}
        href={item.file}
        download={fileName}
        onClick={(event) => event.stopPropagation()}
      >
        下载二维码
      </a>
      <img
        ref={previewRef}
        className={styles.preview}
        src={item.file}
        alt={item.alt}
        loading="lazy"
        style={maxPreviewHeight ? { maxHeight: `${maxPreviewHeight}px` } : undefined}
        onLoad={() => {
          if (open) {
            updatePlacement();
          }
        }}
      />
    </div>
  );
}
