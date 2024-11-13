export type TierNames = keyof typeof subscriptionTiers

export const subscriptionTiers = {
  Free: {
    name: "Free",
    priceInCents: 0,
    maxNumberOfProducts: 5,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
  },
  Basic: {
    name: "Basic",
    priceInCents: 2900,
    maxNumberOfProducts: 10,
    maxNumberOfVisits: 10000,
    canAccessAnalytics: true,
    canCustomizeBanner: false,
    canRemoveBranding: true,
  },
  Standard: {
    name: "Standard",
    priceInCents: 7900,
    maxNumberOfProducts: 30,
    maxNumberOfVisits: 100000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
  Premium: {
    name: "Premium",
    priceInCents: 14900,
    maxNumberOfProducts: 50,
    maxNumberOfVisits: 1000000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
};
export const subscriptionTiersInOrder = [
    subscriptionTiers.Premium,
    subscriptionTiers.Standard,
    subscriptionTiers.Basic,
    subscriptionTiers.Free,
]