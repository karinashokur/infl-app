import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {user} from '../constants';
import { HttpHeaders } from '@angular/common/http';
export class YoutubeData {
  items: [{
    brandingSettings: {
      channel: {
        defaultTab
        profileColor
        showBrowseView
        showRelatedChannels
        title
        description
      }
      image: {
        bannerImageUrl
      }
    }
    statistics: {
      commentCount
      subscriberCount
      videoCount
      viewCount
    }
  }];
}
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(private httpClient: HttpClient) { }
  async getYoutubeData(token: string) {
    let youtubeData: YoutubeData = null;
    await this._getYoutubeRequest(token).then((data: YoutubeData) => {
      console.log(data);
      youtubeData = data;
    });
    return youtubeData;
  }
  async _getYoutubeRequest(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token
      })
    };
    return await this.httpClient.get(
      'https:
      httpOptions).toPromise();
  }
}
