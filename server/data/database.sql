CREATE DATABASE csv;

CREATE TABLE invoices(
    InvoiceID SERIAL PRIMARY KEY,
    Type VARCHAR(255),
    ContactID VARCHAR(255),
    Date DATE,
    DueDate DATE,
    DueDateString VARCHAR(255),
    LineAmountTypes VARCHAR(255),
    Description VARCHAR(255),
    Quantity VARCHAR(255),
    UnitAmount NUMERIC
    AccountCode NUMERIC
    job_number INT NOT NULL,
)

CREATE TABLE contacts(
    ContactID SERIAL PRIMARY KEY,
    ContactStatus VARCHAR(255),
    Name VARCHAR(255),
    FirstName DATE,
    LastName DATE,
    EmailAddress VARCHAR(255),
    BankAccountDetails INT,
    TaxNumber INT,
    AccountsReceivableTaxType VARCHAR(255),
    AccountsPayableTaxType VARCHAR(255),
    AddressType VARCHAR(255),
    AddressLine1 VARCHAR(255),
    City VARCHAR(255),
    PostalCode INT,
    AttentionTo VARCHAR(255),
    AddressType VARCHAR(255),
    PhoneType VARCHAR(255).
    PhoneNumber VARCHAR(255),
    PhoneAreaCode VARCHAR(255),
    PhoneCountryCode VARCHAR(255),
    UpdatedDateUTC DATE,
    IsSupplier BOOLEAN,
    IsCustomer BOOLEAN,
    DefaultCurrency VARCHAR(255)
)