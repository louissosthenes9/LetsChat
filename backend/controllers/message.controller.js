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

export const getMessages = async (req,res) =>{
    try {
        const {id:userToChat}= req.params;
        const senderId = req.user._id;

        const conversation = await ConversationModel.findOne({
            participants:{$all:[senderId,userToChat]},

        }).populate("messages")


        res.status(200).json(conversation.messages)
       
        if(!conversation) return res.status(200).json([]);

    } catch (error) {
        console.log("Error in the get messsages controller: ", error.message)
        res.status(500).json({
            error:"Internal server error"
        })
        
    }
}