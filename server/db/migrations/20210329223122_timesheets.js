exports.up = (knex, Promise) => {
    return knex.schema.createTable('pagination', (table) => {
        table.id('id').primary()
        table.integer('page').notNullable();
        table.integer('pageSize').notNullable();
        table.integer('pageCount').notNullable();
        table.integer('itemCount').notNullable();
    })  
    // .createTable('timesheets', (t) => {
    //     t.id('id').primary()
    //     t.string('timesheetID', 255).notNullable();
    //     t.string('payrollCalenderID', 255).notNullable();
    //     t.string('employeeID', 255).notNullable();
    //     t.date('startDate').notNullable();
    //     t.date('endDate').notNullable();
    //     t.string('status', 255).notNullable();
    //     t.string('totalHours', 255).notNullable();
    //     t.date('updatedDateUTC').notNullable();
    //     t.jsonb('timesheetLines').notNullable();
    //     timesheetLines
    //         .integer('page_id')
    //         .unsigned()
    //         .notNullable()
    //         .references('id')
    //         .inTable('pagination')
    // })  
    // .createTable('timesheetLines', (t) => {
    //     t.increments('id').primary()
    //     t.string('timesheetLineID', 255).notNullable();
    //     t.date('date').notNullable();
    //     t.string('earningsRateID').notNullable();
    //     t.string('trackingItemID').notNullable();
    //     t.string('numberOfUnits').notNullable();
    // })  
    // .createTable('timesheetsTable', (t) => {
    //     t.increments('id').primary()
    //     t.string('providerName', 255).notNullable();
    //     t.date('dateTimeUTC').notNullable();
    //     t.string('httpStatusCode').notNullable();
    //     t.jsonb('pagination').notNullable();
    //     pagination
    //         .integer('page_id')
    //         .unsigned()
    //         .notNullable()
    //         .references('id')
    //         .inTable('pagination')
    //     t.string('problem').notNullable()
    //     timesheets
    //         .integer('timesheet_id')
    //         .unsigned()
    //         .notNullable()
    //         .references('id')
    //         .inTable('timesheets')
    //     })  
};


exports.down = (knex, Promise) => {
    return knex.schema.dropTable('pagination')
    // .then(knex.schema.dropTable('timesheetLines'))
    // .then(knex.schema.dropTable('timesheets'))
    // .then(knex.schema.dropTable('pagination'))
};