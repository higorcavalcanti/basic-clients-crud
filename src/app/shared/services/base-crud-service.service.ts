import { HttpClient, HttpParams } from "@angular/common/http";
import { TableRequestOptions } from "../interfaces/table-request-options.interface";

export abstract class BaseCrudServiceService<T> {

  abstract endpoint: string;

  protected constructor(
    protected http: HttpClient
  ) { }

  all(options?: TableRequestOptions) {
    if ( !options?.page ) {
      options.page = 1;
    }
    const params = BaseCrudServiceService.getTableRequestOptionsParams( options );
    return this.http.get<T[]>(this.endpoint, { params, observe: "response" });
  }

  get(id: string) {
    return this.http.get<T>(this.endpoint + id);
  }

  create(data: T) {
    return this.http.post<T>(this.endpoint, data);
  }

  update(id, data: T) {
    return this.http.put<T>(this.endpoint + id, data);
  }

  remove(id) {
    return this.http.delete(this.endpoint + id);
  }

  static getTableRequestOptionsParams(options: TableRequestOptions) {
    let params = new HttpParams();
    for ( const key in options ) {
      if ( !options.hasOwnProperty( key ) ) {
        return;
      }
      const paramName = '_' + key;
      const paramValue = options[ key ];
      params = params.set(paramName, paramValue);
    }
    return params;
  }
}
