'use client';
import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <div className="rounded-full overflow-hidden w-48 h-48">
      <Image
        src="/profile.jpg"
        alt="Cyrus Liu"
        width={192}
        height={192}
        className="object-cover w-full h-full"
      />
    </div>
  );
}


