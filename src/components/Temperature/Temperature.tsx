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
  return (
    <span aria-label={`${accessibilityLabel}${accessibilityLabel && ': '}${temperature} degrees ${unit}`}>
      {temperature}
      {!hideUnit && <span aria-hidden>°{UNIT_MAPPINGS[unit]}</span>}
    </span>
  );
}