import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from'@angular/http';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

 constructor(private http: Http) { }
  
  
  jokes=[];
  fetchjokes= function() {
      this.http.get("http://api.icndb.com/jokes/random?limitTo=[nerdy]").subscribe(
          (res: Response)=>{
              this.jokes = res.json();
              
              
      })
  }
  ngOnInit() {
      this.fetchjokes();
  }
cle="3856980E7E416988FA8A5D19B58EBD1E"
html="http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=3856980E7E416988FA8A5D19B58EBD1E&steamid=76561198095499552&include_appinfo&include_appinfo=1&format=json"
}
