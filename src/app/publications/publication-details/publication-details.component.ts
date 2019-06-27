import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publication } from '../model/publication';
import { PublicationsService } from '../service/publications.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
})
export class PublicationDetailsComponent implements OnInit {

  publication: Publication;

  constructor(private route: ActivatedRoute, private publicationsService: PublicationsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const publicationId: number = Number(params.get('publicationId'));
      this.publication = this.publicationsService.getPublication(publicationId);
    });
  }
}
