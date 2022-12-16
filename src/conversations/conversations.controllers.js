const uuid = require('uuid')
const sequelize = require('sequelize')

const Conversations = require('../models/conversations.models')
// const Participants = require('../models/participants.models')
const Users = require('../models/users.models')


const findAllConversations = async (userId) => {
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
        where:{
            userId
        }
    })
    return data
}



const createConversation = async (obj) => {
    console.log(obj.title)
    console.log(obj.userId)
    console.log(obj.initParticipants)
    console.log(obj.imageUrl)
    const data = await Conversations.create({
        id: uuid.v4(),
        title: obj.title,
        userId : obj.userId,
        imageUrl: obj.imageUrl,
        // initParticipants: obj.initParticipants
        initParticipants: sequelize.literal(`'${obj.initParticipants}'`)
    })
    // await Participants.create({
    //     conversationId: data.id,
    //     userId: obj.UserId
    // })
    // await Participants.create({
    //     conversationId: data.id,
    //     userId: obj.participantId
    // })
    return data
}

//Se necesita un patch y un delete


module.exports = {
    findAllConversations,
    createConversation

}