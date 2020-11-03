import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('search') search: any;

  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showForm() {
    this.isShown = !this.isShown;
    setTimeout(() => {
      this.isShown? this.search.nativeElement.focus() : false;
    }, 0);
  }

}
