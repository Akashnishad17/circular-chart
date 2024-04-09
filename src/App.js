import CircularChart from './components';

function App() {
  return (
    <div style={styles.main}>
      <CircularChart />
    </div>
  );
};

const styles = {
  main: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
