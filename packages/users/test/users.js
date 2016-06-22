//Testing 1, 2... Basic test to make sure mocha is configured.
var expect 	= chai.expect;

describe('Array', function() {
	it('Array.indexOf', function(){
		expect([1,2,3].indexOf(5), 'should return -1 when the value is not present').to.equal(-1);
		expect([1,2,3].indexOf(0), 'should return -1 when the value is not present').to.equal(0);
	});
});