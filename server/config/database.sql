CREATE DATABASE csv;

CREATE TABLE invoices(
    invoice_id SERIAL PRIMARY KEY,
    billing_period DATE,
    job_number INT NOT NULL,
    company VARCHAR(255),
    invoice_number VARCHAR(255),
    amount INT NOT NULL
)
