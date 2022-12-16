const router = require('express').Router()
const conversationServices = require('./conversations.services')
const messageService = require('../messages/messages.services')
const passportJWT = require('../middlewares/auth.middleware')
const participantValidate = require('../middlewares/participantValidate.middleware')

router.route("/")
    .get(passportJWT.authenticate('jwt', {session: false}), conversationServices.getAllConversations)
    .post(passportJWT.authenticate('jwt', {session: false}), conversationServices.postConversation)

router.route('/:conversation_id')
    .get(passportJWT.authenticate('jwt', {session: false}), conversationServices.getAllConversations)

router.post('/:conversation_id/messages')
    //?Hay que ver por que da error en esa linea de codigo     
//.post(passportJWT.authenticate('jwt', {session: false}), participantValidate, messageService.postMessage)

module.exports = router