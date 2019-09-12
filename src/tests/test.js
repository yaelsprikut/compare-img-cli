const cli = require('../cli')
const inquirer = require('inquirer')
const assert = require('assert');
// const expect = require('chai').expect;
// process.argv.push('--input', 'file.csv');


describe('The Image CLI', () => {
  it('should pass', async () => {
    const response = true;
    assert.equal(response, true);
  });

  it('should parse the arguments', async () => {
    const response = await cli.cli(
      [,'--input=input.csv', '--output=output.csv']
    );   
    console.log("THE RESPONSE", response); 
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

    //

  });
});
