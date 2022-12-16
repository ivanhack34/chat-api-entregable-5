const conversationControllers = require('./conversations.controllers')

const getAllConversations = (req, res) => {
    
    conversationControllers.findAllConversations(req.user.id)
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postConversation = (req, res) => {
    const {title, initParticipants, imageUrl} = req.body
    console.log(req.body)
    const userId = req.user.id
    conversationControllers.createConversation({title,  userId, initParticipants, imageUrl})
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
    postConversation,
    getAllConversations
}