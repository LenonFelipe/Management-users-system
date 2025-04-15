const sequelize = require('./config/db');
const User = require('./models/User');

(async () => {
    try {
        await sequelize.authenticate(); 
        console.log("Conexão estabelecida com sucesso");

        await sequelize.sync({ after: true });
        console.log("Modelos sincronizados com o banco de dados"); 

        process.exit();
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1);
    }
})();