const jwt = require("jsonwebtoken");

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    // console.log("no token");
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.Token);
    console.log("decoded", decoded);

    // Add the decoded user data to the request object
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
