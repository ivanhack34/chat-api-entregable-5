const messageControllers = require('./messages.controllers')

const postMessage = (req, res) => {
    const userId = res.user.id
    const conversationId = req.params.conversation_Id
    const {message} = req.body

    messageControllers.createMessage({userId, conversationId, message})
        .then(data=> {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message, fields: {
                message: 'text'
            }})
        })

}

module.exports = {
    postMessage
}