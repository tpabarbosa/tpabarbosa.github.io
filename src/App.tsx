import { HashRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";

export const App = () => {

  return (
      <HashRouter>
          <AppRoutes/>
      </HashRouter>
  );
}
