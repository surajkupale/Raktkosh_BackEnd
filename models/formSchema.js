module.exports = (mongoose) => {
    let formSchema = new mongoose.Schema({
        Sender_Name: String,
        Receiver_Name: String,
        Amount: String
    });
    
    formSchema.methods.speak = function () {
        let greeting = "Data successfully saved to database"
        console.log(greeting);
    }

    const Form = mongoose.model('Form', formSchema);


    return Form;
}

