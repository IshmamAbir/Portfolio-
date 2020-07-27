import {Injectable} from '@angular/core'
import { Certificates } from './certificates.model';
import { Websites } from './websites.model';

@Injectable()
export class PortfolioService{

  private certificates:Certificates[] =[
    new Certificates('Java Course','An Advance certification course for Java','assets/img/portfolio/##name'),
    new Certificates('Banglalink SDG Hackathon','An achievement from the early of 2020','assets/img/portfolio/##name'),

  ];

  getPortfolio(){
    return this.certificates.slice();
  }

  private websites:Websites[] =[
    new Websites('COVID-19 Tracker','An Advance certification course for Java','assets/img/portfolio/##name'),
    new Websites('E-commerce Website','An achievement from the early of 2020','assets/img/portfolio/##name'),
    new Websites('Stock Management System','An achievement from the early of 2020','assets/img/portfolio/##name'),
    new Websites('Meal Calculation System','An achievement from the early of 2020','assets/img/portfolio/##name'),
    new Websites('Previous Portfolio','An achievement from the early of 2020','assets/img/portfolio/##name'),

  ];
  getWebsites(){
    return this.websites.slice();
  }


}
