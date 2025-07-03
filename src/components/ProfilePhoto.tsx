'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-100 h-100">
      <Image
        src="/skills/profile.png"
        alt="Cyrus Liu"
        width={1000}
        height={1000}
        className={`rounded-full shadow-lg transition-opacity duration-1000 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

