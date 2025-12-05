/**
 * Converts a Google Drive share link into a direct image URL usable in <img> tags.
 * 
 * @param urlOrId The full Google Drive share URL or just the File ID.
 * @param width The desired width for the image (defaults to 1920 for high res).
 * @returns A direct URL to the image resource.
 */
export const getDriveDirectLink = (urlOrId: string, width: number = 1920): string => {
  if (!urlOrId) return '';

  // Regex to extract the File ID from various Google Drive URL formats
  // Supports:
  // - https://drive.google.com/file/d/FILE_ID/view
  // - https://drive.google.com/open?id=FILE_ID
  const idRegex = /[-\w]{25,}/;
  const match = urlOrId.match(idRegex);
  
  const id = match ? match[0] : urlOrId;

  // Using the thumbnail endpoint is often more reliable for embedding images
  // than the 'export=view' endpoint, which can hit rate limits or show virus scan warnings.
  // 'sz' parameter controls the size (w = width, h = height).
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
};
