import { Users } from "../../models/users.model.js"; // Ensure that you import the correct model

export const updateUsers = async (req, res) => {
  const { address } = req.body;

  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, data);
    res
      .send({ updatedUser, message: "users updated successfully" })
      .status(200);
    console.log("users", users);

    res.json(users);
  } catch (error) {
    console.log("error", error);

    res.send(error).status(400);
  }
};
// Update user address
// export const updateUsers = async (req, res) => {
//   const { address } = req.body; // Get the address from the request body
//   const token = req.headers.authorization?.split(" ")[1]; // Extract the token from headers

//   if (!token) {
//     return res.status(400).json({ error: "Authentication token is required" });
//   }

//   try {
//     // Decode token to get user ID (add your decoding logic here)
//     const userId = decodeToken(token); // Example decode logic; use your method to decode the token

//     // Check if address is provided
//     if (!address) {
//       return res.status(400).json({ error: "Address is required" });
//     }

//     // Update the user's address in the database
//     const user = await Users.findByIdAndUpdate(
//       userId,
//       { address }, // Only update the address field
//       { new: true } // Optionally return the updated user document
//     );

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Return the updated user information as a response
//     return res
//       .status(200)
//       .json({ message: "Address updated successfully", user });
//   } catch (error) {
//     console.error("Error updating user address:", error);
//     return res.status(500).json({ error: "Error updating address" });
//   }
// };
