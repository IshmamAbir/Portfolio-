import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestComponent } from './test/test.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PortfolioService} from './portfolio/portfolio/portfolio.service';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    PortfolioComponent,
    TestComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
