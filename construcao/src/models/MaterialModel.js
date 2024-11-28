import { sequelize } from "../config";
import {DataTypes} from "sequelize";


const MaterialModel = sequelize.define(
    "materiais",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.TEXT,
        },
        tipo: {
            type: DataTypes.TEXT,
        },
        valor: {
            type: DataTypes.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default MaterialModel;