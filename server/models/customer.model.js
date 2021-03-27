module.exports = (sequelize, Sequelize) => {
	const Model = sequelize.define('cat', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },
	  job: {
			type: Sequelize.STRING
	  },
	  company: {
			type: Sequelize.STRING
	  },
	  invoice_number: {
			type: Sequelize.STRING
	  },
	  assigned_cost_code: {
			type: Sequelize.STRING
	  },
	  amount_excl_gst: {
			type: Sequelize.STRING
	  }
	});
	return Model;
}