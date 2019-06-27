import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Publication } from '../model/publication';

@Component({
  selector: 'app-publication-alert',
  templateUrl: './publication-alert.component.html',
  styleUrls: ['./publication-alert.component.scss']
})
export class PublicationAlertComponent implements OnInit {
  @Input() publication: Publication;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
