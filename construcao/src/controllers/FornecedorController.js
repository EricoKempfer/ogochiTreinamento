import FornecedorModel from '../models/FornecedorModel.js';
import  jwt  from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const get = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
        
        if (!id) {
            const response = await FornecedorModel.findAll({
                order: [['id', 'asc']],
            });
            return res.status(200).send({
                message: 'Registros carregados com sucesso',
                data: response,
            });
        }
        const response = await FornecedorModel.findOne({ where: { id: id } });

        if (!response) {
            return res.status(400).send({
                message: `Nenhum registro com id ${id}`,
                data: [],
            });
        }

        return res.status(200).send({
            message: 'Registro carregado com sucesso',
            data: response,
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Ops! Ocorreu um erro',
            error: error.message,
        });
    }
};

const create = async (dados, res) => {

    const {
        nome,
        cpf,
        senha,
    } = dados;

    let hashPassword = await bcrypt.hash(senha, 10);

    const response = await FornecedorModel.create({
        nome,
        cpf,
        hashPassword
    });

    return res.status(200).send({
        type: 'success',
        message: 'Cadastro realizado com sucesso',
        data: response,
    });
};

const update = async (id, res, dados = {}) => {
    const response = await FornecedorModel.findOne({ where: { id: id } });

    if (!response) {
        return res.status(400).send({
            message: `Nenhum registro com id ${id} para atualizar`,
            data: [],
        });
    }
    Object.keys(dados).forEach((field) => response[field] = dados[field]);

    await response.save();
    return res.status(200).send({
        message: `Registro id ${id} atualizado com sucesso`,
        data: response,
    });
};

const persist = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id) {
            return await create(req.body, res);
        }

        return await update(id, res, req.body);
    } catch (error) {
        return res.status(500).send({
            message: 'Ops! Ocorreu um erro',
            data: error.message,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
        if (!id) {
            return res.status(400).send({
                message: 'Informe um id para deletar o registro',
                data: [],
            });
        }

        const response = await FornecedorModel.findOne({ where: { id: id } });
        console.log(response);
        
        if (!response) {
            return res.status(400).send({
                message: `Nenhum registro com id ${id} para deletar`,
                data: [],
            });
        }

        await response.destroy();
        return res.status(200).send({
            message: `Registro id ${id} deletado com sucesso`,
            data: [],
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Ops! Ocorreu um erro',
            error: error.message,
        });
    }
};
export default {
    get,
    persist,
    destroy,
};