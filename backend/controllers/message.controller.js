import ConversationModel from "../models/conversation.model.js";
import MessageModel from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id.toString();

        // Find and update the conversation, or create it if it doesn't exist
        let conversation = await ConversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        // If no conversation, create a new one
        if (!conversation) {
            conversation = new ConversationModel({
                participants: [senderId, receiverId],
                messages: []
            });
        }
        // Create the new message
        const newMessage = new MessageModel({
            senderId: senderId,
            message: message,
            receiverId: receiverId
        });

        await newMessage.save();

        // Add the new message to the conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        res.status(201).json(newMessage);
    } catch (err) {
        console.log("Error in sendMessage:", err);
        res.status(400).json({
            error: "Error sending message"
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChat } = req.params;
        const senderId = req.user._id.toString();

        const conversation = await ConversationModel.findOne({
            participants: { $all: [senderId, userToChat] }
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json([]);
        }
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in the getMessages controller:", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}