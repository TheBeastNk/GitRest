import { Component,OnInit } from '@angular/core';
import { SearchService } from './services/search.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'githubApp';
  usersList: any;
  usersMoreInfo: any;
  usersRepo: any;
  status:string = "Please wait";
  selectedUser :string;
  collapse:boolean = false;
  currentPage: number = 1;
  searchKeyword: string = '';
  sort: string = 'joined';
  order: string = 'desc'
  loading: boolean = false;
  constructor(private searchService: SearchService){}

  getUsersList(): void{
    if(this.searchKeyword.trim().length == 0) {
      return ;
    }
    this.loading = true;
  	this.searchService.getUsersList(this.searchKeyword,this.currentPage,this.sort,this.order)
  	.subscribe(response => this.usersList = response);
    if(this.usersList) {
      this.loading = false;
    }
  }

  collapseThis(){
    this.usersMoreInfo = '';
    this.collapse = false;
    this.selectedUser = ''
  }

  getMoreInfo(user: any):void{
    this.loading = true;
    let url = user.url.replace("https://","//");
     this.usersMoreInfo = "";
     this.selectedUser = user.id;
     this.collapse = true;
  	 this.searchService.getUsersMoreInfo(url)
  	.subscribe(response => this.usersMoreInfo = response)
    this.loading = false;
  }

  getRepoInfo(user: any):void{
    this.loading = true;
    let url = user.repos_url.replace("https://","//");
    this.usersRepo = '';
    this.searchService.getUsersRepo(url)
    .subscribe(response => this.usersRepo = response)
   this.loading = false;
  }

  setPage(page: number) {
           this.loading = true;
           //this.usersList = [];
          //event.preventDefault();
          //this.loading = true;
          //this.statusMessage ="Loading data. Please wait.";
          //this.articles = [];
          this.currentPage = page;
          this.getUsersList();
        
      }

    onSortChange(param: string){
      this.loading = true;
      if(param=="followasc"){
        this.sort = 'followers';
        this.order = 'asc';
      } else if(param=="followdesc"){
        this.sort = 'followers';
        this.order = 'desc';
      } else if(param=="joinedasc"){
        this.sort = 'joined';
        this.order = 'asc';
      } else if(param=="joineddesc"){
        this.sort = 'joined';
        this.order = 'desc';
      }
      this.getUsersList();
    }

// convertDate(date: string):string{
// date = new Date('2013-08-03T02:00:00Z');
// year = date.getFullYear();
// month = date.getMonth()+1;
// dt = date.getDate();

// if (dt < 10) {
//   dt = '0' + dt;
// }
// if (month < 10) {
//   month = '0' + month;
// }
// return year+'-' + month + '-'+dt;
// }


}
