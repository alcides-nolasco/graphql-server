import { DataServices } from "../services/DataServices.js";
export const serviciosResolver = {
    Query: {
        serviciosByCiclo: async (_, { ciclo }, contextValue, info) => {
            var p = contextValue.pool;
            console.log("Pool:" + JSON.stringify(p, null, 4));
            var ds = new DataServices(contextValue);
            var servicios = await ds.getServiciosCiclo(ciclo);
            return servicios;
        },
        allServicios: async (_, {}, contextValue) => {
            var ds = new DataServices(contextValue);
            const serviciosall = await ds.getAllServicios();
            return serviciosall;
        },
    },
};
