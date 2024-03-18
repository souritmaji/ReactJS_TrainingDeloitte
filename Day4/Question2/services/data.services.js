import axios from 'axios';

export let dataServiceObj = 
{
    getAllEmployees,
    getEmpById,
    addEmp,
    updateEmp,
    deleteEmp
};



let url = "http://localhost:3500/emp/";

function getAllEmployees()
{
    return axios.get(url);
}

function addEmp(deptObj)
{
    return axios.post(url, deptObj);
}

function deleteEmp(dno)
{
    return axios.delete(url + dno);
}

function getEmpById(dno)
{
    return axios.get(url + dno);
}

function updateEmp(deptObj)
{
    return axios.put(url + deptObj.empno, deptObj);
}



