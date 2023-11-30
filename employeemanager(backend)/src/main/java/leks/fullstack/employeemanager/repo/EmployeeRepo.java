package leks.fullstack.employeemanager.repo;

import leks.fullstack.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {


    Optional<Employee> findEmployeeById(Long id);
}
