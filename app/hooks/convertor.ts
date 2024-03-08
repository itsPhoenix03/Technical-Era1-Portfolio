export function formatCount(countString: string) {
  const count = parseInt(countString);

  if (count >= 1000 && count < 1000000) {
    // Convert to "k" notation (e.g., 1.5k)
    return `${(count / 1000).toFixed(2)}K`;
  } else if (count >= 1000000) {
    // Convert to "M" notation (e.g., 1.5M)
    return `${(count / 1000000).toFixed(2)}M`;
  } else {
    // No conversion needed
    return countString;
  }
}
