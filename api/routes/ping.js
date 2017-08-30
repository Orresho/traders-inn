const router = require('express').Router();
const Payload = require('../common/Payload');

router.get('/heartbeat', (req, res) => {
  res.status(200).send(new Payload(true, 200, { answer: 'It is alive!' }));
});

module.exports = router;