import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListViewService {
    listData: Observable<any> | null = null;
    url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

    constructor(private http: HttpClient) { }

    fetchListData(callback: Function) {
        this.http.get(this.url).subscribe((data) => {
            console.log(data);
            callback(data);
        });
    }

    fetchStoryDetail(id: string, callback: Function) {
        this.http.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        ).subscribe((data) => {
            console.log(data);
            callback(data);
        });
    }
}