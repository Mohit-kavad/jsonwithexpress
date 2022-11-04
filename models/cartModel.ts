import { DataTypes } from 'sequelize'
import {sequelize} from '../util/database'

export const Cart = sequelize.define('cart',{
  id:{
    type :DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  }
})
