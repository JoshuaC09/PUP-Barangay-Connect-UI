import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './modules/services/components/services/services.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { SuggestionsComponent } from './modules/suggestions/components/suggestions/suggestions.component';
import { BlotterComponent } from './modules/blotter/components/blotter/blotter.component';
import { EventsComponent } from './modules/events/components/events/events.component';
import { ForumComponent } from './modules/forum/components/forum/forum.component';
import { AnnouncementComponent } from './modules/announcement/components/announcement/announcement.component';
import { ParticipateComponent } from './modules/participate/components/participate/participate.component';
import { VolunteerComponent } from './modules/volunteer/components/volunteer/volunteer.component';
import { TrackComponent } from './modules/track/components/track/track.component';
import { HotlinesComponent } from './modules/hotlines/components/hotlines/hotlines.component';
import { AboutComponent } from './modules/about/components/about/about.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { RequestComponent } from './modules/request/components/request/request.component';
import { ResidentLoginComponent } from './modules/resident-login/components/resident-login/resident-login.component';
import { BarangayLoginComponent } from './modules/barangay-login/components/barangay-login/barangay-login.component';
import { RegisterComponent } from './modules/register/components/register/register.component';
import { ForgotPasswordComponent } from './modules/forgot-password/components/forgot-password/forgot-password.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotlines', component: HotlinesComponent },
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'blotter', component: BlotterComponent },
  { path: 'events', component: EventsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'announcement', component: AnnouncementComponent },
  { path: 'participate', component: ParticipateComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'track', component: TrackComponent },
  { path: 'request', component: RequestComponent },
  { path: 'resident-login', component: ResidentLoginComponent },
  { path: 'barangay-login', component: BarangayLoginComponent },
  { path: 'register', component: RegisterComponent },
   { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
