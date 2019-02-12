import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../models/model.contact';
@Injectable()
export class ContactsService {


    constructor(private http: HttpClient) {

    }
    page = 0;
    size = 5;
    motCle = '';



    getContacts(motCle: string, page: number, size: number): Observable<any> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('mc', motCle)
            .set('size', size.toString())
        let apiUrl = 'http://localhost:8081/';
        let configUrl = apiUrl + 'chercherContacts';
        return this.http.get(configUrl, {params});

    }
    getContact(id: number): Observable<any> {
        
        let apiUrl = 'http://localhost:8081/';
        let configUrl = apiUrl + 'contacts/'+id;
        return this.http.get(configUrl);

    }


    editContacts( id:number, contact : Contact): Observable<any> {
     
           
        let apiUrl = 'http://localhost:8081/';
        let configUrl = apiUrl + 'contacts/'+id;
        return this.http.put(configUrl, contact );

    }

    saveContacts(contact: Contact): Observable<any> {
     
           
        let apiUrl = 'http://localhost:8081/';
        let configUrl = apiUrl + 'contacts';
        return this.http.post(configUrl,contact);

    }

    deleteContacts(id:number)  {
        let apiUrl = 'http://localhost:8081/';
        let configUrl = apiUrl + 'contacts/'+id;
      return  this.http.delete(configUrl);

    }

}