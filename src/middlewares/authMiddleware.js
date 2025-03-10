export const validateLoginInput = (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(400).json({ error: "Email and password are required." });
  } else {
    // next();
    res.send("logIn success");
  }
};
