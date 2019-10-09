import { sequelize } from '../config/connection';
import Sequelize, { Model } from 'sequelize';

export class MoviesVO extends Model<MoviesVO> {
  id: number;
  title: string;
  content: string;
  created_at: Date;
}

MoviesVO.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING(100),
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
    modelName: 'MoviesVO',
    tableName: 'movies',
  },
);
