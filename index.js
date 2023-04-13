import { get, save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNuevoGasto } from "./gastosPrompts.js";

const main = async () => {
    let run = true;
    while (run) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "opciones",
                message: "Acciones:",
                choices: [
                    { value: 1, name: "Traer todos los gastos" },
                    { value: 2, name: "Crear nuevo gasto" },
                    { value: 99, name: "SALIR" },
                ],
            },
        ]);
        switch (action.opciones) {
            case 1:
            await traerTodosLosGastos();
            break;
            case 2:
            await crearNuevoGasto();
            break;
            case 99:
            run = false;
            break;
            default:
            run = false;
            break;
        }
    }
    console.log("Adiós");
};

main();

async function crearNuevoGasto() {
    console.log("Agregando nuevo gasto:");
    const nuevoGastoData = await promptNuevoGasto();

    console.log("Nuevo gasto a guardar: ", nuevoGastoData);

    const currentUsers = await get("gastos");

    //Guardo nuevo gasto
    currentUsers.push(nuevoGastoData);
    await save("gastos", currentUsers);
}

async function traerTodosLosGastos() {
    const currentUsers = await get("gastos");
    console.log(currentUsers);
}