import { Injectable } from '@angular/core';

import { State } from './../models/state.model'; 
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: State = {
    organisationId: null
  }

  constructor(private cookies: CookieService) { }

  set setOrganisationId(organisationId: number){
    this.state.organisationId = organisationId;
  }

  get getOrganisationId(): number{
    if(this.state.organisationId == null){
      let ck = this.cookies.get('organisationId');
      if(ck != null){
        this.state.organisationId = parseInt(ck);
      }
    }
    return this.state.organisationId;
  }
}
