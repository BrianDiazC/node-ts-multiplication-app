import { CreateTable } from "../domain/use-case/create-table.use-case";
import { SaveFile } from "../domain/use-case/save-file.use-case";


interface RunOptions {
    base            : number;
    limit           : number;
    showTable       : boolean;
    fileDestination : string;
    fileName        : string;
    
}

export class ServerAPP {

    static run({ base, limit, showTable, fileDestination, fileName }: RunOptions) {
        console.log('Server running...');

        const table = new CreateTable().execute({ base, limit });
        const wasCreate = new SaveFile()
            .execute({
                fileContent:table, 
                fileDestination: fileDestination, 
                fileName: fileName
            });

        if (showTable) console.log(table);

        (wasCreate) 
        ? console.log('File Created')
        : console.error('File not Created');

    }
}