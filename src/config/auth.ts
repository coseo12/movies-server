interface conn {
  development: content;
  test: content;
  production: content;
}
interface content {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
  operatorsAliases: boolean;
}

export const conn: conn = {
  development: {
    username: 'sco',
    password: 'sco1q2w#$',
    database: 'nodejs',
    host: '192.168.0.9',
    port: 3307,
    dialect: 'mariadb',
    operatorsAliases: false,
  },
  test: {
    username: 'sco',
    password: 'sco1q2w#$',
    database: 'nodejs',
    host: '192.168.0.9',
    port: 3307,
    dialect: 'mariadb',
    operatorsAliases: false,
  },
  production: {
    username: 'sco',
    password: 'sco1q2w#$',
    database: 'nodejs',
    host: '192.168.0.9',
    port: 3307,
    dialect: 'mariadb',
    operatorsAliases: false,
  },
};
