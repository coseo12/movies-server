import { sequelize } from '../config/connection';
import Sequelize, { Model } from 'sequelize';

export class UserVO extends Model<UserVO> {
  id: number;
  email: string;
  pass: string;
  nickname: string;
  created_at: Date;
}

UserVO.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    pass: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    nickname: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    created_at: {
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
