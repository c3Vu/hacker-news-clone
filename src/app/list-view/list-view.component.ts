import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListViewService } from './list-view.service';

export interface Post {
  content?: string,
  author?: string,
  id?: string,
  index?: number,
  kids?: string[],
  score?: number,
  commentNo?: number,
  url?: string,
  time?: number
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  posts: string[];
  postContents: Post[];
  loading: boolean;
  pageNo: number = 0;
  numberPerPage: number = 30;
  currentList: string[] = [];

  constructor(private listViewService: ListViewService, private route: ActivatedRoute) {
    this.posts = [];
    this.postContents = [];
    this.loading = true
  }

  fetchCurrentContents() {
    this.currentList = this.posts.slice(this.pageNo * 30, (this.pageNo + 1) * 30);
    const promises = this.currentList.map((item, index) => (
      new Promise<void>((resolve) => {
        const i = this.pageNo * 30 + index;
        if (this.postContents[i].author) {
          resolve();
        } else {
          this.listViewService.fetchStoryDetail(item, (res: any) => {
            this.postContents[i] = {
              ...this.postContents[i],
              author: res['by'],
              content: res['title'],
              score: res['score'],
              commentNo: res['descendants'],
              time: parseInt(res['time']),
              url: res['url']
            };
            resolve();
          });
        }
      })
    ));
    Promise.all(promises).then(() => {
      this.loading = false;
    })
  }

  handlePageChange(page: number) {
    this.pageNo = page;
    this.currentList = this.posts.slice(this.pageNo * 30, (this.pageNo + 1) * 30);
    if (this.posts.length > 0) {
      this.fetchCurrentContents();
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      this.handlePageChange(parseInt(params.get('page') || '0'));
    });
    this.loading = true;
    this.listViewService.fetchListData((res: any) => {
      this.posts = res;
      this.postContents = this.posts.map((o, i) => ({
        index: i,
        id: o
      }));
      this.currentList = res.slice(this.pageNo * 30, (this.pageNo + 1) * 30);
      this.fetchCurrentContents();
      // this.posts.forEach((item) => {
      //   this.listViewService.fetchStoryDetail(item, (res: any) => {

      //   })
      // });
    });
  }

}

