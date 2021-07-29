import Express from "express";
import { list, add , productById , remove , read} from "../controller/product";
const router = Express.Router();

router.get("/product", list);
router.post("/product", add);
router.delete('/product/:productId',remove)
router.get("/product/:productId",read)

router.param('productId',productById)
module.exports = router;
