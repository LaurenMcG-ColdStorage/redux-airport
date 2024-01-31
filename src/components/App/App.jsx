import React from 'react';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirLineTable/AirLineTable';

function App() {

  return (
    <div>
      <AirlineForm />
      <table>
        <AirlineTable />
        {/* Airlines should be listed here */}
      </table>
    </div>
  );
}

export default App;
