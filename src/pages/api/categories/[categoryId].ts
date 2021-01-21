import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {categoryId} = req.query;
    res.statusCode = 200;
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    res.send(categoryId)
}
