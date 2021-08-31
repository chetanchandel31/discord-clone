import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ children, condition, path, redirectPath }) {
	return (
		<Route path={path} exact>
			{condition ? children : <Redirect to={redirectPath} />}
		</Route>
	);
}

export default ProtectedRoute;
