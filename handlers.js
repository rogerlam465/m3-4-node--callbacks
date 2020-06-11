const items = [];

const handleHomePage = (req, res) => {
    res.render('pages/homepage', { items: items })
}

const handleFormData = (req, res) => {
    const { item } = req.body;
    items.push(item);

    res.redirect('/');
}

const handle404 = (req, res) => {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('pages/fourOhFour', { path: req.originalUrl });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
}

module.exports = {
    handleFormData,
    handleHomePage,
    handle404,
};