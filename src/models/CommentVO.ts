import { sequelize } from '../config/connection';
import Sequelize, { Model } from 'sequelize';

export class CommentVO extends Model<CommentVO> {
  id: number;
  commenter: number;
  comment: string;
  create_at: Date;
}

CommentVO.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    commenter: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: false,
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
