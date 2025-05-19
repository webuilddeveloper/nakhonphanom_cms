import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from 'src/app/shared/service-provider.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  code: string;
  data: any = {};
  constructor(private activetedRoute: ActivatedRoute, private http: HttpClient, private serviceProviderService: ServiceProviderService) { }

  ngOnInit(): void {

    this.activetedRoute.queryParams.subscribe(params => {
      
      this.code = params['code'];
      this.login();
    });

  }

  login() {

    const payload = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', this.code)
      .set('redirect_uri', 'http://122.155.223.63/td-web-font/line')
      .set('client_id', '1654152429')
      .set('client_secret', 'fa9b2e943a646655e42500098949b83f');

    this.http.post('https://api.line.me/oauth2/v2.1/token', payload).subscribe(data => {
      
      let model: any = {};
      model = data;
      this.verify(model);
    }, err => {
      
    });

  }

  verify(param) {

    const payload = new HttpParams()
      .set('id_token', param.id_token)
      .set('client_id', '1654152429')

    this.http.post('https://api.line.me/oauth2/v2.1/verify', payload).subscribe(data => {
      this.data = data;
      
      let register: any = {
        imageUrl: this.data.picture,
        category: 'line',
        username: this.data.email,
        firstName: this.data.name,
        lineID: param.access_token
      };             

      this.serviceProviderService.post('register/create', register).subscribe(data => {

        window.location.href = 'http://122.155.223.63/line?' + param.access_token;
  
      }, err => {

      });

    }, err => {
      
    });

  }

}
