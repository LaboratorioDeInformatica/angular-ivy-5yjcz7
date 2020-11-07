import { People } from "./people";

export interface Swapi {
  count: number;
  next: string;
  results: People[];
}
