import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name={"Kasim Vali"}
        School={"LoyolaPublic School"}
        total={509}
        goal={600}
      />
    </div>
  );
}

export default App;