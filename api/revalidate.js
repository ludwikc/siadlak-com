/**
 * API endpoint for revalidating static pages
 * Used for Incremental Static Regeneration (ISR)
 * Called by a cron job every day at midnight
 */

export default async function handler(req, res) {
  try {
    // List of paths to revalidate
    const pathsToRevalidate = [
      '/',
      '/about',
      '/contact',
      '/courses',
      '/resources',
      '/testimonials',
      '/newsletter',
      '/pl',
      '/pl/about',
      '/pl/contact',
      '/pl/courses',
      '/pl/resources',
      '/pl/testimonials',
      '/pl/newsletter'
    ];
    
    // Revalidate each path
    const revalidationResults = await Promise.all(
      pathsToRevalidate.map(async (path) => {
        try {
          await res.revalidate(path);
          return { path, success: true };
        } catch (error) {
          return { path, success: false, error: error.message };
        }
      })
    );
    
    // Return results
    return res.json({
      revalidated: true,
      date: new Date().toISOString(),
      results: revalidationResults
    });
  } catch (error) {
    // If there was an error, Next.js will continue to show the last successful generated page
    return res.status(500).json({
      revalidated: false,
      date: new Date().toISOString(),
      error: error.message
    });
  }
}
