const router = require('express').Router();
const { User } = require('../../models');


router.get('/users', async (req, res) => {

    try {
        const userData = await User.findAll();

        const users = userData.map((user) => user.get({ plain: true }));
        console.log(users);

        res.render('users', { 
            sentence: 'This is a sentence',
            users 
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
});


router.get('/users/:id', async (req, res) => {


try {
    const userData = await User.findByPk(req.params.id);
    const user = userData.get({ plain: true });
    res.render('userProfile', user);

} catch (err) {
    res.status(500).json(err);
}});

router.get('/users', (req, res) => {
    res.render('users', {
        sentence: 'This is a sentence', 
        user: [{
            name: 'John',
            powerLevel: 90001,
            over9000: true,
        },
        {
            name: 'Jane',
            powerLevel: 9000,
            over9000: false,
        },
        {  
            name: 'Joe',
            powerLevel: 1,
            over9000: false,
        }]
    });
});

module.exports = router;