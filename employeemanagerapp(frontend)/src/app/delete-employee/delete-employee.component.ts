import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {
  @Input()  deleteEmployeer?: Employee;

  @Output() deleteSelected = new EventEmitter<number>();

  deleteEmployee(id: number){
    this.deleteSelected.emit(id);
  }

}
