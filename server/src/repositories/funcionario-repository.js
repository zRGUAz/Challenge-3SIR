const oracledb = require('oracledb');

const conectar = async () => {
    try {
        const con = oracledb.getConnection({
            user: 'RM93391',
            password: '280904',
            connectionString: 'ORACLE.FIAP.COM.BR/ORCL',
            connectTimeout: 10000
        });
        console.log('Conexão com o banco de dados realizada com sucesso.');
        global.connection = con;
        return con;

    } catch (err) {
        console.log('Erro ao realizar conexão com o banco de dados.', err);
    }
}

exports.get = async () => {
    try {
        const con = await conectar();
        const result = await con.execute('SELECT * FROM sprint_funcionarios');
        return result.rows;
    } catch (err) {
        throw err;
    }
}

exports.create = async (data) => {
    try {
        const con = await conectar();
        con.execute('INSERT INTO sprint_funcionarios VALUES(:id_funcionario, :nome, :sobrenome, :email, :senha, :id_cargo, :id_departamento)',
            [data.id_funcionario, data.nome, data.sobrenome, data.email, data.senha, data.id_cargo, data.id_departamento]);
    } catch (err) {
        throw err;
    }
}

exports.update = async (id, data) => {
    try {
        const con = await conectar();
        con.query('UPDATE sprint_funcionarios SET nome = :nome, sobrenome = :sobrenome, email = :email, senha = :senha, id_cargo = :id_cargo, id_departamento = :id_departamento WHERE id_funcionario = :id_funcionario',
            [data.nome, data.sobrenome, data.email, data.senha, data.id_cargo, data.id_departamento, data.id_funcionario]);
    } catch (err) {
        throw err;
    }
}

process.on('SIGINT', () => {
    con.close((err) => {
        if (err) {
            console.log('Erro ao finalizar conexão com o banco de dados.', err);
        } else {
            console.log('Conexão ao banco de dados finalizada com sucesso.');
        }
    });
});