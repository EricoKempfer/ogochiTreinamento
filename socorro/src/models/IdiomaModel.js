import { sequelize } from "../config";
import {DataTypes} from "sequelize";


const IdiomaModel = sequelize.define(
    "idioma",
    {
        idIdioma: {
            field:'id_idioma',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nivelIdioma: {
            field:'nivel_idioma',
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default IdiomaModel;