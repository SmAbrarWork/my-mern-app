import { ratelimit } from "../config/upstash.js";

export const ratelimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(req.ip); // now ratelimit is defined
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests. Please try again later." });
    }
    next();
  } catch (error) {
    console.error("Rate Limiter Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
