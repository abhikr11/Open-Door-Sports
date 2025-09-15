
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import GalleryHero from '../../components/gallery/GalleryHero';
import FilterTabs from '../../components/gallery/FilterTabs';
import PhotoGrid from '../../components/gallery/PhotoGrid';
import CallToAction from "../../components/home/CallToAction";
import Footer from '../../components/footer/Footer';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (

    <div className="min-h-screen bg-white">
      <Navbar/>
      <GalleryHero />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PhotoGrid activeFilter={activeFilter} />
      <CallToAction />
      {/* Back to Main Page */}
      <Footer/>
    </div>
  );
}
