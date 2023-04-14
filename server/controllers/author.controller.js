const Author = require('../models/author.model');

module.exports={

allAuthors: (req, res) => {
    Author.find({})
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneAuthor: (req, res) => {
    Author.findOne({_id: req.params.id})
        .then((author) => {
            res.json(author)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createAuthor: (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => {res.json(newAuthor)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

updateAuthor: (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedAuthor) => {res.json(updatedAuthor)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

deleteAuthor: (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

}