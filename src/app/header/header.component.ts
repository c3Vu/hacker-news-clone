import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: String[];

  constructor() {
    this.items = [
      'new', '|', 'past', '|', 'comments', '|', 'ask', '|', 'show'
    ];
  }

  ngOnInit(): void {
  }

}
