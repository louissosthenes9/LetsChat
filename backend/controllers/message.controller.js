import ConversationModel from "../models/conversation.model.js";
import MessageModel from "../models/message.model.js";

export const sendMessage = async  (req, res) => {

    try{
        const {message} = req.body;
        const {id:receiverId}= req.params;
        const senderId = res._id;
        let conversation=  await ConversationModel.findOneAndUpdate({
            participants:{$all:[senderId,receiverId]},
        })


        if(!conversation){
            conversation = await ConversationModel.create({
                participants:{$all:[senderId,receiverId]},
            })
        }

        const newMessage = new MessageModel({
            senderId:senderId,
            message:message,
            receiverId:receiverId,

        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        res.status(201).json(newMessage)
    }catch(err) {

        console.log("Error in sendMessage:",err)
        res.status(400).json({
            error: "Error sending message"
        });
    }
}