CSV

# Tutorial

https://loizenai.com/nodejs-express-csv-upload-import-database/

# Set-up Postgres

https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL.htm

# Add to PATH

https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools
C:\Program Files\PostgreSQL\13\bin\
C:\Program Files\PostgreSQL\13\lib\

# Login using CLI

psql -U postgres
admin
Note: type the password into the termianl and just hit enter (you cant see anything)

# Create DB

`https://www.youtube.com/watch?v=ldYcgPKEZC8`

CREATE DATABASE csv WITH ENCODING 'UTF8' LC_COLLATE='English_New Zealand' LC_CTYPE='English_New Zealand';
\c csv

\L to see all your Databases CTRL + C to quit
\c [database name] to connect to your db
\dt to see all your Tables
DROP DATABASE mydatabase;

# Create Table

Move inside your db with \c csv
\dt to check if any tables exsist
psql -U postgres -d csv -c 'DROP TABLE IF EXISTS CATs;'

`CREATE TABLE invoices( invoice_id SERIAL PRIMARY KEY, billing_period DATE, job_number INT NOT NULL, company VARCHAR(255), invoice_number VARCHAR(255), amount INT NOT NULL )`

\dt to check if table was made successfuly
SELECT \* FROM invoices

# Edit env.js

const env = {
database: 'csv',
username: 'postgres',
password: 'admin',
host: 'localhost',
dialect: 'postgres',
pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000
}
};

module.exports = env;
