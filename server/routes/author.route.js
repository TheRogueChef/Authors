const AuthorController = require('../controllers/author.controller')


module.exports = app => {
    app.get('/api/allAuthors', AuthorController.allAuthors);
    app.get('/api/oneAuthor/:id', AuthorController.oneAuthor);
    app.post('/api/newAuthor', AuthorController.createAuthor);
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
    app.delete('/api/allAuthors/:id', AuthorController.deleteAuthor)
}
