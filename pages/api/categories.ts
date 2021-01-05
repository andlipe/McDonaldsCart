import { NextApiRequest, NextApiResponse } from "next"
import {categories} from '../../static-data/static-data-categories';

export default (req: NextApiRequest, res: NextApiResponse) => {

    res.statusCode = 200
    

    res.json(categories)
}
