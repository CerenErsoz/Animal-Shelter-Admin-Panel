"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';  // next/router yerine next/navigation kullan

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login'); // Giriş sayfasına yönlendir
  }, []);

  return <div>Redirecting to login...</div>;
}
