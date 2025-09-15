'use client';

import { useState } from 'react';

export default function PhotoGrid({ activeFilter }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      id: '1',
      src: 'https://readdy.ai/api/search-image?query=toddlers%20age%202-4%20years%20playing%20with%20colorful%20soft%20play%20equipment%2C%20foam%20blocks%2C%20and%20safe%20climbing%20structures%20in%20a%20bright%20indoor%20play%20area%2C%20happy%20children%20learning%20balance%20and%20coordination%20with%20caring%20instructors%2C%20soft%20pastel%20colors%2C%20safe%20environment&width=400&height=300&seq=toddler-1&orientation=landscape',
      alt: 'Toddlers Playing',
      category: 'toddlers',
      title: '',
      description: '',
      type: 'photo'
    },
    {
      id: 'video-1',
      src: 'https://img.youtube.com/vi/dpLtvTG3XK0/hqdefault.jpg',
      title: 'Toddlers in Action',
      description: 'Watch how our youngest participants develop motor skills',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/dpLtvTG3XK0?si=OL6lBbL7w2ft0_L0',
      duration: '1:46'
    },
    {
      id: '2',
      src: 'https://readdy.ai/api/search-image?query=preschool%20children%20age%204-6%20years%20playing%20soccer%20and%20basketball%20in%20a%20colorful%20indoor%20sports%20facility%2C%20kids%20learning%20teamwork%20and%20basic%20sports%20skills%2C%20bright%20lighting%2C%20energetic%20atmosphere%20with%20professional%20equipment&width=400&height=300&seq=preschool-1&orientation=landscape',
      alt: 'Preschoolers Sports',
      category: 'preschoolers',
      title: 'Preschoolers Soccer Training',
      description: 'Developing fundamental sports skills through structured play',
      type: 'photo'
    },
    {
      id: 'video-2',
      src: 'https://img.youtube.com/vi/hl0v3UYpYYs/hqdefault.jpg',
      title: 'Soccer Skills Development',
      description: 'See how preschoolers master basic soccer techniques',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/hl0v3UYpYYs?si=96r8-_C5WoFX28OO',
      duration: '0:41'
    },
    {
      id: '3',
      src: 'https://readdy.ai/api/search-image?query=children%20age%207-12%20years%20participating%20in%20competitive%20sports%20activities%20including%20track%20and%20field%2C%20gymnastics%2C%20and%20team%20sports%20in%20a%20modern%20athletic%20facility%2C%20focused%20training%20atmosphere%2C%20professional%20coaching&width=400&height=300&seq=prep-1&orientation=landscape',
      alt: 'Prep Level Training',
      category: 'prep-level',
      title: 'Prep Level Athletics',
      description: 'Advanced skill development and competitive training',
      type: 'photo'
    },
    {
      id: 'video-3',
      src: 'https://img.youtube.com/vi/YBFA7Y6ueR8/hqdefault.jpg',
      title: 'Competitive Training',
      description: 'Watch prep level athletes in competitive action',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/YBFA7Y6ueR8?si=cMpUY_t666Uge5FC',
      duration: '0:27'
    },
    {
      id: '4',
      src: 'https://readdy.ai/api/search-image?query=teenagers%20age%2012%20%20participating%20in%20advanced%20fitness%20training%2C%20strength%20building%2C%20and%20leadership%20activities%20in%20a%20professional%20sports%20facility%2C%20serious%20athletic%20training%2C%20team%20building%20exercises&width=400&height=300&seq=above-prep-1&orientation=landscape',
      alt: 'Above Prep Training',
      category: 'above-prep',
      title: 'Above Prep Fitness',
      description: 'Advanced athletes building strength and leadership skills',
      type: 'photo'
    },
    {
      id: 'video-4',
      src: 'https://img.youtube.com/vi/FCtTmF4fds8/hqdefault.jpg',
      title: 'Leadership Development',
      description: 'Advanced athletes developing leadership and teamwork',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/FCtTmF4fds8?si=iaen_BLz3_hu7N-Q',
      duration: '0:17'
    },
    {
      id: '5',
      src: 'https://readdy.ai/api/search-image?query=colorful%20birthday%20party%20celebration%20in%20sports%20facility%20with%20children%20of%20various%20ages%20playing%20games%2C%20decorations%2C%20cake%2C%20and%20happy%20families%2C%20festive%20atmosphere%2C%20indoor%20party%20setting&width=400&height=300&seq=event-1&orientation=landscape',
      alt: 'Birthday Party',
      category: 'events',
      title: 'Birthday Party Celebration',
      description: 'Making special moments memorable with sports-themed parties',
      type: 'photo'
    },
    {
      id: 'video-5',
      src: 'https://img.youtube.com/vi/pjQTJ4oJ1Og/hqdefault.jpg',
      title: 'Party Highlights',
      description: 'Memorable moments from our sports-themed birthday parties',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/pjQTJ4oJ1Og?si=vYpLo6TFB3O3qhGs',
      duration: '0:35'
    },
    {
      id: '6',
      src: 'https://readdy.ai/api/search-image?query=toddlers%20age%201-3%20years%20with%20parents%20participating%20in%20parent-child%20activities%2C%20crawling%20through%20tunnels%2C%20playing%20with%20sensory%20toys%2C%20safe%20padded%20environment%2C%20bonding%20activities&width=400&height=300&seq=toddler-2&orientation=landscape',
      alt: 'Parent-Child Activities',
      category: 'toddlers',
      title: 'Parent-Child Bonding',
      description: 'Building connections through supervised play activities',
      type: 'photo'
    },
    {
      id: '7',
      src: 'https://readdy.ai/api/search-image?query=preschool%20children%20age%204-6%20years%20in%20swimming%20lessons%2C%20learning%20basic%20water%20safety%20and%20swimming%20techniques%20in%20a%20colorful%20indoor%20pool%20area%2C%20certified%20instructors%2C%20safe%20learning%20environment&width=400&height=300&seq=preschool-2&orientation=landscape',
      alt: 'Swimming Lessons',
      category: 'preschoolers',
      title: 'Swimming Lessons',
      description: 'Building water confidence and swimming skills',
      type: 'photo'
    },
    {
      id: '8',
      src: 'https://readdy.ai/api/search-image?query=children%20age%208-12%20years%20in%20martial%20arts%20class%20learning%20discipline%20and%20self-defense%20techniques%20in%20a%20traditional%20dojo%20setting%2C%20focused%20practice%2C%20respect%20and%20discipline%20training&width=400&height=300&seq=prep-2&orientation=landscape',
      alt: 'Martial Arts Training',
      category: 'prep-level',
      title: 'Martial Arts Class',
      description: 'Learning discipline, respect, and self-defense skills',
      type: 'photo'
    },
    {
      id: '9',
      src: 'https://readdy.ai/api/search-image?query=teenagers%20age%2013%20%20participating%20in%20advanced%20team%20sports%20competition%2C%20basketball%20tournament%2C%20intense%20gameplay%2C%20competitive%20atmosphere%2C%20skilled%20athletic%20performance&width=400&height=300&seq=above-prep-2&orientation=landscape',
      alt: 'Basketball Tournament',
      category: 'above-prep',
      title: 'Basketball Tournament',
      description: 'Competitive play developing teamwork and sportsmanship',
      type: 'photo'
    },
    {
      id: '10',
      src: 'https://readdy.ai/api/search-image?query=special%20sports%20event%20with%20children%20of%20all%20ages%20participating%20in%20fun%20activities%2C%20awards%20ceremony%2C%20families%20cheering%2C%20celebratory%20atmosphere%2C%20community%20gathering%20in%20sports%20facility&width=400&height=300&seq=event-2&orientation=landscape',
      alt: 'Sports Day Event',
      category: 'events',
      title: 'Annual Sports Day',
      description: 'Community celebration of achievements and fun',
      type: 'photo'
    },
    {
      id: '11',
      src: 'https://readdy.ai/api/search-image?query=toddlers%20age%202-4%20years%20playing%20with%20colorful%20balls%2C%20learning%20to%20throw%20and%20catch%2C%20developing%20motor%20skills%20in%20a%20safe%20play%20area%20with%20soft%20mats%2C%20playful%20learning%20environment&width=400&height=300&seq=toddler-3&orientation=landscape',
      alt: 'Ball Games',
      category: 'toddlers',
      title: 'Ball Play Activities',
      description: 'Developing hand-eye coordination through play',
      type: 'photo'
    },
    {
      id: '12',
      src: 'https://readdy.ai/api/search-image?query=preschool%20children%20age%205-7%20years%20in%20gymnastics%20class%20learning%20basic%20tumbling%20and%20balance%20beam%20activities%20in%20a%20bright%20gymnastics%20facility%2C%20skilled%20instruction%2C%20safety%20equipment&width=400&height=300&seq=preschool-3&orientation=landscape',
      alt: 'Gymnastics Class',
      category: 'preschoolers',
      title: 'Gymnastics Training',
      description: 'Building flexibility, strength, and confidence',
      type: 'photo'
    }
  ];

  const getFilteredPhotos = () => {
    if (activeFilter === 'all') return photos;
    if (activeFilter === 'photos') return photos.filter(photo => photo.type === 'photo');
    if (activeFilter === 'videos') return photos.filter(photo => photo.type === 'video');
    return photos.filter(photo => photo.category === activeFilter);
  };

  const filteredPhotos = getFilteredPhotos();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {photo.type === 'video' && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-play-fill text-2xl text-white"></i>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {photo.duration}
                    </div>
                  </>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  {photo.type === 'video' && (
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-video-line text-blue-600"></i>
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-3 shadow-lg">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`text-xl text-gray-700 ${photo.type === 'video' ? 'ri-play-line' : 'ri-eye-line'}`}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="relative">
              {selectedPhoto.type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={selectedPhoto.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title={selectedPhoto.title}
                  ></iframe>
                </div>
              ) : (
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              )}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-xl text-gray-700"></i>
                </div>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{selectedPhoto.title}</h3>
                <div className="flex items-center space-x-2">
                  {selectedPhoto.type === 'video' && (
                    <>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-video-line text-blue-600"></i>
                      </div>
                      <span className="text-sm text-gray-500">{selectedPhoto.duration}</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-gray-600">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
