const {Schema, model} = require('mongoose')
const usersSchema = new Schema (

{
    username:{
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "A valid email must be entered!"]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
      ref: 'thought'
    }],

    friends: [{
        type: Schema.Types.ObjectId,
      ref: 'user'
    }],
},
{
toJSON:{
    virtuals: true,
},
}
)

usersSchema.virtual('friendCount').get(function (){
  return this.friends.length
})
const users = model('users', usersSchema);


module.exports = users;