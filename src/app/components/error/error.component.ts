import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent implements OnInit {

  @Input() test:String;
  @ViewChild('texto') mitexto:any;

  constructor() { }


  ngOnInit() {

    var total = this.mitexto.nativeElement.textContent;

    console.log(total)
  }

}
