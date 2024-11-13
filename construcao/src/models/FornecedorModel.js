import { sequelize } from "../config";
import {DataTypes} from "sequelize";


const FornecedorModel = sequelize.define(
    "fornecedores",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.TEXT,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default FornecedorModel;