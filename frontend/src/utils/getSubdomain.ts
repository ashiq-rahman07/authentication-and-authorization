export const getSubdomain = () => {
  const host = window.location.hostname; // e.g., beautyhub.localhost or grocerypoint.example.com
  const parts = host.split('.');

  // Development (localhost): e.g., beautyhub.localhost
  if (host.includes('localhost')) {
    return parts.length > 1 ? parts[0] : null;
  }

  // Production (e.g., grocerypoint.example.com)
  return parts.length > 2 ? parts[0] : null;
};