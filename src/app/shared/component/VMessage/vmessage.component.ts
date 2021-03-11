import { Component, Input } from '@angular/core';

@Component({
    selector: 'mt-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent { 
    @Input() text = ''
}