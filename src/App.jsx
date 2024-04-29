import {
  Accounts,
  Chart,
  DoughnutChart,
  Info,
  Navbar,
  Stats,
  Transactions,
} from "./components";
import { useThemeStore } from "./store/themeStore";

const App = () => {
  const { theme } = useThemeStore();

  return (
    <>
      <main className={theme}>
        <div className="w-full px-6 md:px-20 bg-white dark:bg-slate-900">
          <Navbar />

          <div className="px-0 md:px-5 2xl:px-20">
            <Info
              title="Dashboard"
              subtitle="Monitor your personal financial activities"
            />
            <Stats />

            <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
              <Chart />
              <DoughnutChart />
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20">
              <Transactions />
              <Accounts />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
