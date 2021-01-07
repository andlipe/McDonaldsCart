import { NextApiRequest, NextApiResponse } from "next"
import { products } from "../../../static-data/static-data-producs";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { idCategory } = req.query;
    res.statusCode = 200;

    const filterProductsByCategoryid = products.filter(product => product.idCategory.toString() === idCategory)

    res.json(filterProductsByCategoryid)
}
