const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController.js');

router.get('/api/data', dataController.test);

router.get('/api/projectData', dataController.getProjectData);

router.post('/api/user', dataController.postUser);

router.get('/api/current_user', dataController.currentUser);
router.get('/api/login', dataController.login);
router.get('/api/logout', dataController.logout);
router.get('/api/signup', dataController.signup);
router.get('/api/bookmarks', dataController.getBookmarkMetadata);

module.exports = router;