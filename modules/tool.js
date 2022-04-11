module.exports = {
    format: (sql , values) => {
        if (typeof sql     !== "string")   return "Error";
        if (typeof values  !== "object")   return "Error";

        let newSQL = "";

        for (let i = 0; i < sql.length; ++i){
            if (sql[i] === "?"){
                if (values.length === 0) return "Error";
                
                if (sql[i+1] === "?"){
                    newSQL += `'` + values.shift() + `'`;
                    ++i;
                } else {
                    newSQL += values.shift();
                }
            } else {
                newSQL += sql[i];
            }
        }

        return newSQL;
    },
  
    condition_merger: (sql , values) => {
        if (typeof sql     !== "string")   return "Error";
        if (typeof values  !== "object")   return "Error";

        let where = [];

        Object.keys(values).forEach(key => {
            if (values[key] !== "") where.push(key + " = " + values[key]);
        });

        if (where.length > 0) sql += " where ";

        sql += where.join(" and ");

        return sql;
    }
}