export const validateLoginInput = (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({ error: "Email and password are required." });
  } else if (!email) {
    return res.status(400).json({ error: "Email required." });
  } else if (!password) {
    return res.status(400).json({ error: "Password required." });
  } else {
    next();
  }
};
