import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: []
})
export class SideBarComponent implements OnInit {

  
    constructor( private TokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
  }
      
  


}
