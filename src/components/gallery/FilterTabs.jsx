'use client';

import React from 'react';

export default function FilterTabs({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All Media', emoji: '📸' },
    { id: 'photos', label: 'Photos', emoji: '🖼️' },
    { id: 'videos', label: 'Videos', emoji: '🎬' },
    { id: 'toddlers', label: 'Toddlers', emoji: '🧸' },
    { id: 'preschoolers', label: 'Preschoolers', emoji: '⚽' },
    { id: 'prep-level', label: 'Prep Level', emoji: '🏃' },
    { id: 'above-prep', label: 'Above Prep', emoji: '🏆' },
    { id: 'events', label: 'Special Events', emoji: '🎉' },
  ];

  return (
    <div className="bg-gray-50 py-8" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Media{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Browse through our collection of photos and videos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{filter.emoji}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
