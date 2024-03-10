import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //one who is subscribing
        ref: "User", // reference to the User model
        required: true
    },
    channel: {
        type: Schema.Types.ObjectId, //one whom "subscriber" is subscribing
        ref: "User", // reference to the User model
        required: true 
    }
}, {timestamps: true})

export const subscription = mongoose.model("Subscription", subscriptionSchema)