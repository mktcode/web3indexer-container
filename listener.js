export function listener(db) {
  return async (user, amount) => {
    db.hSet("unlocked", user, JSON.stringify({
      address: user,
      unlocked: true,
      amountPaid: amount.toString(),
      indexedAt: Date.now()
    }));
  }
}