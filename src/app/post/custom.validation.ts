import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class CustomValidation {
    static noWhiteSpace(control: AbstractControl) : ValidationErrors {
        if((control.value as string).indexOf(' ') >= 0){
            return {noWhiteSpace: true}
        }
        return null;
    }
}