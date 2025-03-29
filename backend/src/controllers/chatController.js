import * as chatServices from "../services/chatServices.js"

export const getNewMessages = async (req, res) => {
    try {
      const { conversationId } = req.params;
      const messages = await chatServices.getMessages(conversationId);
      res.json(messages);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  export const postNewMessage = async (req, res) => {
    try {
      const { conversationId, senderId, message } = req.body;
      const newMessage = await chatServices.postMessage(conversationId, senderId, message);
      res.json(newMessage);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  export const createNewConversation = async (req, res) => {
    try {
      const { participants } = req.body;
      const conversation = await chatServices.createConversation(participants);
      res.json(conversation);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };