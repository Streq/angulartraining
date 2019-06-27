import { Component, OnInit } from '@angular/core';
import { Publication } from './model/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] = [
    {
      id: 1,
      title: 'MAF Adventures',
      description: 'A fantastic journey through MAF',
      date: new Date('1970-09-25T00:00:00'),
      price: 0.15
    },
    {
      id: 2,
      title: 'One Pass for dummies',
      description: 'Learn how to add a RegKey and much more!',
      date: new Date('2013-12-25T00:00:00'),
      price: 5
    },
    {
      id: 3,
      title: 'Westlaw Asia Roadmap',
      description: 'The ultimate roadmap with the definitive production dates',
      date: new Date('2050-01-01T00:00:00'),
      price: 1000
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}