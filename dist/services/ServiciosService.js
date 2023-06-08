//import {oracledb}  from 'oracledb';
import oracledb from 'oracledb';
export async function getServiciosCiclo(ciclo) {
    return new Promise(async (resolve, reject) => {
        let connection;
        try {
            // Configurar la conexión a la base de datos Oracle
            connection = await oracledb.getConnection({
                user: "ifsap",
                password: "Epm2020sur",
                connectString: "192.168.132.51:1524/DBSISADMDES",
            });
            // Realizar la consulta a la vista V_DS_NUEVOS_SERVICIOS
            const query = `select idusuario,
      codtramite,
      modificacionred,
      fechasolicitud,
      fechapago,
      fechaconexion,
      costoconexion,
      ciclocierre,
      sec_nis,
      sec_mod,
      usuario_proc,
      fecha_proc FROM V_DS_NUEVOS_SERVICIOS WHERE CICLO = :ciclo`;
            const result = await connection.execute(query, [ciclo], { outFormat: oracledb.OUT_FORMAT_OBJECT });
            console.error(result.rows);
            resolve(result.rows);
        }
        catch (error) {
            console.error("Error al obtener los servicios:", error);
            reject(error);
            throw error;
        }
        finally {
            // Cerrar la conexión a la base de datos
            if (connection) {
                try {
                    await connection.close();
                }
                catch (error) {
                    console.error("Error al cerrar la conexión:", error);
                }
            }
        }
    });
    // En este caso, utilizamos el paquete oracledb para realizar la conexión y consulta a la base de datos Oracle. La función getServiciosCiclo recibe el ciclo como argumento y ejecuta una consulta SQL utilizando la vista V_DS_NUEVOS_SERVICIOS. Luego, devuelve el resultado de la consulta. Asegúrate de tener el paquete oracledb instalado en tu proyecto.
}
// Otro servicio 
export async function getAllServicios() {
    return new Promise(async (resolve, reject) => {
        let connection;
        try {
            // Configurar la conexión a la base de datos Oracle
            connection = await oracledb.getConnection({
                user: "ifsap",
                password: "Epm2020sur",
                connectString: "192.168.132.51:1524/DBSISADMDES",
            });
            // Realizar la consulta a la vista V_DS_NUEVOS_SERVICIOS
            const query = `select idusuario,
      codtramite,
      modificacionred,
      fechasolicitud,
      fechapago,
      fechaconexion,
      costoconexion,
      ciclocierre,
      sec_nis,
      sec_mod,
      usuario_proc,
      fecha_proc FROM V_DS_NUEVOS_SERVICIOS WHERE CICLO = :ciclo`;
            const result = await connection.execute(query, ["202211"], { outFormat: oracledb.OUT_FORMAT_OBJECT });
            console.error(result.rows);
            resolve(result.rows);
        }
        catch (error) {
            console.error("Error al obtener los servicios:", error);
            reject(error);
            throw error;
        }
        finally {
            // Cerrar la conexión a la base de datos
            if (connection) {
                try {
                    await connection.close();
                }
                catch (error) {
                    console.error("Error al cerrar la conexión:", error);
                }
            }
        }
    });
    // En este caso, utilizamos el paquete oracledb para realizar la conexión y consulta a la base de datos Oracle. La función getServiciosCiclo recibe el ciclo como argumento y ejecuta una consulta SQL utilizando la vista V_DS_NUEVOS_SERVICIOS. Luego, devuelve el resultado de la consulta. Asegúrate de tener el paquete oracledb instalado en tu proyecto.
}
