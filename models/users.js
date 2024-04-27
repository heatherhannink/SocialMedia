const {Schema, model} = require('mongoose')
const userSchema = new Schema (
  
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
    // thoughts: [{
    //     type: Schema.Types.ObjectId,
    //   ref: 'thoughts'
    // }],

    // friends: [{
    //     type: Schema.Types.ObjectId,
    //   ref: 'users'
    // }],
},
{
toJSON:{
    virtuals: true,
},
}
)

// userSchema.virtual('friendCount').get(function (){
//   return this.friends.length
// })
const users = model('users', userSchema);
module.exports= users;