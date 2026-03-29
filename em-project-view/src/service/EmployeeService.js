import axios from "axios";

const Employee_API_BASE_URL = "http://localhost:9090/employees";

class EmployeeService {
    saveEmployee(employee){
        return axios.post(Employee_API_BASE_URL,employee);
    }

    getEmployees(){
        return axios.get(Employee_API_BASE_URL);
    }

    getEmployeeById(id){
        return axios.get(Employee_API_BASE_URL + "/" + id);
    }

    deleteEmployeeById(id){
         return axios.delete(Employee_API_BASE_URL + "/" + id);
    }
    updateEmployee(employee , id){
         return axios.put(Employee_API_BASE_URL + "/" + id, employee);
    }
}
export default new EmployeeService();