package com.example.em_project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.em_project.model.Employee;
import com.example.em_project.services.EmployeeService;


@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpController {
  //  EmployeeServicesImpl employeeService = new EmployeeServicesImpl();
    @Autowired
    EmployeeService employeeService;
    //GET all employees
    @GetMapping("employees")
    public List<Employee> getEmployees() {
        return employeeService.readEmployees();
    }

    @GetMapping("employees/{id}")
    public Employee getEmployeesById(@PathVariable Long id) {
        return employeeService.readEmployee(id);
    }

    // POST create employee
    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee) {
        // employees.add(employee);
      return employeeService.createEmployee(employee);

    }

    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id){
        if(employeeService.deleteEmployee(id))
            return "Delete Employee Successfully";
        return "Not Found";
    }

    @PutMapping("employees/{id}")
    public String putMethodName(@PathVariable Long id, @RequestBody Employee employee) {
        System.out.println("Yes Mai bhi aa rha hu");
        return employeeService.updateEmployee(id,employee);
    }
}