/**
 * Generates a random timestamp within the given number of hours from the current time.
 * @param hoursFromNow - The number of hours within which the random timestamp should be generated.
 * @returns A Date object representing the random timestamp.
 */
export function generateRandomCreatedAt(hoursFromNow: number): Date {
  if (hoursFromNow <= 0) {
    throw new Error("Hours from now must be greater than 0.");
  }

  // Convert hours to milliseconds
  const hoursInMilliseconds = hoursFromNow * 60 * 60 * 1000;

  // Get the current time and the time range
  const now = Date.now();
  const pastTime = now - hoursInMilliseconds;

  // Generate a random timestamp within the range
  const randomTimestamp = pastTime + Math.random() * hoursInMilliseconds;

  // Return a Date object for the random timestamp
  return new Date(randomTimestamp);
}
