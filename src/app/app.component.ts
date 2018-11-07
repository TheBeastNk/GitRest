import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputName: string = "";
  totalUserCount: number;
  userDataSet: any;
  userDataItems: any = [];
  userDetails: any = [];
  selectedSort: string = "NameAlphabeticallyAZ";

  filteredItems: any = [];
  pages: number;
  pageSize: number = 3;
  pageNumber: number = 0;
  currentIndex: number = 1;
  pagesIndex: Array<number>;
  pageStart: number = 1;
  
  //Sorting method
  SortingResult() {
    if (this.selectedSort === "NameAlphabeticallyAZ") {
      this.userDataItems.sort();
    }
    else if (this.selectedSort === "NameReverseAlphabeticallyZA") {
      this.userDataItems.reverse();
    }
    else if (this.selectedSort === "RankUp") {
      this.userDataItems.sort((a, b) => {
        return a.score < b.score;
      });
    }
    else if (this.selectedSort === "RankDown") {
      this.userDataItems.sort((a, b) => {
        return a.score > b.score;
      });
    }

  }
}
