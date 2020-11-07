import { Component, OnInit, VERSION } from "@angular/core";
import { PeopleService } from "./people.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  peoples: any[];
  name = "Angular " + VERSION.major;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getCustomers().subscribe(data => (this.peoples = data));
  }
}
