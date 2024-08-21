import { DataTypes } from 'Sequelize'
import db from '../config/db.js'

const Usuario = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(60),
    },
    confirmado: {
        type: DataTypes.BOOLEAN
    }

})

export default Usuario