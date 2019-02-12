import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
contact = {name: "med", email : "med@gmail.com"}
pageContacts : any;
motCle:string="";
currentPage:number=0;
size:number=5;
pages:any;
  
  constructor(private http: HttpClient, public contactservice: ContactsService, public router: Router) { }

  ngOnInit() {  this.getContacts();
    
  }
  public  getContacts(){
    this.contactservice.getContacts(this.motCle,this.currentPage,this.size).subscribe((data) => {
        this.pageContacts  =  data;
        this.pages =new Array(data.totalPages);
        console.log(data);
    });

 }
    chercher()  { this.getContacts();}



    gotoPage(i:number){

      this.currentPage=i;
      this.getContacts();
    }
      onEditContact(id:number)  {
        this.router.navigate(['editContact',id]);
      }

      onDeleteContact(id: number)  {
          let  confirm=window.confirm('est vous sure ?');
          if (confirm==true)  {
          
          this.contactservice.deleteContacts(id).subscribe((data)=>{  alert("suppresion");   this.getContacts();},(error) => {
            console.log(error);
          },)}
      }


}
