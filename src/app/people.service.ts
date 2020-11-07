import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { People } from "./people";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PeopleService {
  url = "https://swapi.dev/api/people/";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<People[]> {
    return this.http.get<People[]>(this.url).pipe(
      map(data => {
        return data["results"];
      })
    );
  }
}
