import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js"

export const getMessages = async (conversationId) => {
    return await Message.find({ conversation: conversationId }).sort({ timestamp: 1 });
  };
  
  export const postMessage = async (conversationId, senderId, messageText) => {
    const newMessage = new Message({
      conversation: conversationId,
      sender: senderId,
      message: messageText,
    });
    const savedMessage = await newMessage.save();
  
    await Conversation.findByIdAndUpdate(conversationId, {
      lastMessage: savedMessage._id,
      updatedAt: Date.now(),
    });
  
    return savedMessage;
  };
  
  export const createConversation = async (participants) => {
    const newConversation = new Conversation({ participants });
    return await newConversation.save();
  };