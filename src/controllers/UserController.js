const knex = require('../database')

module.exports = {
    async index(req, res) { 
        const results = await knex('user')
        .where('deleted_at', null)

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { username } = req.body;
    
            // Verifica se já existe um usuário com o mesmo username
            const existingUser = await knex('user').where({ username }).first();
            if (existingUser) {
                return res.status(400).json({ error: 'Já existe um usuário com este nome de usuário' });
            }
    
            // Se não existir, cria o usuário
            await knex('user').insert({ username });
    
            return res.status(201).json({ message: 'Usuário criado com sucesso' });
        } catch (error) {
            next(error);
        }
    },
    
    async update(req, res, next) {
        try {
            const { username } = req.body
            const { id } = req.params
            
            
            await knex('user')
            .update({ username })
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params;
    
            // Verifica se o usuário existe antes de deletá-lo
            const existingUser = await knex('user').where({ id }).first();
            if (!existingUser) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
    
            // Deleta o usuário
            await knex('user')
                .where({ id })
                .update('deleted_at', new Date());
    
            return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            next(error);
        }
    },
}