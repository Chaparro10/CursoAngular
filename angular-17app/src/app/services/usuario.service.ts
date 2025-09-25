import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class UsuarioService {
    constructor(private http: HttpClient) {}
  
    getBitcoinPrice() {
      return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    }
  }
  