// creating or updating, deleting user

import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

// id,fisrt_name etc coming from clerk webhook payload i.e., from api/webhooks/route.js file
export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_address
) => {
  try {
    await connect();
    // Creating the user: firstName, lastName, profilePicture, email this should be same as in the model.
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          clerkId: id,
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: email_address[0].email_address,
        },
      },
    //   upsert: true means if user exists update it otherwise create it.
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
        console.log("Could not create or update user:", error);
  }
};

export const deleteUser = async(id) => {
    try {
        await connect();
        await User.findOneAndDelete({clerkId: id});
    }
    catch (error) {
        console.log("Could not delete user:", error);
    }
    

}
