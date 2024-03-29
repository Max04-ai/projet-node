const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/model');

/**
 * @desc    Get all users
 * @route   GET /api/v1/users
 * @access  Private/Admin
 */
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
})

/**
 * @desc    Get a user
 * @route   POST /api/v1/users/:id
 * @access  Private/Admin
 */
//exports.getUser = asyncHandler(async (req, res, next) => {
//  const user = await User.findById(req.params.id);

//  res.status(200).json({ success: true, data: user });
//})