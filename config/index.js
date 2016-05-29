var config = require('./config');

module.exports = {
	getDbConectionString : function() {
		return "mongodb://" + config.uname + ":" + config.pwd + "@ds019491.mlab.com:19491/taskdb"
	}
}