import { Component, OnInit, Input } from "@angular/core";
import { People } from "../people";

@Component({
  selector: "app-people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.css"]
})
export class PeopleListComponent implements OnInit {
  @Input() peoples: People[];

  constructor() {}

  ngOnInit() {}

  deletePeople(i) {
    this.peoples.splice(i, 1);
  }
}
