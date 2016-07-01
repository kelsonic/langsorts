import React from 'react';

const LangList = (props) => {

  return(
    <div className="col s12 m6 l4">
      <h2 className="center orange-text text-darken-3">Languages</h2>
      <div className="col s6 l4 offset-l2">
        <p><input name="lang" type="radio" id="ruby" defaultChecked value="ruby" /><label htmlFor="ruby" className="red-text">Ruby</label></p>
      </div>
      <div className="col s6 l4">
        <p><input name="lang" type="radio" id="javascript" value="javascript" /><label htmlFor="javascript" className="orange-text">JavaScript</label></p>
      </div>
    </div>
  );

}

export default LangList;