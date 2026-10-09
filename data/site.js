// =====================================================
// BUSINESS DETAILS — sab contact info yahan se badlein
// =====================================================
export const site = {
  name: "Go Easy Adventure",
  legalName: "GO EASY ADVENTURE CAR RENTAL L.L.C",
  arabicName: "جو ايزي ادفنتشر لتأجير السيارات ش.ذ.م.م",
  licenseNo: "1535456",
  licenseAuthority: "Department of Economy and Tourism, Dubai",

    phoneDisplay: "+971 55 793 1183",
  phoneLink: "+971557931183",
  whatsapp: "971557931183", // sirf numbers, + ke baghair
  email: "sales@goeasyadventure.com",

  // Client ka bataya hua branch address
  address: "Shop No. 8, Al Ghurair Building, Al Barsha 1, Dubai, UAE",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Al+Ghurair+Building+Al+Barsha+1+Dubai", // TODO: client ka exact Google Maps pin lagayein
  mapsEmbed: "https://www.google.com/maps?q=Al+Ghurair+Building,+Al+Barsha+1,+Dubai&output=embed",
  hours: "9:00 AM – 6:00 PM", // TODO: konse din band hai? client se confirm karein

  // Trade license par likha hua address
  licenseAddress: "Office G02-144, Al Khabaisi, Dubai",

  domain: "https://goeasyadventure.com",
};

export function whatsappLink(message) {
  const text = message || "Hello Go Easy Adventure, I would like to rent a car.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
