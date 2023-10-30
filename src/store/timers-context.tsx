import { type ReactNode, createContext } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersConext = createContext<TimersContextValue | null>(null);

type TimersConextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersConextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      //...
    },
    startTimers() {
      //...
    },
    stopTimers() {
      //...
    },
  };

  return <TimersConext.Provider value={ctx}>{children}</TimersConext.Provider>;
}
