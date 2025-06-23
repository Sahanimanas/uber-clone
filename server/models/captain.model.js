const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      min: [3, "must be minimum 3 length"],
    },
    lastname: {
      type: String,
      min: [3, "must be minum 3 length"],
    },
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: { type: String, required: true, min: [3, "must valid color"] },

    plate: {
      type: String,
      required: true,
      min: [3, "must valid color"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "must be 1"],
    },
    vehicleType:{
        type:String,
        required:true,
        enum:['car','fourwheeler','auto']
    }
  },
  location:{
    lat:{
        type:Number,
    },
    lon:{
           type:Number
    }
  }
});

// captainSchema.statics.hashpassword = async(password) =>{
//    const hashedpassword = await bcrypt.hash(password,10);
//    return hashedpassword;

// }

// captainSchema.methods.compare = async (password) =>{
//   return await bcrypt.compare(password, this.password);
// }
const captainmodel= mongoose.model('captain',captainSchema);
module.exports = captainmodel