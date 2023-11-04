import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fonts/Mooli/Mooli-Regular.ttf';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/[GraphQL](https://graphql.org/)',
  cache: new InMemoryCache(),
});

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Details from './components/Details.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     // errorElement: <Error />,
//     children: [
//       // {
//       //   index: true,
//       //   element: <App />,
//       // },
//       // {
//       //   path: '/Blog',
//       //   element: <Blog />,
//       // },
//       {
//         path: '/more/:id',
//         element: <Details />,
//       },
//       // {
//       //   path: '/Contact',
//       //   element: <Contact />,
//       // },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    </React.StrictMode>,
  </>
)
