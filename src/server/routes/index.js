const router = require('express').Router();
import api from './api';

router.use('/api/v1', api);

module.exports = router;
