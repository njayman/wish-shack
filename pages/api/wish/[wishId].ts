import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "../../../utils/connectMongo";
import Wish from "../../../models/Wishes";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectMongo();
    const { wishId } = req.query;
    const wish = await Wish.findOne({ _id: wishId });
    res.json(wish);
  } catch (err) {
    res.status(500).send("An error occured in the server");
  }
};
