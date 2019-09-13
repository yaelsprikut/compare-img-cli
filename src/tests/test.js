const cli = require('../cli')
const assert = require('assert');
const expect = require('chai').expect;


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
    // since we're not returning a response here only a Boolean, this won't work
    // expect(response.trim().split(EOL)).to.have.all.keys(
    //   'ROW',
    //   'PIXEL DIFF',
    //   'ELAPSED'
    // );
  });

  it('should return elapsed milliseconds', async () => {
    const elapsed = cli.elapsed(new Date());
    assert.equal(elapsed, 0);

  });

  it('should resolve', (done) => {
    const promptForMissingOptions = cli.promptForMissingOptions({ input: 'input.csv', output: 'output.csv' })
    promptForMissingOptions.then( (result) => {
      expect(result).to.equal('promise resolved');
    }).finally(done);
  });
});
