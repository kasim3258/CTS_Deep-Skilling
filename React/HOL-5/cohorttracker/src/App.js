import './App.css';
import { CohortsData } from './Cohort';
import CohortDetails from './CohortDetails';

function App() {

  return (
    <div>

      <h1>Cohorts Details</h1>

      <div className="container">

        {
          CohortsData.map((cohort, index) => (
            <CohortDetails
              key={index}
              cohort={cohort}
            />
          ))
        }

      </div>

    </div>
  );
}

export default App;