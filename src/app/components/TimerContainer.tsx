import { NumberBox } from './NumberBox';

interface timeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer = ({ days, hours, minutes, seconds }: timeProps) => {
  // Convert all time values to numbers for comparison and arithmetic
  let numericDays = Number(days);
  let numericHours = Number(hours);
  let numericMinutes = Number(minutes);
  let numericSeconds = Number(seconds);

  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (numericSeconds <= 0 && numericMinutes <= 0 && numericHours <= 0 && numericDays <= 0) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }

  if (numericSeconds === 0) {
    if (numericMinutes !== 0) {
      numericSeconds = 59;
    }
    secondsFlip = false;
    minutesFlip = true;
  }

  if (numericMinutes === 0) {
    if (numericHours !== 0) {
      numericMinutes = 59;
    }
    minutesFlip = false;
    hoursFlip = true;
  }

  if (numericHours === 0) {
    hoursFlip = false;
    if (numericDays !== 0) {
      daysFlip = true;
    }
  }

  // Add leading zeros if needed and convert back to strings for display
  const displayDays = numericDays < 10 ? `0${numericDays}` : numericDays.toString();
  const displayHours = numericHours < 10 ? `0${numericHours}` : numericHours.toString();
  const displayMinutes = numericMinutes < 10 ? `0${numericMinutes}` : numericMinutes.toString();
  const displaySeconds = numericSeconds < 10 ? `0${numericSeconds}` : numericSeconds.toString();

  return (
    <div className="mt-2 md:mt-20 rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8">
        <NumberBox num={displayDays} unit="Days" flip={daysFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
        <NumberBox num={displayHours} unit="Hours" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
        <NumberBox num={displayMinutes} unit="Minutes" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
        <NumberBox num={displaySeconds} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};
