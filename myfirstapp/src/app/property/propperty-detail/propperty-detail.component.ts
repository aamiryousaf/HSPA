import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-propperty-detail',
  templateUrl: './propperty-detail.component.html',
  styleUrls: ['./propperty-detail.component.css']
})
export class ProppertyDetailComponent implements OnInit {

  public propertyId :number;
  constructor( private route: ActivatedRoute ,private router:Router) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.params.subscribe((params)=>{
    this.propertyId= +params['id']
    })
  }
  OnSelectNext()
  {
    this.propertyId +=1;
    this.router.navigate(['property-detail', this.propertyId])
  }
}
