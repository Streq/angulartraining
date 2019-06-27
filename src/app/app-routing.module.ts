import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationDetailsComponent } from './publications/publication-details/publication-details.component';

const routes: Routes = [
  { path: '', component: PublicationsComponent },
  { path: 'publications/:publicationId', component: PublicationDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
