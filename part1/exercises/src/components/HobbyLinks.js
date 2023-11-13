import React from 'react';

class HobbyLinks extends React.Component {
   render() {
      const hobbysites = ["https://bjjfanatics.com/?utm_source=google&utm_medium=paid&utm_campaign=16573494841&utm_content=134055867749&utm_term=bjj&gadid=587815267621&gad_source=1&gclid=Cj0KCQiAjMKqBhCgARIsAPDgWlxPEV3S4yRiF9MD4xiTS5RDG1stVQk9ByfH0JjqlODTLBAVepvFcG8aAlIoEALw_wcB", "https://code.org/"];
      return (
      <div>
         <h3>Hobbies</h3>
         <ul>
            <li><a href = {hobbysites[0]}>BJJ</a></li>
            <li><a href = {hobbysites[1]}>Coding</a></li>
        </ul>
      </div>
      );
   }
}

export default HobbyLinks;