module.exports = (mongoose) => {
    let customerSchema = new mongoose.Schema({
        Customer_Name: String,
        Email: String,
        User_Name: String,
        Balance: Number
    });
    
    customerSchema.methods.speak = function () {
        let greeting = "Data successfully saved to database"
        console.log(greeting);
    }

    const Customer = mongoose.model('Customer', customerSchema);

    return Customer;
}

