const DIGIT_1_FACTOR = 10;
const DIGIT_2_FACTOR = 11;

export function validate(cpf: string) {
  if (!cpf) return false;
  cpf = removeNonDigits(cpf);
  if (!isValidLength(cpf)) return false;
  if (allDigitsTheSame(cpf)) return false;
  const digit1 = calculateDigit(cpf, DIGIT_1_FACTOR);
  const digit2 = calculateDigit(cpf, DIGIT_2_FACTOR);
  let checkDigit = extractCheckDigit(cpf);
  const calculatedCheckDigit = `${digit1}${digit2}`;
  return checkDigit == calculatedCheckDigit;
}

function removeNonDigits(cpf: string) {
  return cpf.replace(/\D+/g, "");
}

function isValidLength(cpf: string) {
  return cpf.length === 11;
}

function allDigitsTheSame(cpf: string) {
  const [firstDigit] = cpf;
  return [...cpf].every((digit) => digit === firstDigit);
}

function calculateDigit(cpf: string, factor: number) {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) {
      total += parseInt(digit) * factor--;
    }
  }
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function extractCheckDigit(cpf: string) {
  return cpf.slice(-2);
}
