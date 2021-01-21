import { NextApiRequest, NextApiResponse } from "next"
import { products } from "../../../static-data/static-data-products";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { idCategory } = req.query;
    res.statusCode = 200;

    const filterProductsByCategoryid = products.filter(product => product.idCategory.toString() === idCategory)
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    res.json(filterProductsByCategoryid)
}
