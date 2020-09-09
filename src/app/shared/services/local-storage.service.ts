import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public static set(key, value) {
    const val = value && JSON.stringify(value);
    window.localStorage.setItem(key, val);
  }

  public static get(key) {
    const i = window.localStorage.getItem(key);
    try {
      return JSON.parse( i );
    } catch (_) {
      return null;
    }
  }

  public static remove(key) {
    window.localStorage.removeItem(key);
  }

  public static clear() {
    window.localStorage.clear();
  }

  public set(key, value) {
    return LocalStorageService.set(key, value);
  }

  public get(key) {
    return LocalStorageService.get(key);
  }

  public remove(key) {
    return LocalStorageService.remove(key);
  }

  public clear() {
    return LocalStorageService.clear();
  }
}
