import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { GetProductCategories_Result } from '../models/get-product-categories-result.model';
import { GetAllImages_Result } from '../models/get-all-images-result.model';
import { UpsertProductCategoryViewModel } from '../models/upsert-product-category.view-model';
import { StatusUpdate } from '../models/status-update.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly _isDevMode: boolean = true;
  readonly _apiUrl = 'http://35.214.106.155:44201/api';
  readonly _devApiUrl ='https://localhost:44339/api'

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  constructor(private http: HttpClient) { }

  checkCredentials = ( organisationId: number ) => this.http.get<boolean>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/auth/checkValidity/${organisationId}`);

  getProductCategories = (organisationId: number) => {return this.http.get<GetProductCategories_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/getCategories/${organisationId}/false/false`)};

  upsertProductCategory = (newCategory: UpsertProductCategoryViewModel) => {console.log(newCategory); return this.http.post(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/upsertProductCategory`, newCategory)};

  getProductCategoryImages = () => {return this.http.get<GetAllImages_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/getProductCategoryImages`)};

  getProductCategoryImage = (imageId: number) => {return this.http.get<GetAllImages_Result>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/getProductCategoryImage/${imageId}`)};

  getAllProducts = (organisationId: number, productCategoryId: number) => {return this.http.get<GetAllImages_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/getAllProducts/${organisationId}/true/${productCategoryId}`)};

  updateProductStatus = (statusUpdate: StatusUpdate) => {return this.http.put(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/updateProductStatus`, statusUpdate)};
}
