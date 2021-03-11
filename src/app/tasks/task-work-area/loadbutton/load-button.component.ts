import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-ldbtn',
  templateUrl: './load-button.component.html'  
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
