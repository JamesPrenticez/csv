import React from 'react'

export default class Homepage extends React.Component {
    render() {
        return (
            <>
            <div className='container'>
                <h1>Welcome</h1>
                <h4>Getting Started</h4>
                <p>Download the example CSV files here:</p>
                <ul>
                    <li><a href='/data/employee.csv' download>Employee</a></li>
                    <li><a href='/data/timesheets.csv' download>Timesheets</a></li>
                    <li><a href='/data/contacts.csv' download>Contacts</a></li>
                    <li><a href='/data/invoices.csv' download>Invoices</a></li>
                </ul>

                <p>Input you data to match the example file</p>
                <p>Upload your file to CSV machine</p>
                <p>Data will be stored into the Postgres SQL database</p>
                <p>Head over to the Information tab to query the DB</p>
            </div>
            </>
        )
    }
}