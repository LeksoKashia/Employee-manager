import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  @Input()  editEmployee?: Employee;

  @Output() editSelected = new EventEmitter<Employee>();

  updateEmployee(editEmployee: Employee){
    this.editSelected.emit(editEmployee);
  }

}
