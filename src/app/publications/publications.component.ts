import { Component, OnInit } from '@angular/core';
import { Publication } from './model/publication';
import { PublicationsService } from './service/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publications: Publication[];

  constructor(private publicationsService: PublicationsService) {

  }

  ngOnInit() {
    this.publications = this.publicationsService.getPublications();
  }

  share(publication: Publication) {
    window.alert(`Thanks for sharing '${publication.title}: ${publication.description}'`);
  }

  onNotify() {
    window.alert('You will be notified when the publication price goes below 50');
  }

}
