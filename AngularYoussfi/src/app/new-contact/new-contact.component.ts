import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/model.contact';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent  {
  
  contact:Contact;
  addForm=new FormGroup({
    
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
  }

  );
  constructor(private cs : ContactsService) { }
onSubmit(){
   
    this.contact=this.addForm.value;
    this.cs.saveContacts(this.contact).subscribe();
  }
  ngOnInit(): void {
 
  }
}
