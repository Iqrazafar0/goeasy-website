// =====================================================
// FAQs aur rental shartein — client ki details aane par confirm karein
// TODO wali cheezein client se poochni hain
// =====================================================
export const requirements = [
  { title: "UAE Residents", text: "Emirates ID (both sides) and a valid UAE driving licence." },
  { title: "Tourists & Visitors", text: "Passport, visit visa entry stamp, home country licence and an International Driving Permit where required." },
  { title: "Minimum Age", text: "Drivers must be at least 21 years old. Luxury cars may need a higher age." }, // TODO: confirm
  { title: "Security Deposit", text: "A refundable deposit is taken at pickup and returned after the car is checked." }, // TODO: amount
];

export const faqs = [
  {
    q: "How do I book a car?",
    a: "Choose a car, send us your dates on WhatsApp or through the booking form, and we will confirm availability and the final price. Payment and documents are completed at pickup or delivery.",
  },
  {
    q: "Do you deliver the car to my location?",
    a: "Yes, we can deliver and collect the car across Dubai, including hotels and the airport. Delivery charges depend on the area.", // TODO: confirm areas/charges
  },
  {
    q: "Is insurance included?",
    a: "All our cars are insured as required in the UAE. Ask our team about full cover options for extra peace of mind.", // TODO: confirm
  },
  {
    q: "Is there a daily kilometre limit?",
    a: "Each rental includes a daily kilometre allowance. Extra kilometres are charged at a fixed rate shared at booking.", // TODO: km limit
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept cash, card and bank transfer.", // TODO: confirm
  },
  {
    q: "Are your prices inclusive of VAT?",
    a: "Yes. All prices shown on our website are in UAE Dirhams and include 5% VAT.",
  },
];
