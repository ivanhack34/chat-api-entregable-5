const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)

    Users.hasTo(Participants)
    Participants.belongsTo(Users)

    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)

    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)
}

module.exports = initModels