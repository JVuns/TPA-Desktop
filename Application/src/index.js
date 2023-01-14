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
import HumanResourceViewRequest from './views/HumanResourceViewRequest';
import PromotionCreateEvent from './views/PromotionCreateEvent';
import PromotionDashboard from './views/PromotionDashboard';
import PromotionViewEvent from './views/PromotionViewEvent';
import ExternalAddOffer from './views/ExternalAddOffer';
import ExternalDashboard from './views/ExternalDashboard';
import ExternalAddMovie from './views/ExternalAddMovie';
import ExternalViewMovie from './views/ExternalViewMovie';
import ExternalViewOffer from './views/ExternalViewOffer';
import ExternalViewFnB from './views/ExternalViewFnB';
import ManagerLetterView from './views/ManagerLetterView';
import ManagerDashboard from './views/ManagerDashboard';
import ManagerRequestView from './views/ManagerRequestView';
import ResignationRequest from './employee/ResignationRequest';
import AccountingViewRequest from './views/AccountingViewRequests';
import AccountingDashboard from './views/AccountingDashboard';
import AccountingCalculateTax from './views/AccountingCalculateTax';
import AccountingPurchaseView from './views/AccountingPurchaseView';

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
            <Route exact path='/human-resource/view-request' element = {<HumanResourceViewRequest/>}></Route>
            <Route exact path='/promotion/create-event' element = {<PromotionCreateEvent/>}></Route>
            <Route exact path='/promotion/dashboard' element = {<PromotionDashboard/>}></Route>
            <Route exact path='/promotion/view-event' element = {<PromotionViewEvent/>}></Route>
            <Route exact path='/accounting/view-request' element = {<AccountingViewRequest/>}></Route>
            <Route exact path='/external/dashboard' element = {<ExternalDashboard/>}></Route>
            <Route exact path='/external/add-offer' element = {<ExternalAddOffer/>}></Route>
            <Route exact path='/external/add-movie' element = {<ExternalAddMovie/>}></Route>
            <Route exact path='/external/view-movie' element = {<ExternalViewMovie/>}></Route>
            <Route exact path='/external/view-offer' element = {<ExternalViewOffer/>}></Route>
            <Route exact path='/external/view-fnb' element = {<ExternalViewFnB/>}></Route>
            <Route exact path='/manager/view-request' element = {<ManagerRequestView/>}></Route>
            <Route exact path='/manager/view-letter' element = {<ManagerLetterView/>}></Route>
            <Route exact path='/manager/dashboard' element = {<ManagerDashboard/>}></Route>
            <Route exact path='/accounting/dashboard' element = {<AccountingDashboard/>}></Route>
            <Route exact path='/accounting/calculate' element = {<AccountingCalculateTax/>}></Route>
            <Route exact path='/accounting/purchase' element = {<AccountingPurchaseView/>}></Route>
            <Route exact path='/request/fund' element = {<FundRequest/>}></Route>
            <Route exact path='/request/leave' element = {<LeaveRequest/>}></Route>
            <Route exact path='/request/resign' element = {<ResignationRequest/>}></Route>
            <Route exact path='/report/item' element = {<EmployeeReportItem/>}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
)