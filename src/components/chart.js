

// we are making it as component and not container becuase it is going to get its data from its parnet,thus
// does not need to talk to the data/reducer to render the page.,

//We will be making it as funcitonal component and not a class component here because it does not need any state to store


import React from 'react';
import SparklinesLine from 'react-sparkline';
import Sparklines from 'react-sparkline';
import _ from 'lodash';

import SparklinesReferenceLine from 'react-sparkline';

function average(data){

  return _.round(_.sum(data)/data.length);
}


export default (props) => {

   return (
     <div>

     <Sparklines height = {120} width = {180}  data={props.data}>
     <SparklinesLine color = {props.color}  units={props.units}	 />
     <SparklinesReferenceLine type = "avg" />
     </Sparklines>

     <div>{average(props.data)} {props.units}  </div>

     </div>

   );

}
