import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import App from './views/Login';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AddEmployee from './views/HumanResourceAddEmployee';
import HumanResource from './views/HumanResourceDashboard';
import FundRequest from './employee/FundRequest';
import LeaveRequest from './employee/LeaveRequest';
import EmployeeReportItem from './employee/EmployeeReportItem';
import ResetPassword from './views/ResetPassword';
import HumanResourceViewEmployee from './views/HumanResourceViewEmployee';
import HumanResourceEmployeeDetail from './views/HumanResourceEmployeeDetail';
import HumanResourceIssueWarningLetter from './views/HumanResourceIssueWarningLetter';
import HumanResourceSalaryAdjustment from './views/HumanResourceSalaryAdjustment';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
            <Route exact path='/' element = {<App/>} ></Route>            
            <Route exact path='/reset-password' element = {<ResetPassword/>} ></Route>            
            <Route exact path='/human-resource' element = {<HumanResource/>} ></Route>     
            <Route exact path='/human-resource/add-employee' element = {<AddEmployee/>}></Route>
            <Route exact path='/human-resource/view-employee' element = {<HumanResourceViewEmployee/>}></Route>
            <Route exact path='/human-resource/employee-detail' element = {<HumanResourceEmployeeDetail/>}></Route>
            <Route exact path='/human-resource/issue-warning-letter' element = {<HumanResourceIssueWarningLetter/>}></Route>
            <Route exact path='/human-resource/salary-adjustment' element = {<HumanResourceSalaryAdjustment/>}></Route>
            <Route exact path='/request/fund' element = {<FundRequest/>}></Route>
            <Route exact path='/request/leave' element = {<LeaveRequest/>}></Route>
            <Route exact path='/report/item' element = {<EmployeeReportItem/>}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
)