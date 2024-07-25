import dayjs from 'dayjs'; 

export const isNotEmpty = (value) => {
  return value !== "";
};

// Função para validar o CPF
export const validateCPF = (cpf) => {
  const cleanCPF = cpf.replace(/\D/g, "");

  // Verifica se o CPF tem 11 dígitos
  if (cleanCPF.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
  if (/^(\d)\1*$/.test(cleanCPF)) {
    return false;
  }

  // Calcula os dígitos verificadores
  const calcCheckDigit = (base) => {
    let sum = 0;
    for (let i = 0; i < base.length; i++) {
      sum += parseInt(base.charAt(i)) * (base.length + 1 - i);
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const baseCPF = cleanCPF.substring(0, 9);
  const digit1 = calcCheckDigit(baseCPF);
  const digit2 = calcCheckDigit(baseCPF + digit1);

  // Verifica os dígitos verificadores
  return cleanCPF.endsWith(`${digit1}${digit2}`);
};

export const validateCreditCardNumber = (cardNumber) => {
  // Remove todos os caracteres não numéricos
  const sanitizedNumber = cardNumber.replace(/\D/g, "");

  // O número deve ter entre 13 e 19 dígitos
  if (sanitizedNumber.length < 13 || sanitizedNumber.length > 19) {
    return false;
  }

  // Algoritmo de Luhn
  let sum = 0;
  let shouldDouble = false;

  // Itera pelos dígitos do número, começando da direita
  for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitizedNumber.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // O número é válido se a soma é múltiplo de 10
  return sum % 10 === 0;
};

export const validateCVV = (cvv) => {
    return cvv.length >= 3;
}

export const validateExpiryDate = (value) => {
  // Verifica se o valor está no formato MM/YY
  const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  const match = value.match(regex);

  if (!match) {
    return false; // Formato inválido
  }

  const month = parseInt(match[1], 10);
  const year = parseInt(match[2], 10) + 2000; // Assume que o ano é no século 2000 (por exemplo, 24 se refere a 2024)

  // Verifica se o mês é válido
  if (month < 1 || month > 12) {
    return false;
  }

  // Cria a data de expiração usando o primeiro dia do mês seguinte
  const expirationDate = dayjs(`${year}-${month + 1}-01`).startOf('month').subtract(1, 'day');

  // Compara com a data atual
  return dayjs().isBefore(expirationDate);
};