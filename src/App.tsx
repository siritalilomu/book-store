import React, { useEffect, useContext } from 'react';
import { Store } from './Store'

const App: React.FC = () => {
  const {state, dispatch} = useContext(Store)

  useEffect(() => {
    state.books.length === 0 && fetchDataAction()
  }, [])

  const fetchDataAction = async () => {
    const URL = 'https://rickandmortyapi.com/api/episode'
    const data = await fetch(URL)
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON
    })
  }
  console.log(state)
  return (
    <div className="App">
        hello
    </div>
  );
}

export default App;

// export default function App():JSX.Element {
//   const store = useContext(Store)
//   console.log(store)
//   return (
//     <Fragment>
//       hello
      
//     </Fragment>
//   )
// }