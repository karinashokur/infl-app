import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {LocalstorageService} from './localstorage.service';
import {SessionStorageService} from './sessionstorage.service';
const uri = 'http:
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
  private static localstorageService: LocalstorageService;
  private static sessionStorageService: SessionStorageService;
  static getToken() {
    if (this.localstorageService.hasJwtToken()) {
      return this.localstorageService.getJwtToken();
    } else if (this.sessionStorageService.hasJwtToken()) {
      return this.sessionStorageService.getJwtToken();
    } else {
      return -1;
    }
  }
}
