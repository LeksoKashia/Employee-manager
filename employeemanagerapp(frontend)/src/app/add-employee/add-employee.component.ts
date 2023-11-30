import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  @Output() addSelected = new EventEmitter<NgForm>();

  addEmployee(addForm: NgForm){
    console.log("chaildshi var gana");
    
    this.addSelected.emit(addForm);
  }

}
