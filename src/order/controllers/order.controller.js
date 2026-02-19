// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
    try {
    const {
      shippingInfo,
      orderedItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (!orderedItems || orderedItems.length === 0) {
      return next(new ErrorHandler(400, "No items in order"));
    }

    const order = await createNewOrderRepo({
      shippingInfo,
      orderedItems,
      paymentInfo,
      paidAt: Date.now(),
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};
