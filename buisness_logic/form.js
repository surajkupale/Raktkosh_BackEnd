formFunction = async() =>{
    
    const data = await DB.formSchema.find({});
    console.log(data);

}

module.exports = {formFunction};