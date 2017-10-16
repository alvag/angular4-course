import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any) {
        alert("Error inesperado");
        console.log(error);
    }

}
