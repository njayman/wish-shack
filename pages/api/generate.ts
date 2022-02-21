import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../utils/connectMongo";
import Wish from "../../models/Wishes";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo();
    //console.log(req.body);
    const wish = new Wish(req.body);
    await wish.save();
    res.status(200).json({ message: "Its a Success!!", id: wish._id });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("An error occured in the server side!");
  }
};
