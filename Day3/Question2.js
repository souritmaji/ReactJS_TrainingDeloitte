import { useState } from "react";

function Question2()
{
    const [empArray, setEmpArray] = useState([]);

    const [empno, setEmpno] = useState(0);
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState(0);
    const [deptno, setDeptNo] = useState(0);

    function getEmpButton_click()
    {
        let tempArray = [
            {empno: 1, ename: "Sourit", job: "Analyst", sal:25000, deptno:101},
            {empno: 2, ename: "Aditi", job: "ML Engineer", sal:30000, deptno:102},
            {empno: 3, ename: "Sampath", job: "Finance", sal:20000, deptno:103},
            {empno: 4, ename: "Anshita", job: "Marketing", sal:35000, deptno:104}
        ]

        setEmpArray(tempArray);
    }

    function addEmpButton_click()
    {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal  = sal;
        empObj.deptno = deptno;

        let tempArray = [...empArray];
        tempArray.push(empObj)
        setEmpArray(tempArray);

    }

    function deleteEmp_click(eno)
    {
        if (window.confirm('Are you sure you want to delete this employee?')) 
        {    
            let tempArray = [...empArray];

            let index = tempArray.findIndex(item => item.empno == eno)
            tempArray.splice(index, 1);

            setEmpArray(tempArray);
        }
    }

    function selectEmp_click(eno)
    {
        let empObj = empArray.find(item => item.empno == eno);

        setEmpno(empObj.empno);
        setEname(empObj.ename);
        setJob(empObj.job);
        setSal(empObj.sal);
        setDeptNo(empObj.deptno);
    }

    function updateEmpButton_click()
    {
        let tempArray = [...empArray];

        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename;
        tempArray[index].job = job;
        tempArray[index].sal = sal;
        tempArray[index].deptno = deptno;

        setEmpArray(tempArray);
    }

    let resultArray = empArray.map((item, index) => {
        return <tr key={index}>
            <td> {item.empno} </td>
            <td> {item.ename} </td>
            <td> {item.job} </td>
            <td> {item.sal} </td>
            <td> {item.deptno} </td>
            <td>
                <a onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);">Select</a> ||
                <a onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);">
                    <img width="30" height="30" src="delete_logo.png" alt="Delete" />
                </a>
            </td>
        </tr>
    })
    return (
        <>
            <h1>Employees - CRUD</h1>        

            <input type="button" onClick={getEmpButton_click} value="Get Emp Details" />
            <input type="button" onClick={addEmpButton_click} value="Add Employee" />
            <input type="button" onClick={updateEmpButton_click} value="Update Employee" />
            <hr/>

            Emp Number : <input type="text" placeholder="Emp Number : " value={empno}   onChange={(e) => setEmpno(e.target.value)} /> <br/>
            Emp Name : <input type="text" placeholder="Emp Name : " value={ename}   onChange={(e) => setEname(e.target.value)} /> <br/>
            Job : <input type="text" placeholder="Job : " value={job}  onChange={(e) => setJob(e.target.value)} /> <br/>
            Salary : <input type="text" placeholder="Salary :" value={sal}  onChange={(e) => setSal(e.target.value)} /> <br/>
            Department Number : <input type="text" placeholder="Department Number : " value={deptno}  onChange={(e) => setDeptNo(e.target.value)} /> <br/>

            <hr/>

            <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Dept Number</th>
                <th></th>
            </tr>
            {resultArray}
        </table>
        </>
    );
}

export default Question2;