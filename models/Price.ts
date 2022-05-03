type Currency = {
  code: string,
  symbol: string,
};

type Price = {
  amount: number
  currency: Currency
};

export {
  type Currency,
};
export default Price;