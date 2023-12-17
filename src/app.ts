import { yarg } from "./confing/plugins/args.plugin";
import { ServerAPP } from "./presetation/server-app";

//La razon de tener la funcion autoinvocada asyncrona es para tener un await
(async () => {
    await main();
})();

async function main() {
    const {b:base, l:limit, s:showTable, d:fileDestination, n:fileName} = yarg;

    ServerAPP.run({base, limit, showTable, fileDestination, fileName});
}