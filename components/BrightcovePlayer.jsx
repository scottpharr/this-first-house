'use client';
import { useState } from 'react';

export default function BrightcovePlayer({ videoId, accountId, playerId, thumbnail }) {
  const [playing, setPlaying] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video cursor-pointer">
      {!playing ? (
        <div onClick={() => setPlaying(true)} className="relative w-full h-full">
          <img
            src={thumbnail || `https://cf-images.us-east-1.prod.boltdns.net/v1/static/${accountId}/${videoId}/middle/1280x720/thumbnail.webp`}
            alt="Video thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-transparent border-l-black ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://players.brightcove.net/${accountId}/${playerId}_default/index.html?videoId=${videoId}&autoplay=true`}
          className="w-full h-full rounded-lg"
          allowFullScreen
          allow="autoplay"
        />
      )}
    </div>
  );
}