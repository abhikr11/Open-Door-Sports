// src/utils/fetchPlaylist.js

export async function fetchPlaylistVideos(playlistId, apiKey) {
  const videos = [];
  let nextPageToken = '';
  
  try {
    do {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?` +
          `part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}` +
          `&key=${apiKey}&pageToken=${nextPageToken}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch playlist videos');
      }

      const data = await response.json();

      data.items.forEach(item => {
        const videoId = item.contentDetails.videoId;
        const snippet = item.snippet;

        videos.push({
          id: videoId,
          src: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          title: snippet.title,
          description: snippet.description,
          type: 'video',
          videoUrl: `https://www.youtube.com/embed/${videoId}`,
          duration: '0:00', // optional: you can fetch actual duration with another API call
        });
      });

      nextPageToken = data.nextPageToken || '';
    } while (nextPageToken);

    return videos;
  } catch (error) {
    console.error('Error fetching playlist videos:', error);
    return [];
  }
}
