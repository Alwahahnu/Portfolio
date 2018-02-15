import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from'@angular/http';



@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private http: Http) { }
  
  
  experiences=[];
  fetchData= function() {
      this.http.get("http://localhost:4001/experiences").subscribe(
          (res: Response)=>{
              this.experiences = res.json().results;
              
              console.log(this.experiences);
      })
  }
  

  ngOnInit() {
       this.fetchData();
  }
       nom="manach";
       prenom="christian";
       currentYear=2017;
       age=this.currentYear-1991;
       profession="Développeur WEB";

}
