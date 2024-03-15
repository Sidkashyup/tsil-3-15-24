const mongoose=require('mongoose');

const GreenFormSchema=mongoose.Schema({
    VehicleNumber:{
        type:String,
        required:true
    },
    GRNumber:{
        type:String,
        required:true
    },
    DLNumber:{
        type:String
    },
    DriverNumber:{
        type:Number,
        required:'Driver Mobile Number is required'
    },
    SourceEmail:{
        type:String,
        required: 'Source Email address is required',
    },
    DestinationEmail:{
        type: String,
        required: 'Destination Email address is required',
    },
    SourceNumber:{
        type:Number,
        required:'Source Mobile Number is required'
    },
    DestinationNumber:{
        type:Number,
        required:'Destination Mobile Number is required'
    }
})

mongoose.model("GreenForm",GreenFormSchema);
