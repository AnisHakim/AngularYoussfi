import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../../models/model.contact';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  addForm=new FormGroup({
    id:new FormControl(''),
    
    photo:new FormControl(''),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    dateNaissance: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
  }

  );
  ngOnInit(): void {
 
  }

  contact: Contact;
  idContact: number;



  constructor(public activatedRoute: ActivatedRoute, public contactService: ContactsService) {
    this.contactService.getContact(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => this.contact = data,
        (error) => {
          console.log(error);
        },
        () => {
          console.log(this.contact);
          this.addForm.setValue ( this.contact);
        });

 

  }
    updateContact()  {
       this.contactService.editContacts( this.activatedRoute.snapshot.params['id'],this.addForm.value).subscribe((data)=>{console.log(data);
        alert("mise a jour effectue"!);
      },(error) => {
        console.log(error);
        alert("probleme");
      }
      
    )
    }
    onSubmit(){
   
      this.updateContact();
    }

}






