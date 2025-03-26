import { Foods } from "../../models/food.models.js";

export const updateFoods = async (req, res) => {
  const { id } = req.params;
  const { foodName, price, ingredients, image } = req.body;
  try {
    const updatedDate = await Foods.findByIdAndUpdate(id, {
      foodName,
      price,
      ingredients,
      image,
    });
    res.send({ updatedDate }).status(200);
    console.log("updated foods");
  } catch (Err) {
    console.log("err", Err);
    res.send(err).status(400).json({
      message: "error while updating foods",
    });
  }
};
// import multer from "multer";
// import { Foods } from "../../models/food.models.js";

// const upload = multer({ dest: "uploads/" });

// export const updateFoods = async (req, res) => {
//   const { id } = req.params;
//   const { foodName, price, ingredients } = req.body;
//   let imagePath = req.body.image;
//   if (req.file) {
//     imagePath = req.file.path;
//   }

//   try {
//     const updatedFood = await Foods.findByIdAndUpdate(
//       id,
//       {
//         foodName,
//         price,
//         ingredients,
//         image: imagePath,
//       },
//       { new: true }
//     );

//     if (!updatedFood) {
//       return res.status(404).json({ message: "Food item not found" });
//     }

//     res.status(200).json({ updatedFood });
//     console.log("Updated food:", updatedFood);
//   } catch (err) {
//     console.log("Error updating food:", err);
//     res.status(400).json({
//       message: "Error while updating food",
//       error: err.message,
//     });
//   }
// };
