const {Schema, model, Types} = require('mongoose')
// const moment = require ("moment");

const reactionSchema = new Schema (
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            default:()=> new Types.objectId(),
        },
        reactionBody:{
            type: String,
            required: true,
            maxlength:280,
            minlength:2,
        },
        username:{
            type:String,
            required: true,
        },
        createdAt:{
            type:Date,
            default:Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        }
    },
    {
        toJSON:{
            virtuals:true,
            getters:true,
        },
    }
);

const thoughtsSchema = new Schema (
   {
    thoughtsText:{
        type:String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username:{
        type: String,
        required: true,
    },
    reactions:[reactionSchema]
    
   },
 {  toJSON : {
    getters:true,
    
   } }
)
thoughtsSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
  const thoughts = model('thoughts', thoughtsSchema )

module.exports= thoughts