import { Injectable } from '@angular/core';

const TITLE_KEY = 'auth-title';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveTitle(title: string): void {
    window.localStorage.removeItem(TITLE_KEY);
    window.localStorage.setItem(TITLE_KEY, title);
  }

  public getTitle(): string | null {
    return window.localStorage.getItem(TITLE_KEY);
  }


}
