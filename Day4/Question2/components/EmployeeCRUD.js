import { useState } from "react";
import { dataServiceObj } from "../services/data.services";


function EmployeeCRUD() {
    const [deptsArray, setDeptsArray] = useState([]);

    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function getEmpsButton_click() {

        dataServiceObj.getAllEmployees().then((resData) => {
            setDeptsArray(resData.data);
        });
    }


    function addEmpButton_click() {
        let deptObj = {};
        deptObj.empno = empno;
        deptObj.ename = ename;
        deptObj.job = job;
        deptObj.sal = sal;
        deptObj.deptno = deptno;

        dataServiceObj.addEmp(deptObj).then((resData) => {
            alert("New Dept added to Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function deleteEmp_click(eno) {
        dataServiceObj.deleteEmp(eno).then((resData) => {
            alert("Dept details are deleted from Server");
            getEmpsButton_click(); // get the latest data from server            
        });

    }

    function selectEmp_click(eno) {
        dataServiceObj.getEmpById(eno).then((resData) => {
            let deptObj = resData.data;
            setEmpno(deptObj.empno);
            setEname(deptObj.ename);
            setJob(deptObj.job);
            setSal(deptObj.sal);
            setDeptno(deptObj.deptno);
        });
    }

    function updateEmpButton_click() {
        let deptObj = {};
        deptObj.empno = empno;
        deptObj.ename = ename;
        deptObj.job = job;
        deptObj.sal = sal;
        deptObj.deptno = deptno;

        dataServiceObj.updateEmp(deptObj).then((resData) => {
            alert("Emp details are updated in Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    let resultArray = deptsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
                <a onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });


    return (<>

        <h3>Perform CRUD Operations using JSON-Server in React Application</h3>
        <hr />

        <input type="text" placeholder="Emp Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Emp Name" value={ename} onChange={(e) => setEname(e.target.value)} />
        <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <input type="text" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
        <input type="text" placeholder="Dept No" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        <hr />

        <input type="button" onClick={getEmpsButton_click} value="Get Emps" />
        <input type="button" onClick={addEmpButton_click} value="Add Emp" />
        <input type="button" onClick={updateEmpButton_click} value="Update Emp" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Dept No</th>
                <th></th>
            </tr>
            {resultArray}
        </table>

    </>);
}

export default EmployeeCRUD;