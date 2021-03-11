import { AbstractControl } from '@angular/forms';

export function dataValidaValidator(control: AbstractControl) {

    let data = new Date();
    const controlDate = new Date(control.value);    

    controlDate.setDate(controlDate.getDate() + 1);
    controlDate.setHours(controlDate.getHours() + 1);
 
    if (controlDate < data){        
        return { dataValida: true}
    }

    return null;
}