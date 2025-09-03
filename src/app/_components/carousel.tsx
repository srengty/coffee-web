'use client'
import React, { useEffect, useState } from 'react'
import EmblaCarousel from './embla/embla-carousel'
import { getBanners } from '@/app/_actions/banner_actions'
import { Banners } from '@/generated/prisma';

export default function Carousel() {
  const [banners, setBanners] = useState<Banners[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const data = await getBanners();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  return (
    <div>
      {banners.length}
        <EmblaCarousel slides={banners.map(banner => banner.imageUrl)} options={{ loop: true }} />
    </div>
  )
}
