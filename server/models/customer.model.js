module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('invoices', {	
	  invoice_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      },
	  billing_period: {
			type: Sequelize.DATE
	  },
	  job_number: {
			type: Sequelize.INTEGER
	  },
	  company: {
			type: Sequelize.STRING
	  },
	  invoice_number: {
			type: Sequelize.STRING
	  },
	  amount: {
			type: Sequelize.INTEGER
	  }
	});
	return Customer;
}