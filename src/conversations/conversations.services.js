const conversationControllers = require('./conversations.controllers')

const getAllConversations = (req, res) => {
    postControllers.findAllPosts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postConversation = (req, res) => {
    const {title, imageUrl, participantId} = req.body
    const userId = req.user.id
    conversationControllers.createConversation({title, imageUrl, participantId, userId})
    .then((data)=>{
        res.status(201).json(data)
    })
    .catch((err)=> {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = {
    postConversation
}