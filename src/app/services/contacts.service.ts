import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    {Id: 1, FirstName: 'Tan Jin', LastName: 'Quan', PhoneNumber: '012-115-8390', Email: 'tanquan@gmail.com'},
    {Id: 2, FirstName: 'Ahkam', LastName: 'Said', PhoneNumber: '013-369-6044', Email: 'ahkamsaid@yahoo.com'},
    {Id: 3, FirstName: 'Bhavin', LastName: 'Hridaan', PhoneNumber: '010-668-1394', Email: 'bhavin@outlook.com'}
  ]

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  createContact(newContact: Contact) {

    //fndind highest Id
    let highestId = 0;
    this.contacts.forEach(contactsObject => {
      if (contactsObject.Id > highestId) {
        highestId = contactsObject.Id
      }
    })

    // adding new contact to array

    this.contacts.push(
      {
        Id: highestId+1,
        FirstName : newContact.FirstName,
        LastName : newContact.LastName,
        PhoneNumber : newContact.PhoneNumber,
        Email : newContact.Email,
      }
    );
  }

  updateContact (updateContact: Contact) {
    const index = this.contacts.findIndex(contact => contact.Id ==  updateContact.Id);
    this.contacts[index].FirstName = updateContact.FirstName;
    this.contacts[index].LastName = updateContact.LastName;
    this.contacts[index].PhoneNumber = updateContact.PhoneNumber;
    this.contacts[index].Email = updateContact.Email;
  }

  deleteContact(id: number) {
    const index = this.contacts.findIndex(contact => contact.Id ==  id);
    this.contacts.splice(index, 1);
  }
}
