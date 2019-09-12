const cli = require('../cli')
const inquirer = require('inquirer')
const assert = require('assert');
// const expect = require('chai').expect;


describe('The Image CLI', () => {
  it('should pass', async () => {
    const response = true;
    assert.equal(response, true);
  });

  it('should parse the arguments and return true', async () => {
    const response = await cli.cli(
      [,'--input=input.csv', '--output=output.csv']
    );   

    assert.equal(response, true);
    // expect(response.trim().split(EOL)).to.have.all.keys(
    //   'ROW',
    //   'PIXEL DIFF',
    //   'ELAPSED'
    // );
  });

  it('should prompt if no input file selected', async () => {
    const response = await cli.cli(
      [,'--input=', '--output=output.csv']
    );   

    //test that the prompt was triggered

  });
});
