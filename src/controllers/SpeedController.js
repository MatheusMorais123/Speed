const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            // Lista todas as corridas não canceladas
            const corridas = await knex('speed').whereNull('cancelled_at');
            return res.json(corridas);
        } catch (error) {
            next(error);
        }
    },
    async create(req, res, next) {
        try {
            const { data_corrida , user_id } = req.body

            await knex('speed').insert({
                data_corrida,
                user_id,
                created_at: new Date(),
            })

            return res.status(201).json({ message: 'Corrida criada com sucesso' });
        } catch (error) {
            next(error)
        }
    },
    async cancel(req, res, next) {
        try {
            const { corrida_id } = req.params;
    
            // Verifica se a corrida existe e não foi cancelada
            const corrida = await knex('speed')
                .where({ id: corrida_id, cancelled_at: null })
                .first();
            
            if (!corrida) {
                return res.status(404).json({ error: 'Corrida não encontrada ou já cancelada' });
            }
    
            // Cancela a corrida no banco de dados
            await knex('speed')
                .where({ id: corrida_id })
                .update({ cancelled_at: new Date() });
    
            return res.json({ message: 'Corrida cancelada com sucesso' });
        } catch (error) {
            next(error);
        }
    },
    async cancel(req, res, next) {
        try {
            const { corrida_id } = req.params;
    
            // Verifica se a corrida existe e não foi cancelada
            const corrida = await knex('speed')
                .where({ id: corrida_id, cancelled_at: null })
                .first();
            
            if (!corrida) {
                return res.status(404).json({ error: 'Corrida não encontrada ou já cancelada' });
            }
    
            // Cancela a corrida no banco de dados
            await knex('speed')
                .where({ id: corrida_id })
                .update({ cancelled_at: new Date() });
    
            return res.json({ message: 'Corrida cancelada com sucesso' });
        } catch (error) {
            next(error);
        }
    },
            
    async findById(req, res, next) {
        try {
            const { id } = req.params;
    
            // Busca a corrida pelo ID na tabela de corridas
            const corrida = await knex('speed').where({ id }).first();
    
            // Verifica se a corrida foi encontrada
            if (!corrida) {
                return res.status(404).json({ error: 'Corrida não encontrada' });
            }
    
            // Retorna a corrida encontrada
            return res.json(corrida);
        } catch (error) {
            next(error);
        }
    }
};
