import mongoose, { Schema } from "mongoose";

const websiteSettingsSchema = new Schema(
  {
    siteTitle: { type: String, trim: true },
    logo1: { type: String, trim: true }, // main logo
    logo2: { type: String, trim: true }, // precise logo (icon Only)
    description: { type: String, trim: true },
    // company settings
    companyName: { type: String, trim: true },
    legalName: { type: String, trim: true },
    contactPerson: { type: String, trim: true },
    address: { type: String, trim: true },
    countryId: { type: String, trim: true },
    country: { type: String, trim: true },
    iso2: { type: String, trim: true },
    phone_code: { type: String, trim: true },
    capital: { type: String, trim: true },
    currency: { type: String, trim: true },
    icon: { type: String, trim: true },
    stateId: { type: String, trim: true },
    state_name: { type: String, trim: true },
    state_code: { type: String, trim: true },
    cityId: { type: String, trim: true },
    city_name: { type: String, trim: true },
    lon: { type: Number },
    lat: { type: Number },
    companyPhone: { type: Number },
    email: { type: String, trim: true },
    website: { type: String, trim: true },
    GSTIN: { type: String, trim: true },
    // banking details
    bankAccount: { type: String, trim: true },
    bankName: { type: String, trim: true },
    IFSC: { type: String, trim: true },
    bankBranch: { type: String, trim: true },
    MICR: { type: String, trim: true },
    branchAddress: { type: String, trim: true },
    // api settings
    appURL: { type: String, trim: true },
    // google settings
    googleAPIKey: { type: String, trim: true },
    recapchaSiteKey: { type: String, trim: true },
    recapchaSecretKey: { type: String, trim: true },
    linodeTOKEN: { type: String, trim: true },
    currencyAPI: { type: String, trim: true },
    razorPayKeyId: { type: String, trim: true },
    razorPaySecret: { type: String, trim: true },
    openWeatherAPIKey: { type: String, trim: true },
    openWeatherKeyName: { type: String, trim: true },
    ipGeoLocationKey: { type: String, trim: true },
    // social handles
    facebook: { type: String, trim: true },
    twitter: { type: String, trim: true },
    google: { type: String, trim: true },
    youtube: { type: String, trim: true },
    pinterest: { type: String, trim: true },
    // sections
    about: { type: Boolean, default: false },
    blog: { type: Boolean, default: false },
    products: { type: Boolean, default: false },
    services: { type: Boolean, default: false },
    team: { type: Boolean, default: false },
    testimonials: { type: Boolean, default: false },
    ecommerce: { type: Boolean, default: false },
    offers: { type: Boolean, default: false },
    newsletter: { type: Boolean, default: false },
    pricingTables: { type: Boolean, default: false },
    events: { type: Boolean, default: false },
    careers: { type: Boolean, default: false },
    privacyPolicy: { type: Boolean, default: false },
    projects: { type: Boolean, default: false },
    manufacturing: { type: Boolean, default: false },
    seo: { type: Boolean, default: true },
    searchable: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

websiteSettingsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      siteTitle: this.siteTitle,
      logo1: this.logo1,
      logo2: this.logo2,
      description: this.description,
      // company settings
      companyName: this.companyName,
      legalName: this.legalName,
      contactPerson: this.contactPerson,
      address: this.address,
      countryId: this.countryId,
      country: this.country,
      iso2: this.iso2,
      phone_code: this.phone_code,
      capital: this.capital,
      currency: this.currency,
      icon: this.icon,
      stateId: this.stateId,
      state_name: this.state_name,
      state_code: this.state_code,
      cityId: this.cityId,
      city_name: this.city_name,
      lon: this.lon,
      lat: this.lat,
      companyPhone: this.companyPhone,
      email: this.email,
      website: this.website,
      GSTIN: this.GSTIN,
      // banking details
      bankAccount: this.bankAccount,
      bankName: this.bankName,
      IFSC: this.IFSC,
      bankBranch: this.bankBranch,
      MICR: this.MICR,
      branchAddress: this.branchAddress,
      // api settings
      appURL: this.appURL,
      // google settings
      googleAPIKey: this.googleAPIKey,
      recapchaSiteKey: this.recapchaSiteKey,
      recapchaSecretKey: this.recapchaSecretKey,
      linodeTOKEN: this.linodeTOKEN,
      currencyAPI: this.currencyAPI,
      razorPayKeyId: this.razorPayKeyId,
      razorPaySecret: this.razorPaySecret,
      openWeatherAPIKey: this.openWeatherAPIKey,
      openWeatherKeyName: this.openWeatherKeyName,
      ipGeoLocationKey: this.ipGeoLocationKey,
      // social handles
      facebook: this.facebook,
      twitter: this.twitter,
      google: this.google,
      youtube: this.youtube,
      pinterest: this.pinterest,
      // sections
      about: this.about,
      blog: this.blog,
      products: this.products,
      services: this.services,
      team: this.team,
      testimonials: this.testimonials,
      ecommerce: this.ecommerce,
      offers: this.offers,
      newsletter: this.newsletter,
      pricingTables: this.pricingTables,
      events: this.events,
      careers: this.careers,
      privacyPolicy: this.privacyPolicy,
      projects: this.projects,
      manufacturing: this.manufacturing,
      seo: this.seo,
      searchable: this.searchable,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("WebsiteSettings", websiteSettingsSchema);

export const schema = model.schema;
export default model;
