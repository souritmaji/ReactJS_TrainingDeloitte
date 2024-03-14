function Assignment1()
{

    let empno = 1001;
    let ename = "XYZ";
    let job = "Analyst";
    let salary = 20000;
    let deptno = 100;

    return (
        <div>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Emp No</td>
                    <td>{empno}</td> 
                </tr>
                <tr>
                    <td>Ename</td>
                    <td>{ename}</td> 
                </tr>
                <tr>
                    <td>Job</td>
                    <td>{job}</td> 
                </tr>
                <tr>
                    <td>Salary</td>
                    <td>{salary}</td> 
                </tr>
                <tr>
                    <td>Dept No</td>
                    <td>{deptno}</td>
                </tr>
            </table>
        </div>
    );
}

export default Assignment1;