import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio/portfolio.service';
import { Websites } from './portfolio/websites.model';
import { Certificates } from './portfolio/certificates.model';
import { Video } from './portfolio/video.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  activeclass:boolean;


  data:any;
  // websites:Websites[];
  // certificates:Certificates[];
  // videos:Video[];

  changeState(){
    this.activeclass=true
  }

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {

    this.activeclass=false
  }

  onClick(type:string){
    if (type  === 'certificates'){
      this.data = this.portfolioService.getWebsites()
    }
    else if (type  === 'websites'){

    }

  }

}
