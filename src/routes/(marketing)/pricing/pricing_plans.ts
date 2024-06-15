export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "live",
    name: "Stream Access",
    description: "The first step towards profitability in markets",
    price: "£49.99",
    yearlyPrice: "£0",
    priceIntervalName: "/ monthly",
    stripe_price_id: "price_1PS38XBdxywDdojWxpDQVj25",
    stripe_product_id: "prod_QIeRfSRNwck2Ac",
    features: ["Access to the daily livestreams",

    ],
  },
  {
    id: "premium",
    name: "Premium + Stream Access",
    description:
      "Absolute commitment to markets",
    price: "£99.99",
    yearlyPrice: "£0.00",
    deal: "MOST POPULAR",
    priceIntervalName: "/ monthly",
    stripe_price_id: "price_1PS39dBdxywDdojWsj3K4W89",
    stripe_product_id: "prod_QIeRfSRNwck2Ac",
    features: [
      "Access to the premium trading chat",
      "Access to the premium livestreams + daily livestreams",
      
      // "Access to the private livestreams",
    ],
  },
  {
    id: "trading_course",
    name: "Trading Course",
    description:
      "Everything you need to become a profitable trader",
    price: "£400",
    yearlyPrice: "£0.00",
    // deal: "SAVE £50",
    priceIntervalName: "/ lifetime",
    stripe_price_id: "price_1PS38XBdxywDdojWxpDQVj25",
    stripe_product_id: "prod_QIeRfSRNwck2Ac",
    features: [
      "80% Win Rate Trading Course (18 high quality training videos)",
      "Lifetime access to the premium trading chat",
      "Lifetime access to the premium livestreams + daily livestreams",
    ],
  },
  {
    id: "test",
    name: "TEST",
    description:
      "Everything you need to test",
    price: "£0.99",
    yearlyPrice: "£0.00",
    // deal: "SAVE £50",
    priceIntervalName: "/ month",
    stripe_price_id: "price_1PS3GZBdxywDdojWRkVKq5qI",
    stripe_product_id: "prod_QIeRfSRNwck2Ac",
    features: [
      "test",
    ],
  },
  // {
  //   id: "master",
  //   name: "Master",
  //   description:
  //     "Two years of absolute commitment to markets",
  //   price: "£1700",
  //   yearlyPrice: "£0.00",
  //   deal: "SAVE £350",
  //   priceIntervalName: "/ 2 years",
  //   stripe_price_id: "price_1PMJU0BdxywDdojWAq4YrZlR",
  //   stripe_product_id: "prod_QCiv6IfC1wx1BU",
  //   features: [
  //     "Access to the premium chat",
  //     "Access to the premium livestreams + daily livestreams",
  //   ],
  // },
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
