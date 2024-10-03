import { pool } from "./database.js";
import companiesData from "../data/companies.js";

const createCompaniesTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS companies;

    CREATE TABLE IF NOT EXISTS
            companies(
                id SERIAL PRIMARY KEY,
                company_name VARCHAR(128) NOT NULL,
                logo_url VARCHAR(128) NOT NULL,
                mission_statement TEXT NOT NULL,
                usd_spend_lobbying_2021 INTEGER NOT NULL
            )`;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 companies table created successfully');
    } catch (error) {
        console.log('error creating companies table', error);
    }
};

const seedCompaniesTable = async () => {
    await createCompaniesTable();
    companiesData.forEach((company) => {
        const insertQuery = {
            text: 'INSERT INTO companies (company_name, logo_url, mission_statement, usd_spend_lobbying_2021) VALUES ($1, $2, $3, $4)'
        };

        const values = [
            company.company_name,
            company.logo_url,
            company.mission_statement,
            company.usd_spend_lobbying_2021
        ];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting company data', err);
                return;
            }

            console.log(`✅ ${company.company_name} added successfully`);
        });
    });
};

seedCompaniesTable();