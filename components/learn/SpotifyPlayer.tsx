"use client";

import { SpotifyPlayerProps } from "@/types/form";

export default function SpotifyPlayer({embedlink}: SpotifyPlayerProps) {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden" }}>
      <iframe
        src={embedlink}
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}