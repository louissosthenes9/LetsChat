const mongoose = import('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: {
        ref: 'User',
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },

    receiverId: {
        ref: 'User',
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    message:{
         type:String,
        required:true
    }
},{timestamps: true});

const Message = mongoose.model('Message', messageSchema);
export default Message;