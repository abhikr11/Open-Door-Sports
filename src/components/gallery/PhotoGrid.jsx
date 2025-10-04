'use client';

import { useState, useEffect } from 'react';

const YOUTUBE_API_KEY = 'AIzaSyChbTRKU2KM4W495F0-z_F8Nn8eIfqi-eU';
const VIDEOS_PLAYLIST_ID = 'PLOozA02PTxi6Gm3k0EuFOGNaMDkcS_B7v'; // My Videos
const EVENTS_PLAYLIST_ID = 'PLOozA02PTxi7rHY6S_Fw6vdd6tJl5Qqbe'; // Special Events

export default function PhotoGrid({ activeFilter }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [videosPlaylist, setVideosPlaylist] = useState([]);
  const [eventsPlaylist, setEventsPlaylist] = useState([]);
  const [photos, setPhotos] = useState([]);

  // ------------------ FETCH PLAYLIST ------------------
  const fetchPlaylist = async (playlistId, setState) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      if (data.items) {
        const videos = data.items.map((item) => ({
          id: `video-${item.snippet.resourceId.videoId}`,
          src: item.snippet.thumbnails.high.url,
          title: item.snippet.title,
          description: item.snippet.description,
          type: 'video',
          videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
        }));
        setState(videos);
      }
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  };

  useEffect(() => {
    fetchPlaylist(VIDEOS_PLAYLIST_ID, setVideosPlaylist);
    fetchPlaylist(EVENTS_PLAYLIST_ID, setEventsPlaylist);
  }, []);

  // ------------------ FETCH CLOUDINARY PHOTOS ------------------
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/images');
        const data = await res.json();

        const formatted = data.map((url, index) => ({
          id: `photo-${index}`,
          src: url,
          alt: `Photo ${index + 1}`,
          type: 'photo'
        }));

        setPhotos(formatted);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // ------------------ SHUFFLE HELPER ------------------
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // ------------------ FILTER LOGIC ------------------
  const getFilteredPhotos = () => {
    switch (activeFilter) {
      case 'all':
        return shuffleArray([...photos, ...videosPlaylist, ...eventsPlaylist]);
      case 'photos':
        return photos;
      case 'videos':
        return videosPlaylist;
      case 'events':
        return eventsPlaylist;
      default:
        return photos;
    }
  };

  const filteredPhotos = getFilteredPhotos();

  // ------------------ RENDER ------------------
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={item.src}
                  alt={item.alt || item.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-4">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-play-fill text-2xl text-white"></i>
                      </div>
                    </div>
                  </div>
                )}
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
                  />
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
              <h3 className="text-2xl font-bold text-gray-900">{selectedPhoto.title}</h3>
              <p className="text-gray-600">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
