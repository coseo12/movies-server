import { sequelize } from '../config/connection';
import Sequelize, { Model, ForeignKeyConstraintError } from 'sequelize';

export class CommentVO extends Model<CommentVO> {
  id: number;
  movies_id: number;
  commenter: number;
  comment: string;
  score: number;
  created_at: Date;
}

CommentVO.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    movies_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    commenter: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    score: {
      type: Sequelize.INTEGER,
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
    modelName: 'CommentVO',
    tableName: 'comment',
  },
);
