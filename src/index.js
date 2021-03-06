import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './css/main.css';
import Main from "./component/Main";
import GroupList from "./component/GroupList";
import Group from "./component/Group";
import TeacherTable from "./component/TeacherTable";
import Teacher from "./component/Teacher";
import StudentsWithoutGroup from "./component/StudentsWithoutGroup";

ReactDOM.render(
  <Router>
      <Switch>
          <Route path='/' exact={true} component={Main}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/groups/:id' exact={true} component={Group} />
          <Route path='/teachers' exact={true} component={TeacherTable}/>
          <Route path='/teachers/:id' exact={true} component={Teacher}/>
          <Route path='/studentsWithoutGroup' exact={true} component={StudentsWithoutGroup}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
