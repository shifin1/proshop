import express from "express"
import {
  addOrderItems,
  getmyOrders,
  getOrderById,
  updateOrderToPaid,
  getOrders,
} from "../controllers/orderController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders)
router.route("/myorders").get(protect, getmyOrders)
router.route("/:id").get(protect, getOrderById)
router.route("/:id/pay").put(protect, updateOrderToPaid)

export default router
