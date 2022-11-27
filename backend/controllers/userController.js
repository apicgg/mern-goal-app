const asyncHandler = require('express-async-handler')

const User = require('../model/userModel')

// @desc Register User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Register user' })
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login user' })
})

// @desc Get user data
// @route GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get user data' })
})

module.exports = { registerUser, loginUser, getMe }
