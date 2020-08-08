import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  generateLink(host, url, port) {
    return `${host}:${port}${url}`
  }

  setHeaderWithToken(token, userCode) {
    const header = new HttpHeaders();
    header.set('Authorisation', 'Bearer ' + token)
    header.set('user_code', userCode)
    return header
  }

  loginAPICall(body) {
    const link = this.generateLink(environment.host, environment.user.login, environment.port)
    return this.http.post(link, body).pipe(map(res => {
      return Object(res);
    }))
  }

  forgotPassword(body) {
    const link = this.generateLink(environment.host, environment.user.forgotPassword, environment.port)
    return this.http.post(link, body).pipe(map(res => {
      return Object(res);
    }))
  }

  getAllUsers() {
    const link = this.generateLink(environment.host, environment.user.allUsers, environment.port)
    return this.http.get(link).pipe(map(res => {
      return Object(res);
    }))
  }

  searchUser(body) {
    const link = this.generateLink(environment.host, environment.user.searchUser, environment.port)
    return this.http.post(link, body).pipe(map(res => {
      return Object(res);
    }))
  }

  getAllCategoris() {
    const link = this.generateLink(environment.host, environment.user.getAllCategories, environment.port)
    return this.http.get(link).pipe(map(res => {
      return Object(res);
    }))
  }

  getAllProduct() {
    const link = this.generateLink(environment.host, environment.user.getAllProduct, environment.port)
    return this.http.get(link).pipe(map(res => {
      return Object(res);
    }))
  }

  saveCategories(body) {
    const link = this.generateLink(environment.host, environment.user.saveCategories, environment.port)
    return this.http.post(link, body).pipe(map(res => {
      return Object(res);
    }))
  }

  addProduct(body) {
    const link = this.generateLink(environment.host, environment.user.addProduct, environment.port)
    return this.http.post(link, body).pipe(map(res => {
      return Object(res);
    }))
  }

  updateProductData(body) {
    const link = this.generateLink(environment.host, environment.user.updateProduct, environment.port)
    return this.http.post(link, body).pipe(map(res => {
      return Object(res);
    }))
  }

  getStatastics() {
    const link = this.generateLink(environment.host, environment.statastics, environment.port)
    return this.http.get(link).pipe(map(res => {
      return Object(res);
    }))
  }
}
