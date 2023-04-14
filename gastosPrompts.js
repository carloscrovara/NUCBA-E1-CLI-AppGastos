import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNuevoGasto() {
    return await inquirer.prompt(nuevoGastoPrompt);
}

const nuevoGastoPrompt = [
    {
        type: "number",
        name: "importe",
        message: "Importe: $",
    },    
    {
        type: "input",
        name: "descripcion",
        message: "Descripción:",
    },
    {
        type: "date",
        name: "fecha_gasto",
        message: "Fecha:",
        locale: "es-AR",
        format: { month: "long", hour: undefined, minute: undefined },
    },
    {
        type: "input",
        name: "categoria",
        message: "Categoría:",
    },
];