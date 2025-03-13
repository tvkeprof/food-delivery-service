export const validateCategory = (req, res, next) => {
  const { categoryName } = req.body;
  if (!categoryName) {
    return res.status(400).json({ error: " categoryname are required;" });
  } else {
    next();
  }
};
