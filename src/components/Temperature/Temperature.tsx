type TemperatureProps = {
  accessibilityLabel?: string,
  hideUnit?: boolean,
  temperature: number,
  unit: 'celsius' | 'fahrenheit',
}

const UNIT_MAPPINGS = {
  celsius: 'C',
  fahrenheit: 'F',
};

export function Temperature({
  accessibilityLabel,
  hideUnit,
  temperature,
  unit,
}: TemperatureProps) {
  const buildAriaLabel = () => {
    if (!accessibilityLabel) {
      return `${temperature} degrees ${unit}`;
    }

    return `${accessibilityLabel}: ${temperature} degrees ${unit}`;
  }

  return (
    <span aria-label={buildAriaLabel()}>
      {temperature}
      {!hideUnit && <span aria-hidden>°{UNIT_MAPPINGS[unit]}</span>}
    </span>
  );
}