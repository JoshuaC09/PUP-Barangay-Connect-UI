import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { HomeModule } from './modules/home/home.module';
import { ServicesModule } from './modules/services/services.module';
import { LoginModule } from './modules/login/login.module';
import { SuggestionsModule } from './modules/suggestions/suggestions.module';
import { BlotterModule } from './modules/blotter/blotter.module';
import { EventsModule } from './modules/events/events.module';
import { ForumModule } from './modules/forum/forum.module';
import { AnnouncementModule } from './modules/announcement/announcement.module';
import { ParticipateModule } from './modules/participate/participate.module';
import { VolunteerModule } from './modules/volunteer/volunteer.module';
import { TrackModule } from './modules/track/track.module';
import { HotlinesModule } from './modules/hotlines/hotlines.module';
import { RequestModule } from './modules/request/request.module';
import { BarangayLoginModule } from './modules/barangay-login/barangay-login.module';
import { ResidentLoginModule } from './modules/resident-login/resident-login.module';
import { RegisterModule } from './modules/register/register.module';
import { ForgotPasswordModule } from './modules/forgot-password/forgot-password.module';



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatTableModule,

    HomeModule,
    AboutModule,
    ServicesModule,
    LoginModule,
    HotlinesModule,
    SuggestionsModule,
    BlotterModule,
    EventsModule,
    ForumModule,
    AnnouncementModule,
    ParticipateModule,
    VolunteerModule,
    TrackModule,
    RequestModule,
    BarangayLoginModule,
    ResidentLoginModule,
    RegisterModule,
    ForgotPasswordModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
