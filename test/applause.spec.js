var should = require('should')
  , applause = require('../applause.js');

describe('applause', function() {
	describe('#init(file)', function() {
		beforeEach(function(done) {
			applause.use({
				host: 'localhost',
				port: 80
			}, done);
		});
		it('should use the configuration object', function() {
			applause.conf.host.should.equal('localhost');
			applause.conf.port.should.equal(80);
		});
		it('should use a configuration file', function(done) {
			applause.use('test/applause.json', function(err, res) {
				if (err) throw err;
				applause.conf.host.should.equal('127.0.0.1');
				applause.conf.port.should.equal(1337);
				done();
			});
		});
	});
});