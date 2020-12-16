const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('index.html', {title: 'Home'})
});

router.get('/home', (req, res) => {
  res.render('index.html', {title: 'Home'})
});

router.get('/contact', (req,res) => {
  res.render('contact.html', {title: 'Contact'})
})

module.exports = router;