const { expect } = require('chai');
const { db, User, Stock, Transaction, Portfolio } = require('../server/db');
// const app = require('supertest')(require('../server/api'));
const data = require('./data.json');

describe('Stock Portfolio TDD', () => {
  describe('Models', () => {
    describe('Stock', ()=> { 

      describe('filterIexData ', () => {
        const symbols = "AMZN";
        
        it('returns an array of filtered stock', async () => {
          const result = await Stock.filterIexData(data, symbols);
          expect(Array.isArray(result)).to.equal(true);
        });

        it('returns an array with atleast one stock', async ()=> {
          const result = await Stock.filterIexData(data, symbols);
          expect(result).to.have.lengthOf.at.least(1);
        });

        it('each object in the arr should have a name ', ()=> {
          const result =  Stock.filterIexData(data, symbols);
          expect(result[0].name).to.equal('Amazon.com, Inc.');
        });

        it('each object in the arr should have a symbol ', ()=> {
          const result =  Stock.filterIexData(data, symbols);
          expect(result[0].symbol).to.equal('AMZN');
        });

        it('each object in the arr should have a latestPrice ', ()=> {
          const result =  Stock.filterIexData(data, symbols);
          expect(result[0].latestPrice).to.equal(2152.72);
        });

        it('each object in the arr should have a change ', ()=> {
          const result =  Stock.filterIexData(data, symbols);
          expect(result[0].change).to.equal(-59.86);
        });

        it('each object in the arr should have a changePercent ', ()=> {
          const result =  Stock.filterIexData(data, symbols);
          expect(result[0].changePercent).to.equal(-0.02756);
        });
        
        it('each object in the arr should have a open ', ()=> {
          const result =  Stock.filterIexData(data, symbols);
          expect(result[0].open).to.equal(2219.69);
        });
      });
    });
  })
});