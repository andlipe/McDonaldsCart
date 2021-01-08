import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {categoryId} = req.query;
    res.statusCode = 200;

    res.send(categoryId)
}
