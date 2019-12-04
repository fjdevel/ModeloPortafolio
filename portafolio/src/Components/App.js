import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Layout'
import Inicio from "../Views/inicio"
import Contact from "../Views/Contact"
import Projects from "../Views/Projects"

export default function App() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
          </Layout>
        </BrowserRouter>
      );
}
