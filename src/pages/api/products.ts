import { NextApiRequest, NextApiResponse } from "next"
import { products } from "../../static-data/static-data-producs";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json(products)
}
