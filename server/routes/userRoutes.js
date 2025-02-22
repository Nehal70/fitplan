import express from 'express';
import { createUser, getUserProfile, updateUserProfile, deleteUser } from '../controllers/userController.js'; // Use import instead of require
import { verifyGoogleToken } from '../middleware/authMiddleware.js'; // Use import instead of require

const router = express.Router();

// Use the middleware to authenticate the user before performing any actions
// POST request to create a new user (this might already be handled in your signup process, for example)
router.post('/create', verifyGoogleToken, createUser); // This will only run if token is valid

// GET request to view a user's profile
router.get('/:userId', verifyGoogleToken, getUserProfile);

// PUT request to update a user's profile
router.put('/:userId', verifyGoogleToken, updateUserProfile);

// DELETE request to delete a user's profile
router.delete('/:userId', verifyGoogleToken, deleteUser);

export default router;



