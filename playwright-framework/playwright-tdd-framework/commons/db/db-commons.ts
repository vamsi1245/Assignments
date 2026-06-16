import { Client } from "pg"; // Step 1: Import PostgreSQL client
import config from '../../config/config.json' with {type: 'json'}; // Step 2: Import config

export class dbCommon {

    async getdata(query: string): Promise<any> {
        // Step 3: Create database connection with config details
        const dbConfig = new Client({
            host: config.db.host,
            port: config.db.port,
            user: config.db.user,
            password: config.db.password,
            database: config.db.database
        })

        // Step 4: Connect to database
        await dbConfig.connect();

        // Step 5: Execute the query and get results
        const data = await dbConfig.query(query);

        // Step 6: Close the connection
        await dbConfig.end();

        // Step 7: Return only the rows (not metadata)
        return data.rows;
    }
}

// let db=new dbCommon();
// const query="SELECT CONTENT FROM CREATIO WHERE S_NO=1";
// const data=await db.getdata(query);
// console.log(data);