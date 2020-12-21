import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  Courses, 
  Goals, 
  Indie, 
  Main, 
  Projects, 
  Stack, 
  About 
} from '../pages';

const Routes: React.FC = () => (
  <>
    <Route component={Main} />
    <Route component={About} />
    <Route component={Goals} />
    {/* <Route path="/stack" exact component={Stack} />
    <Route path="/courses" exact component={Courses} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/goals" exact component={Goals} />
    <Route path="/indie" exact component={Indie} /> */}
  </>
);

export default Routes;
