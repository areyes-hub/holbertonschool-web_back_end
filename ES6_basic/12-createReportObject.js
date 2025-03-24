export default function createReportObject(employeesList) {
    const empObject = {
        allEmployees: employeesList,
        getNumberOfDepartments() {
            return Object.keys(employeesList).length;
        },
    };
    return empObject;
}
