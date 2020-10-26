export interface CalcFormData {
  type: string;
  incomeTax: boolean;
  userInput: string;
}

export interface Forms {
  form: {
    calc: { values: CalcFormData };
  };
}
