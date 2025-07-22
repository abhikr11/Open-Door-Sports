
'use client';

import Link from 'next/link';
import { useState } from 'react';

import GalleryHero from '../../components/gallery/GalleryHero';
import FilterTabs from '../../components/gallery/FilterTabs';
import PhotoGrid from '../../components/gallery/PhotoGrid';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-white">
      <GalleryHero />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PhotoGrid activeFilter={activeFilter} />
      
      {/* Back to Main Page */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Programs?</h2>
          <p className="text-xl text-blue-100 mb-8">Explore our age-specific programs and start your child's journey today!</p>
          <Link href="/sports-events" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            View All Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
