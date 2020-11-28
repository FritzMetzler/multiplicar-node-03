const fs = require('fs');


let elpepe = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es un número D:');
            return;
        }

        let data = '';

        for (let i = 0; i <= 10; i++) {

            data += `${base} * ${i} = ${base*i} \n`;


            fs.writeFile(`tablas/tabla-base-${base}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-base-${base}.txt`)
            });
        }


    });
}

module.exports = {
    elpepe
}