import express from 'express';
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.sendFile('/views/index.html', {
    root: __dirname + '/../'
  });
});

export default apiRouter;