import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { SharedModule } from '../shared/shared.module';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods: SharedModule[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getall().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      else
        this.foods = this.fs.getall()
    })
  }
}