import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { productsIndex } from "../../../lib/algolia";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const productsData = await productsIndex.search("");

    res.status(200).json(productsData);
  },
});
