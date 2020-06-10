const Sequelize = require('sequelize');
const chalk = require('chalk');

console.log(chalk.yellow('Opening database connection'));

const database = 'stock_portfolio_woz_u';
const databaseURL = process.env.DATABASE_URL ||`postgres://localhost:5432/${database}`;
const db = new Sequelize(databaseURL, {
  logging: false
});

module.exports = db;