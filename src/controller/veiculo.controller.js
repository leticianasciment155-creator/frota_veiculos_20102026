import { veiculosServices } from "../services/veiculos.Services.js";

class VeiculoController{
    async getAll(req, res) {
        try {
            const veiculos = await veiculosServices.getall();
            res.json(veiculos);
        }catch (error) {
        
            console.error (error);
        }
    }; 

    async getById(req, res) {
    const veiculoId = req.params.id;
        try {
            const veiculos = await veiculosServices.getById(veiculoId);
            res.json(veiculos);
        }catch (error) {
        
            console.error (error);
        }
    };

    async create(req, res) {
        try {
            const veiculos = await veiculosServices.create(req.body);
            res.status(201).json(veiculos);
        }catch (error) {
            console.error (error);
        }
    };

    async delete(req, res) {
        const veiculoId = req.params.id
        try {
            const veiculo = await veiculosServices.delete(veiculoId);
            res.status(201).json(veiculo);
        } catch (error) {
            console.error (error);
        }
    };

    async updateData(req, res) {
        const veiculoId = req.params.id
        try {
            const veiculo = await veiculosServices.updateData(veiculoId, req.body);
            res.status(201).json(veiculo);
        } catch (error) {
            console.error (error);
        }
    };

    async updateKnex(req, res) {
        const veiculoId = req.params.id
        try {
            const veiculo = await veiculosServices.updateKnex(veiculoId, req.body);
            res.status(201).json(veiculo);
        } catch (error) {
            console.error (error);
        }
    }
}

export const veiculoController = new VeiculoController()