import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import { SequelizeMethod } from 'sequelize/types/utils';
import { sequelize } from '../util/database';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

// interface IUser extends Model<UserAttributes, UserCreationAttributes> {}

const User: ModelDefined<UserAttributes, UserCreationAttributes> =
  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

export { User };
