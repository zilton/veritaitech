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
  const idRegex = /[-\w]{25,}/;
  const match = urlOrId.match(idRegex);
  
  const id = match ? match[0] : urlOrId;

  return `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
};

/**
 * Converts a Google Drive share link into a direct video streaming URL.
 * Note: This uses the 'export=download' endpoint which works for standard HTML5 video tags,
 * though heavy traffic might hit Drive quotas.
 */
export const getDriveVideoSrc = (urlOrId: string): string => {
  if (!urlOrId) return '';
  
  const idRegex = /[-\w]{25,}/;
  const match = urlOrId.match(idRegex);
  
  const id = match ? match[0] : urlOrId;
  
  return `https://drive.google.com/uc?export=download&id=${id}`;
};