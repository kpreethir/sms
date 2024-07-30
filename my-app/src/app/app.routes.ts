import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegComponent } from './reg/reg.component';
import { TrackComponent } from './track/track.component';
import { ShomeComponent } from './shome/shome.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { AboutdeptComponent } from './aboutdept/aboutdept.component';
import { DepttopperComponent } from './depttopper/depttopper.component';
import { AttendComponent } from './attend/attend.component';
import { MarksComponent } from './marks/marks.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = 
[
    {
        component:HomeComponent,
        path :"home",
    },
    {
        component:AboutusComponent,
        path:"aboutus",
    },
    {
        component:GalleryComponent,
        path:"gallery",
    },
    {
        component:ContactusComponent,
        path:"contactus",
    },
    {
        component:LoginComponent,
        path:"login"
    },
    {
        component:HeaderComponent,
        path:"header"
    },
    {
        component:FooterComponent,
        path:"footer"
    },
    { 
        component:RegComponent,
        path:"reg"
    },
    {
        component:TrackComponent,
        path:"track"
    },
    {
        component:ShomeComponent,
        path:"shome"
    },
    {
        component: StaffhomeComponent ,
        path:"staffhome"
    },
    {
        component: AboutdeptComponent,
        path:"aboutdept"
    },
    {
        component:DepttopperComponent,
        path:"depttopper"
        
        

    },
    {
        component:AttendComponent ,
        path:"attend"
    },
    {
        component:MarksComponent,
        path:"marks"
    },
    {
        component:LoginComponent,
        path:"login"
    },
    {
        component:HomeComponent,
        path:""
    },
    {
        component:AdminComponent,
        path:"admin"
    }
    

];
