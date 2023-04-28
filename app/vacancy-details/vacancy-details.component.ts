import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit{
  vacancy: Vacancy
  constructor( private route: ActivatedRoute, private service: VacancyService) {
    this.vacancy = {} as Vacancy;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.service.getVacancy(id).subscribe((vacancy) => {
          this.vacancy = vacancy;
        })
      }
    });
  }
}
