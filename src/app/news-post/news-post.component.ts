import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Post } from '../list-view/list-view.component';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent implements OnInit {
  @Input() post: Post = {};

  constructor() { }

  handleClick() {
    window.open(this.post.url);
  }

  formatUrl(url: string) {
    const start = url.indexOf('//') + 2;
    const end = url.slice(start).indexOf('/') + start;
    if (end > start) {
      return url.slice(start, end);
    } else {
      return url.slice(start);
    }
  }

  ngOnInit(): void {
    console.log(this.post)
  }

  ngOnChange(changes: SimpleChange): void {
    console.log(changes)
  }

}
