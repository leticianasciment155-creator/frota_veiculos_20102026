import { veiculosRepository } from "../repositories/veiculo.repositories.js";

class VeiculosService{
    async getall() {
        const veiculosTodos = await veiculosRepository.getall()
        return veiculosTodos
    }

    async getById(id) {
        const veiculosId = await veiculosRepository.getById()
        return veiculosId
    }

    async create({modelo, marca, ano, placa}) {
        const res = await 
        return res.rows[0]
    }

    async delete(id) {
        const res = await pool.query("DELETE FROM veiculos WHERE id = $1", [id])
        return res.rows[0]
    }

    async updateData(id, data) {
        const res = await pool.query("UPDATE veiculos SET modelo = $2, marca = $3, ano = $4, placa = $5 WHERE id = $1 RETURNING *", [id, data.modelo, data.marca, data.ano, data.placa])
        return res.rows[0]
    }

    async updateKnex() {
        const [veiculoAtualizado] = await knex ("veiculos").where ({id}).update(data).returning("");
        return {
            message: "Veiculo atualizado com sucesso!",
            veiculoAtualizado
        }
    }
}

export const veiculosServices = new VeiculosService()