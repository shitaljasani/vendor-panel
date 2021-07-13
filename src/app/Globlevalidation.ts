import { Injectable } from '@angular/core';

Injectable()
export class Globals{

    
    onlyallowNumber(e){
        e = (e) ? e : window.event;
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}

