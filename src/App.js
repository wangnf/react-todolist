import { memo } from "react";


import { BrowserRouter as Router } from "react-router-dom";
import GetRoutes from "./router";

import { AppWrapper } from './style'


import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
export default memo(() => {
  return (
    <Router>
      <AppHeader></AppHeader>
      <AppWrapper>
		<GetRoutes />

	  </AppWrapper>
      <AppFooter></AppFooter>
    </Router>
  );
});
