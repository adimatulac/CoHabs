import React from 'react';
// import Header from './Header';
import Main from './Main';
import AddNote from '../containers/AddNote';
import NotesList from '../containers/NotesList';
// import { connect } from 'react-redux';
// import { fetchAllPokemon } from '../actions';

class App extends React.Component {
  
  // componentDidMount() {
  //   this.props.dispatch(fetchAllPokemon);
  // }
  render() {
    console.log('running app ...');
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <Main />
        {/* <div className="container">
          <Header />
          <div className="row">
            <div className="col" align="center">
              <div className="col-shrink">
                <AddNote />
              </div>
            </div>
          </div>
        <NotesList />
        </div> */}
      </div>
  );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       fetchAll: () => {
//           dispatch(fetchAllPokemon());
//       }
//   };
// };

// export default connect(null, mapDispatchToProps)(App);

// export default connect()(App);

export default App;