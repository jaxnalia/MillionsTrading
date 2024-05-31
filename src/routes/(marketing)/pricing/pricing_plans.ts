export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "FREE",
    description: "Get a taste of what you can achieve with us.",
    price: "$0",
    yearlyPrice: "$0",
    priceIntervalName: "/ monthly",
    stripe_price_id: null,
    features: ["Fast Performance", "Stripe Integration"],
  },
  {
    id: "trader",
    name: "Trader",
    description:
      "The first step towards profitability in markets.",
    price: "$49.99",
    yearlyPrice: "$0.00",
    // deal: "MOST POPULAR",
    priceIntervalName: "/ monthly",
    stripe_price_id: "price_1PMJSjBdxywDdojWVtf1UbIT",
    stripe_product_id: "prod_QCiuucT9mIYOkV",
    features: [
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "champion",
    name: "Champion",
    description:
      "Six months to develop your personal edge.",
    price: "$250",
    yearlyPrice: "$0.00",
    deal: "SAVE $50",
    priceIntervalName: "/ 6 months",
    stripe_price_id: "price_1PMJTaBdxywDdojWLhT1oPaS",
    stripe_product_id: "prod_QCivnPYINEaRGr",
    features: [
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "master",
    name: "Master",
    description:
      "Two years of complete commitment to the markets.",
    price: "$850",
    yearlyPrice: "$0.00",
    deal: "SAVE $350",
    priceIntervalName: "/ 2 years",
    stripe_price_id: "price_1PMJU0BdxywDdojWAq4YrZlR",
    stripe_product_id: "prod_QCiv6IfC1wx1BU",
    features: [
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  // {
  //   id: "enterprise",
  //   name: "Enterprise",
  //   description:
  //     "A plan to test the upgrade expereince. Try buying this with the test credit card 4242424242424242.",
  //   price: "$15",
  //   yearlyPrice: "$150",
  //   priceIntervalName: "per month",
  //   stripe_price_id: "price_1PK9h0CDVJ7uBSaOZSy1uTe4",
  //   stripe_product_id: "prod_QAUggYcZreQJKS",
  //   features: [
  //     "Everything in Pro",
  //     "Try the 'upgrade plan' UX",
  //   ],
  // },
]
