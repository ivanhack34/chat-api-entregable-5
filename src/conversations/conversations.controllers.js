const Conversations = require('../models/conversations.models')
const Participants = require('../models/participants.models')
const Users = require('../models/users.models')

const findAllConversations = async () => {
    const data = await Conversations.findAll({
        attributes: {
            exclude: ['userId']
        },
        include: [
            {
                model: Users,
                attributes: {
                    exclude: ['email', 'password', 'role', 'createdAt', 'updatedAt']
                }
            }
        ],
    })
    return data
}

const createConversation = async (obj) => {
    const data = await Conversations.create({
        userId : obj.userId,
        title: obj.title,
        imageUrl: obj.imageUrl
    })
    await Participants.create({
        conversationId: data.id,
        userId: obj.UserId
    })
    await Participants.create({
        conversationId: data.id,
        userId: obj.participantId
    })
    return data
}


module.exports = {
    findAllConversations,
    createConversation
}