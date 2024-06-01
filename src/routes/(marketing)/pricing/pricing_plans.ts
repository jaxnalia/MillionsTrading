export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "live",
    name: "Stream Access",
    description: "The first step towards profitability in markets",
    price: "£49.99",
    yearlyPrice: "£0",
    priceIntervalName: "/ monthly",
    stripe_price_id: null,
    features: ["Access to the daily livestreams",

    ],
  },
  {
    id: "premium",
    name: "Premium + Stream Access",
    description:
      "The first step towards profitability in markets",
    price: "£99.99",
    yearlyPrice: "£0.00",
    // deal: "MOST POPULAR",
    priceIntervalName: "/ monthly",
    stripe_price_id: "price_1PMJSjBdxywDdojWVtf1UbIT",
    stripe_product_id: "prod_QCiuucT9mIYOkV",
    features: [
      "Access to the premium chat",
      "Access to the premium livestreams + daily livestreams",
      
      // "Access to the private livestreams",
    ],
  },
  {
    id: "champion",
    name: "Champion",
    description:
      "Six months to sharpen your personal edge",
    price: "£500",
    yearlyPrice: "£0.00",
    deal: "SAVE £50",
    priceIntervalName: "/ 6 months",
    stripe_price_id: "price_1PMJTaBdxywDdojWLhT1oPaS",
    stripe_product_id: "prod_QCivnPYINEaRGr",
    features: [
      "Access to the premium chat",
      "Access to the premium livestreams + daily livestreams",
    ],
  },
  {
    id: "master",
    name: "Master",
    description:
      "Two years of absolute commitment to markets",
    price: "£1700",
    yearlyPrice: "£0.00",
    deal: "SAVE £350",
    priceIntervalName: "/ 2 years",
    stripe_price_id: "price_1PMJU0BdxywDdojWAq4YrZlR",
    stripe_product_id: "prod_QCiv6IfC1wx1BU",
    features: [
      "Access to the premium chat",
      "Access to the premium livestreams + daily livestreams",
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
