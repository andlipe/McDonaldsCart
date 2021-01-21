import { NextApiRequest, NextApiResponse } from "next"
import { products } from "../../static-data/static-data-products";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  res.json(products)
}
