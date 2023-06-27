import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rapportino } from 'src/app/model/rapportino';
import { Risorsa } from 'src/app/model/risorsa';
import { RapportinoService } from 'src/app/service/rapportino/rapportino.service';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-rapportino-show',
  templateUrl: './rapportino-show.component.html',
  styleUrls: ['./rapportino-show.component.css']
})
export class RapportinoShowComponent implements OnInit{
  constructor(private rapportinoService:RapportinoService,private route: ActivatedRoute,private router: Router) {}

  rapportinoDetail?:Rapportino;

    ngOnInit(): void {
      this.rapportinoService.getRapportino(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(rapportino => this.rapportinoDetail = rapportino);
      
    }


    onBack():void {
      this.router.navigate(['/rapportino/list']);
    }


}
