export function endpoint(db) {
  return async (_req, res) => {
    const cached = await db.hGetAll('unlocked');
  
    if (cached) {
      Object.keys(cached).forEach((key) => {
        cached[key] = JSON.parse(cached[key]);
      });
    }
  
    res.send(cached || {});
  }
}