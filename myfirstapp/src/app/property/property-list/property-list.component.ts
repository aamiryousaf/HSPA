
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { map } from 'rxjs/operators';
import { IProperty } from '../IProperty.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent :number =1;
  /* IProperty is*/
  properties : Array<IProperty> ;

  constructor(private route:ActivatedRoute,  private housingService:HousingService) {
    this.properties = [];
   }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent=2;

    }
      this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
            this.properties=data;
            console.log(data)
          },
            error=> {
              console.log('httperror:');
              console.log(error);
            }
)

  }

}
