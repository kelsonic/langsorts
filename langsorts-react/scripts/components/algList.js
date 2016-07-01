import React from 'react';

const AlgList = (props) => {

  return (
    <div className="col s12 m6 l4 offset-l2">
      <h2 className="center orange-text text-darken-3">Sorting Algorithms</h2>

      <div className="col s6">
        <p><input name="alg" type="radio" id="bubble" defaultChecked value="bubble" /><label htmlFor="bubble" className="light-blue-text">Bubble</label></p>
        <p><input name="alg" type="radio" id="heap" value="heap" /><label htmlFor="heap" className="light-blue-text">Heap</label></p>
        <p><input name="alg" type="radio" id="insertion" value="insertion" /><label htmlFor="insertion" className="light-blue-text">Insertion</label></p>
        <p><input name="alg" type="radio" id="merge" value="merge" /><label htmlFor="merge" className="light-blue-text">Merge</label></p>
      </div>

      <div className="col s6">
        <p><input name="alg" type="radio" id="selection" value="selection" /><label htmlFor="selection" className="light-blue-text">Selection</label></p>
        <p><input name="alg" type="radio" id="shell" value="shell" /><label htmlFor="shell" className="light-blue-text">Shell</label></p>
        <p><input name="alg" type="radio" id="quick" value="quick" /><label htmlFor="quick" className="light-blue-text">Quick</label></p>
      </div>

    </div>
  );

}

export default AlgList;