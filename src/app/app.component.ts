import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  movieName: any;
  debounceVar: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {

  }

  queryMovieName(){
    if(this.movieName.length > 3){
      clearTimeout(this.debounceVar)
      this.debounceVar = setTimeout(() => {
        this.callAPI()
      }, 300)
    }
  }

  callAPI(){
    // get(url: string, options: {
    //    headers?: HttpHeaders; params?: HttpParams
    // }

    const url = 'http://www.omdbapi.com/?apikey=c1a452a8&t=hulk';
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    this.http.get(url, {headers}).toPromise()
    .then(data => {
      console.log(data)
    })
  }


}
