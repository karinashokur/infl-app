import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {user} from '../constants';
import { HttpHeaders } from '@angular/common/http';
class YoutubeData {
  items: [{
    brandingSettings: {
      channel: {
        defaultTab
        profileColor
        showBrowseView
        showRelatedChannels
        title
      }
    }
    statistics: {
      commentCount
      hiddenSubscriberCount
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
  getYoutubeData() {
    let youtubeData: YoutubeData = null;
    this._getYoutubeRequest().then((data: YoutubeData) => {
      console.log(data);
      console.log(data.items[0].statistics);
      youtubeData = data;
    });
    return youtubeData;
  }
  async _getYoutubeRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.getGoogleAuthToken()
      })
    };
    return this.httpClient.get(
      'https:
      httpOptions).toPromise();
  }
  getGoogleAuthToken() {
    return user.socialAuthToken.google.authToken;
  }
}
