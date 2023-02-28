module.exports = (app, mongoose) => {
    const fs = require('fs');
    const path = require('path');
    
    const basename = path.basename(__filename);
    
    let db = {};
    
    fs.readdirSync(__dirname)
      .filter(
        (file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
      )
      .forEach(async (file) => {
        console.log(file);
        const model = await require(`./${file}`)(mongoose);
        let name = file.split(".js")[0];
        db[name] = model;
      });
    
    Object.keys(db).forEach((modelName) => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });    
    
    // console.log(db);

    global.DB = db;
    return null
}


