// import React from 'react';
// import { Route } from 'react-router-dom';

// function PrivateRoute({ children, ...rest }) {
//   const auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// export default useAuth;
