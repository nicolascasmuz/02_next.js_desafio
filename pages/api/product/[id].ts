import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { productsIndex } from "../../../lib/algolia";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    const productData = await productsIndex.getObject(id as string);

    res.status(200).json(productData);
  },
});
