const router = require('express').Router()

const conversationServices = require('./conversations.services')
const passportJWT = require('../middlewares/auth.middleware')

router.route("/")
    .get(conversationServices.getAllConversations)
    .post(passportJWT.authenticate('jwt', {session: false}), conversationServices.postConversation)

module.exports = router