import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { productsIndex } from "../../../lib/algolia";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const productsData: any = await productsIndex.search("");

    let productIDs: Array<string> = [];

    for (const p of productsData.hits) {
      productIDs.push(p.objectID);
    }

    res.status(200).json(productIDs);
  },
});
