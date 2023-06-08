import oracledb from 'oracledb';
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.stmtCacheSize = 40;
import dotenv from 'dotenv';
dotenv.config();
const { DBUSER, PASSWORD, CONNECTION_STRING } = process.env;
export const getConnectionDB = async () => {
    try {
        return await oracledb.getConnection({ user: DBUSER, password: PASSWORD, connectionString: CONNECTION_STRING });
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
};
export const getPool = async () => {
    try {
        return await oracledb.createPool({ user: DBUSER, password: PASSWORD, connectionString: CONNECTION_STRING });
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
};
const connectDB = async () => {
    getPool().then(pool => {
        return pool;
    }).catch((err) => {
        console.log("err", err);
    });
};
export { connectDB };
