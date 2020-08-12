import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StateService } from './../../services/state.service'; 
import { ApiService } from './../../services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginComponent implements OnInit {
  
  credentials: any = {
    organisationId: 1000012
  }

  constructor(private state: StateService, private api: ApiService, private router: Router, private cookies: CookieService) { }

  ngOnInit(): void {
  }

  attemptLogin = () => {
    if(this.credentials.organisationId){
      this.api.checkCredentials(this.credentials.organisationId).subscribe((data: boolean) => {
        if(data){
          this.state.setOrganisationId = this.credentials.organisationId;  
          this.cookies.set('organisationId', this.credentials.organisationId, new Date().setDate(new Date().getDate() + 7));
          this.router.navigateByUrl('/productsetup');
        }
        else{
          alert("Credentials not valid");
        }
      })
    }
    else{
      alert("NO CREDENTIALS ENTERED!");
    }
    

  }

}
