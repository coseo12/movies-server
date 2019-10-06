import { sequelize } from '../config/connection';
import Sequelize, { Model } from 'sequelize';

export class UserVO extends Model<UserVO> {
  id: number;
  name: string;
  age: number;
  married: number;
  comment: string;
  create_at: Date;
}

UserVO.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    create_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('now()'),
    },
  },
  {
    sequelize,
    modelName: 'UserVO',
    tableName: 'users',
  },
);
