import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TrackComponent } from './track/track.component';
import { RegComponent } from './reg/reg.component';
import { ShomeComponent } from './shome/shome.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { AboutdeptComponent } from './aboutdept/aboutdept.component';
import { DepttopperComponent } from './depttopper/depttopper.component';
import { AttendComponent } from './attend/attend.component';
import { MarksComponent } from './marks/marks.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutusComponent,RouterModule,GalleryComponent, ContactusComponent,RegComponent ,TrackComponent,ShomeComponent,StaffhomeComponent,AboutdeptComponent,DepttopperComponent,AttendComponent,MarksComponent, LoginComponent,AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  img='https://media.istockphoto.com/id/1182478006/vector/happy-family-business-people-and-projects-concept-of-group-of-people-happy-team-victory.jpg?s=612x612&w=0&k=20&c=9eWA2legWof5gIL9vAlycuB73xdiBQczcjJ5TqLgJgk=';
}
