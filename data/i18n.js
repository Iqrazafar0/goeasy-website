// =====================================================
// TRANSLATIONS — website ka sara text, English (en) aur Arabic (ar)
// Koi line badalni ho to dono languages mein badlein.
// =====================================================

export const catNames = {
  en: { Sports: "Sports", Exotic: "Exotic", Luxury: "Luxury", SUV: "SUV", Convertible: "Convertible", Economy: "Economy", All: "All" },
  ar: { Sports: "رياضية", Exotic: "خارقة", Luxury: "فاخرة", SUV: "دفع رباعي", Convertible: "مكشوفة", Economy: "اقتصادية", All: "الكل" },
};

export const dict = {
  // ---------------------------------------------------- ENGLISH
  en: {
    nav: { home: "Home", carTypes: "Car Types", brands: "Car Brands", monthly: "Monthly Rentals", prices: "Prices", about: "About Us", faqs: "FAQs", contact: "Contact", bookNow: "Book Now", allCars: "All Cars", menu: "Open menu" },
    addressShort: "Shop No. 8, Al Ghurair Building, Al Barsha 1, Dubai, UAE",
    hours: "Daily · 9:00 AM – 6:00 PM",

    hero: {
      eyebrow: "Luxury & Sports Car Rental · Dubai",
      h1a: "Drive Dubai in ",
      h1b: "pure style.",
      lead: "Ferrari, Lamborghini, Rolls-Royce, G63 and more. Delivered to your door, with free airport pick-up and drop-off.",
      explore: "Explore the Fleet",
      chat: "Chat on WhatsApp",
      points: [["Free", "Airport pick-up & drop"], ["Card · Cash · Crypto", "Pay your way"], ["AED · USD · EUR · GBP", "Currencies accepted"]],
    },

    form: {
      title: "Book Your Car", subtitle: "Fill in the details and confirm on WhatsApp in seconds.",
      contactTitle: "Send a Booking Request", contactSubtitle: "Tell us your dates and we will confirm on WhatsApp.",
      name: "Full Name", namePh: "Your name", car: "Select Car", anyCar: "Any available car",
      pickup: "Pickup Date", ret: "Return Date", location: "Pickup Location", locationPh: "Airport (free), hotel, home or our branch",
      send: "Send Booking Request", note: "We reply on WhatsApp to confirm availability and price.", perDay: "day",
    },

    car: { from: "From", perDay: "/ day", seats: "Seats", auto: "Automatic", deals: "Weekly & monthly deals", book: "Book on WhatsApp" },
    fleetNote: "Prices are in AED per day. Free airport pick-up & drop-off. Car photos are for illustration; colour and model year may vary.",
    noCars: "No cars found. Please choose another category or brand.",

    cat: {
      eyebrow: "Browse by Category", title: "Find the car that fits your moment",
      text: "From weekend supercars to everyday city drives, pick a category to see every car and price.",
      cars: "cars", from: "from", explore: "Explore", suffix: " Cars",
      texts: { Sports: "Track-bred power for the open road", Exotic: "Rare supercars that turn every head", Luxury: "First-class comfort for special days", SUV: "Space and presence for every trip", Convertible: "Roof down, Dubai sunshine in", Economy: "Smart, stylish and budget friendly" },
    },

    featured: { eyebrow: "Most Requested", title: "Our featured cars", text: "The cars our customers book again and again.", seeAll: "See All Cars" },

    airport: {
      eyebrow: "Free Service", title: "Land in Dubai. Your car is already waiting.",
      text: "Free airport pick-up and drop-off on every rental. Send us your flight number and we handle the rest.",
      btn: "Book Airport Delivery",
    },

    why: {
      eyebrow: "Why Choose Us", title: "Premium cars, simple service",
      items: [
        ["Free Airport Delivery", "We meet you at the airport with your car, and collect it when you fly out. No extra charge."],
        ["Clear Prices", "Daily rates shown upfront, with better deals for weekly and monthly rentals."],
        ["Premium, Well-Kept Cars", "Every car is detailed, checked and serviced before it reaches you."],
        ["Fast WhatsApp Support", "Book, extend or ask anything on WhatsApp and get a quick reply."],
      ],
    },

    pay: {
      eyebrow: "Easy Payments", title: "Pay the way that suits you",
      text: "Card, cash or crypto, online or at delivery. We make payment as easy as the drive.",
      items: [
        ["Credit & Debit Cards", "Visa, Mastercard and more. Pay online through a secure payment link."],
        ["Card on Delivery", "Pay by card when the car arrives at your door, hotel or the airport."],
        ["Cash on Delivery", "Pay in cash when we deliver the car to you."],
        ["Cash at Our Counter", "Visit our Al Barsha branch and pay in cash."],
        ["Crypto Currency", "We accept payment in crypto currency. Ask our team for details."],
        ["Multi-Currency Cash", "AED, US Dollar, Euro and British Pound are all accepted."],
      ],
    },

    how: {
      eyebrow: "How It Works", title: "Book your car in 3 simple steps",
      steps: [
        ["Choose Your Car", "Browse our fleet of sports, exotic, luxury and everyday cars."],
        ["Send Your Dates", "Share your dates and pick-up point on WhatsApp or through the form."],
        ["We Deliver, You Drive", "We bring the car to you, at the airport for free, and you enjoy the road."],
      ],
    },

    docs: {
      eyebrow: "Documents Needed", title: "What you need to rent",
      text: "Bring these documents at pickup or delivery. Our team will guide you if anything is missing.",
      items: [
        ["UAE Residents", "Emirates ID (both sides) and a valid UAE driving licence."],
        ["Tourists & Visitors", "Passport, visit visa entry stamp, home country licence and an International Driving Permit where required."],
        ["Minimum Age", "Drivers must be at least 21 years old. Sports, exotic and luxury cars may need a higher age."],
        ["Security Deposit", "A refundable security deposit of AED 2,000 is taken at pickup and returned after the car is checked."],
      ],
    },

    faq: {
      eyebrow: "FAQs", title: "Common questions",
      items: [
        ["How do I book a car?", "Choose a car, send us your dates on WhatsApp or through the booking form, and we will confirm availability and the final price. You can pay online through a payment link or when the car is delivered."],
        ["Is airport pick-up and drop-off free?", "Yes. We deliver and collect the car at Dubai airports free of charge. Just share your flight details and we will be there."],
        ["Which payment methods do you accept?", "Credit and debit cards through a secure payment link, card on delivery, cash on delivery, cash at our counter, and crypto currency. We accept cash in AED, US Dollars, Euros and British Pounds."],
        ["Do you deliver the car to my hotel or home?", "Yes, we deliver across Dubai, including hotels, homes and offices. Ask our team about delivery to other emirates."],
        ["Do you offer weekly and monthly rates?", "Yes. Longer rentals get better daily rates. Message us on WhatsApp with your dates for a weekly or monthly quote."],
        ["Is insurance included?", "All our cars come with standard insurance as required in the UAE. Ask our team about full cover options for extra peace of mind."],
      ],
    },

    detail: {
      home: "Home",
      // Deposit: client ne confirm kiya (AED 2,000). TODO: mileage aur extra km client se confirm karein
      deposit: "Deposit", depositVal: "AED 2,000",
      mileage: "Mileage Limit", mileageVal: "250 km / day",
      extra: "Extra Mileage", extraVal: "AED 25 / km",
      payment: "Payment", paymentVal: "Card, Cash, Crypto",
      transmission: "Transmission", auto: "Automatic",
      type: "Car Type", engine: "Engine", seats: "Seats", doors: "Doors",
      accel: "0–100 km/h", sec: "sec", drive: "Drive", fuel: "Fuel", luggage: "Luggage", bags: "bags",
      fuels: { Petrol: "Petrol", Hybrid: "Hybrid", Electric: "Electric" },
      daily: "Daily", weekly: "Weekly", monthly: "Monthly", askNow: "Ask Now",
      whatsapp: "WhatsApp", call: "Call Us", book: "Book Now",
      perks: ["Free airport pick-up & drop-off", "Delivery to your hotel or home", "Pay by card, cash or crypto"],
      bookTitle: "Book this car", bookSubtitle: "Choose your dates and confirm on WhatsApp.",
      similar: "Similar cars you may like",
      note: "Photos are for illustration. Specifications and colour may vary by model year.",
      photo: "Photo", prev: "Previous photo", next: "Next photo",
    },
    viewDetails: "View Details",
    allBrandsLink: "View all cars",
    cta: { title: "Ready to hit the road?", text: "Message us now and get your car confirmed today.", btn: "Book on WhatsApp" },

    fleetPage: { eyebrow: "Our Fleet", title: "Sports, exotic, luxury & everyday cars", text: "Choose a category or brand, pick your car and book it on WhatsApp in a minute. Free airport pick-up and drop-off.", brand: "Brand" },

    pricesPage: {
      eyebrow: "Rental Prices", title: "Clear daily prices for every car",
      text: "All prices are in AED per day. Weekly and monthly rentals get better rates — ask us on WhatsApp.",
      car: "Car", category: "Category", daily: "Price / Day", book: "Book",
    },

    monthlyPage: {
      eyebrow: "Monthly Rentals", title: "Long-term car rental in Dubai",
      text: "Keep a car for a month or more at a lower daily rate. Ideal for residents, business trips and long stays.",
      benefitsTitle: "Why rent monthly with us",
      benefits: [
        ["Lower Daily Rate", "The longer you rent, the less you pay per day."],
        ["Maintenance Included", "Servicing and routine maintenance are handled by our team."],
        ["Free Airport Delivery", "Start and end your rental at the airport at no extra cost."],
        ["Easy Car Swap", "Need a different car mid-month? Just ask us."],
      ],
      popular: "Popular cars for monthly rental",
      quote: "Get Monthly Quote",
    },

    faqsPage: { eyebrow: "Help Center", title: "Frequently asked questions", text: "Everything you need to know about renting a car with us. Still have a question? Message us on WhatsApp." },

    about: {
      eyebrow: "About Us", title: "Making car rental in Dubai simple",
      text: "A Dubai-licensed rental company built on clear prices, reliable cars and quick service.",
      whoEyebrow: "Who We Are",
      who1: " is a car rental company based in Al Barsha, Dubai. We help residents, visitors and businesses get a dependable car without long paperwork or hidden costs.",
      who2: "From Ferrari, Lamborghini and Rolls-Royce to everyday economy cars, we offer flexible daily, weekly and monthly plans, free airport delivery, and payment by card, cash or crypto.",
      stats: [["Daily", "to monthly plans"], ["6", "car categories"], ["Free", "airport delivery"]],
      promiseEyebrow: "Our Promise", promiseTitle: "What you can expect from us",
      values: [
        ["Honest Pricing", "The price you see is the price you pay. Every charge is explained before you sign."],
        ["Cars You Can Rely On", "Our cars are serviced on schedule and checked before every handover, so your trip runs smoothly."],
        ["Service That Responds", "Questions, extensions or changes are handled quickly on WhatsApp or by phone."],
      ],
      browse: "Browse Our Fleet",
    },

    contact: {
      eyebrow: "Contact Us", title: "We are here to help",
      text: "Call, WhatsApp or visit our branch. Most booking requests are confirmed the same day.",
      phone: "Phone", whatsapp: "WhatsApp", email: "Email", office: "Branch", hours: "Working Hours",
      license: "Trade License No.", authority: "Department of Economy and Tourism, Dubai",
      mapTitle: "Go Easy Adventure location on Google Maps",
    },

    footer: {
      text: "Luxury, sports and everyday car rental in Dubai. Free airport delivery. Pay by card, cash or crypto.",
      quick: "Quick Links", types: "Car Types", contact: "Contact",
      rights: "All rights reserved.", license: "Dubai Trade License No.",
    },
  },

  // ---------------------------------------------------- ARABIC
  ar: {
    nav: { home: "الرئيسية", carTypes: "أنواع السيارات", brands: "الماركات", monthly: "إيجار شهري", prices: "الأسعار", about: "من نحن", faqs: "الأسئلة الشائعة", contact: "اتصل بنا", bookNow: "احجز الآن", allCars: "جميع السيارات", menu: "فتح القائمة" },
    addressShort: "محل رقم 8، بناية الغرير، البرشاء 1، دبي، الإمارات",
    hours: "يومياً · 9:00 ص – 6:00 م",

    hero: {
      eyebrow: "تأجير السيارات الفاخرة والرياضية · دبي",
      h1a: "قُد في دبي ",
      h1b: "بكل أناقة.",
      lead: "فيراري، لامبورغيني، رولز رويس، جي 63 والمزيد. نوصل السيارة إلى بابك، مع توصيل واستلام مجاني من المطار.",
      explore: "تصفح أسطولنا",
      chat: "تواصل عبر واتساب",
      points: [["مجاناً", "توصيل واستلام من المطار"], ["بطاقة · نقداً · عملات رقمية", "ادفع بطريقتك"], ["درهم · دولار · يورو · جنيه", "عملات مقبولة"]],
    },

    form: {
      title: "احجز سيارتك", subtitle: "املأ البيانات وأكّد الحجز عبر واتساب خلال ثوانٍ.",
      contactTitle: "أرسل طلب حجز", contactSubtitle: "أخبرنا بالتواريخ وسنؤكد لك عبر واتساب.",
      name: "الاسم الكامل", namePh: "اسمك", car: "اختر السيارة", anyCar: "أي سيارة متاحة",
      pickup: "تاريخ الاستلام", ret: "تاريخ الإرجاع", location: "مكان الاستلام", locationPh: "المطار (مجاناً)، الفندق، المنزل أو فرعنا",
      send: "إرسال طلب الحجز", note: "نرد عليك عبر واتساب لتأكيد التوفر والسعر.", perDay: "يوم",
    },

    car: { from: "يبدأ من", perDay: "/ يوم", seats: "مقاعد", auto: "أوتوماتيك", deals: "عروض أسبوعية وشهرية", book: "احجز عبر واتساب" },
    fleetNote: "الأسعار بالدرهم الإماراتي لليوم الواحد. توصيل واستلام مجاني من المطار. صور السيارات للتوضيح فقط وقد يختلف اللون وسنة الصنع.",
    noCars: "لا توجد سيارات. يرجى اختيار فئة أو ماركة أخرى.",

    cat: {
      eyebrow: "تصفح حسب الفئة", title: "اختر السيارة التي تناسب لحظتك",
      text: "من السيارات الخارقة لعطلة نهاية الأسبوع إلى التنقل اليومي في المدينة، اختر فئة لترى جميع السيارات والأسعار.",
      cars: "سيارات", from: "يبدأ من", explore: "استكشف", suffix: "",
      texts: { Sports: "قوة مستوحاة من حلبات السباق", Exotic: "سيارات خارقة نادرة تلفت الأنظار", Luxury: "راحة من الدرجة الأولى لأيامك المميزة", SUV: "مساحة وحضور لكل رحلة", Convertible: "افتح السقف واستمتع بشمس دبي", Economy: "أنيقة وعملية وبسعر مناسب" },
    },

    featured: { eyebrow: "الأكثر طلباً", title: "سياراتنا المميزة", text: "السيارات التي يحجزها عملاؤنا مرة بعد مرة.", seeAll: "جميع السيارات" },

    airport: {
      eyebrow: "خدمة مجانية", title: "تصل إلى دبي، وسيارتك بانتظارك.",
      text: "توصيل واستلام مجاني من المطار مع كل حجز. أرسل لنا رقم رحلتك ونحن نتولى الباقي.",
      btn: "احجز التوصيل إلى المطار",
    },

    why: {
      eyebrow: "لماذا نحن", title: "سيارات فاخرة وخدمة بسيطة",
      items: [
        ["توصيل مجاني من المطار", "نستقبلك في المطار بسيارتك ونستلمها عند مغادرتك، دون أي رسوم إضافية."],
        ["أسعار واضحة", "الأسعار اليومية معروضة بوضوح، مع عروض أفضل للإيجار الأسبوعي والشهري."],
        ["سيارات فاخرة ومعتنى بها", "كل سيارة يتم تنظيفها وفحصها وصيانتها قبل أن تصل إليك."],
        ["دعم سريع عبر واتساب", "احجز أو مدّد أو اسأل عن أي شيء عبر واتساب واحصل على رد سريع."],
      ],
    },

    pay: {
      eyebrow: "دفع سهل", title: "ادفع بالطريقة التي تناسبك",
      text: "بطاقة أو نقداً أو عملات رقمية، عبر الإنترنت أو عند التسليم. نجعل الدفع سهلاً مثل القيادة.",
      items: [
        ["بطاقات الائتمان والخصم", "فيزا وماستركارد وغيرها. ادفع عبر الإنترنت من خلال رابط دفع آمن."],
        ["الدفع بالبطاقة عند التسليم", "ادفع بالبطاقة عند وصول السيارة إلى بابك أو فندقك أو المطار."],
        ["الدفع نقداً عند التسليم", "ادفع نقداً عندما نوصل السيارة إليك."],
        ["الدفع نقداً في فرعنا", "تفضل بزيارة فرعنا في البرشاء وادفع نقداً."],
        ["العملات الرقمية", "نقبل الدفع بالعملات الرقمية. اسأل فريقنا عن التفاصيل."],
        ["نقداً بعدة عملات", "نقبل الدرهم الإماراتي والدولار الأمريكي واليورو والجنيه الإسترليني."],
      ],
    },

    how: {
      eyebrow: "كيف يعمل", title: "احجز سيارتك في 3 خطوات بسيطة",
      steps: [
        ["اختر سيارتك", "تصفح أسطولنا من السيارات الرياضية والخارقة والفاخرة واليومية."],
        ["أرسل التواريخ", "شاركنا التواريخ ومكان الاستلام عبر واتساب أو من خلال النموذج."],
        ["نوصلها وأنت تقود", "نوصل السيارة إليك، ومجاناً في المطار، وأنت تستمتع بالطريق."],
      ],
    },

    docs: {
      eyebrow: "المستندات المطلوبة", title: "ما تحتاجه للإيجار",
      text: "أحضر هذه المستندات عند الاستلام أو التوصيل. سيساعدك فريقنا إذا كان هناك أي نقص.",
      items: [
        ["المقيمون في الإمارات", "الهوية الإماراتية (الوجهين) ورخصة قيادة إماراتية سارية."],
        ["السياح والزوار", "جواز السفر وختم الدخول، ورخصة القيادة من بلدك، ورخصة قيادة دولية عند الحاجة."],
        ["الحد الأدنى للعمر", "يجب ألا يقل عمر السائق عن 21 عاماً. قد تتطلب السيارات الرياضية والفاخرة عمراً أكبر."],
        ["مبلغ التأمين", "يُؤخذ مبلغ تأمين مسترد قدره 2,000 درهم عند الاستلام ويُعاد بعد فحص السيارة."],
      ],
    },

    faq: {
      eyebrow: "الأسئلة الشائعة", title: "أسئلة متكررة",
      items: [
        ["كيف أحجز سيارة؟", "اختر السيارة وأرسل لنا التواريخ عبر واتساب أو من خلال نموذج الحجز، وسنؤكد لك التوفر والسعر النهائي. يمكنك الدفع عبر رابط دفع إلكتروني أو عند تسليم السيارة."],
        ["هل التوصيل والاستلام من المطار مجاني؟", "نعم. نوصل السيارة ونستلمها في مطارات دبي مجاناً. فقط شاركنا تفاصيل رحلتك وسنكون هناك."],
        ["ما هي طرق الدفع المتاحة؟", "بطاقات الائتمان والخصم عبر رابط دفع آمن، البطاقة عند التسليم، نقداً عند التسليم، نقداً في فرعنا، والعملات الرقمية. نقبل النقد بالدرهم والدولار واليورو والجنيه الإسترليني."],
        ["هل توصلون السيارة إلى الفندق أو المنزل؟", "نعم، نوصل في جميع أنحاء دبي بما في ذلك الفنادق والمنازل والمكاتب. اسأل فريقنا عن التوصيل إلى الإمارات الأخرى."],
        ["هل لديكم أسعار أسبوعية وشهرية؟", "نعم. كلما طالت مدة الإيجار قلّ السعر اليومي. راسلنا عبر واتساب بالتواريخ لعرض سعر أسبوعي أو شهري."],
        ["هل التأمين مشمول؟", "جميع سياراتنا مؤمنة بالتأمين الأساسي المطلوب في الإمارات. اسأل فريقنا عن خيارات التأمين الشامل لراحة بال أكبر."],
      ],
    },

    detail: {
      home: "الرئيسية",
      deposit: "مبلغ التأمين", depositVal: "2,000 درهم",
      mileage: "حد المسافة", mileageVal: "250 كم / يوم",
      extra: "المسافة الإضافية", extraVal: "25 درهم / كم",
      payment: "الدفع", paymentVal: "بطاقة، نقداً، عملات رقمية",
      transmission: "ناقل الحركة", auto: "أوتوماتيك",
      type: "نوع السيارة", engine: "المحرك", seats: "المقاعد", doors: "الأبواب",
      accel: "0–100 كم/س", sec: "ثانية", drive: "نظام الدفع", fuel: "الوقود", luggage: "الأمتعة", bags: "حقائب",
      fuels: { Petrol: "بنزين", Hybrid: "هجين", Electric: "كهربائي" },
      daily: "يومي", weekly: "أسبوعي", monthly: "شهري", askNow: "اسأل الآن",
      whatsapp: "واتساب", call: "اتصل بنا", book: "احجز الآن",
      perks: ["توصيل واستلام مجاني من المطار", "توصيل إلى الفندق أو المنزل", "ادفع بالبطاقة أو نقداً أو بالعملات الرقمية"],
      bookTitle: "احجز هذه السيارة", bookSubtitle: "اختر التواريخ وأكّد عبر واتساب.",
      similar: "سيارات مشابهة قد تعجبك",
      note: "الصور للتوضيح فقط. قد تختلف المواصفات واللون حسب سنة الصنع.",
      photo: "صورة", prev: "الصورة السابقة", next: "الصورة التالية",
    },
    viewDetails: "عرض التفاصيل",
    allBrandsLink: "عرض جميع السيارات",
    cta: { title: "مستعد للانطلاق؟", text: "راسلنا الآن واحصل على تأكيد سيارتك اليوم.", btn: "احجز عبر واتساب" },

    fleetPage: { eyebrow: "أسطولنا", title: "سيارات رياضية وخارقة وفاخرة ويومية", text: "اختر فئة أو ماركة، ثم اختر سيارتك واحجزها عبر واتساب خلال دقيقة. توصيل واستلام مجاني من المطار.", brand: "الماركة" },

    pricesPage: {
      eyebrow: "أسعار الإيجار", title: "أسعار يومية واضحة لكل سيارة",
      text: "جميع الأسعار بالدرهم الإماراتي لليوم الواحد. الإيجار الأسبوعي والشهري بأسعار أفضل — اسألنا عبر واتساب.",
      car: "السيارة", category: "الفئة", daily: "السعر / يوم", book: "احجز",
    },

    monthlyPage: {
      eyebrow: "إيجار شهري", title: "تأجير سيارات طويل الأمد في دبي",
      text: "احتفظ بالسيارة لمدة شهر أو أكثر بسعر يومي أقل. مثالي للمقيمين ورحلات العمل والإقامات الطويلة.",
      benefitsTitle: "لماذا تستأجر شهرياً معنا",
      benefits: [
        ["سعر يومي أقل", "كلما طالت مدة الإيجار، قلّ ما تدفعه في اليوم."],
        ["الصيانة مشمولة", "يتولى فريقنا الخدمة والصيانة الدورية."],
        ["توصيل مجاني من المطار", "ابدأ وأنهِ الإيجار في المطار دون أي تكلفة إضافية."],
        ["تبديل السيارة بسهولة", "تحتاج سيارة مختلفة خلال الشهر؟ فقط اطلب منا."],
      ],
      popular: "سيارات شائعة للإيجار الشهري",
      quote: "اطلب عرض سعر شهري",
    },

    faqsPage: { eyebrow: "مركز المساعدة", title: "الأسئلة الشائعة", text: "كل ما تحتاج معرفته عن استئجار سيارة معنا. لديك سؤال آخر؟ راسلنا عبر واتساب." },

    about: {
      eyebrow: "من نحن", title: "نجعل تأجير السيارات في دبي سهلاً",
      text: "شركة تأجير مرخصة في دبي، قائمة على الأسعار الواضحة والسيارات الموثوقة والخدمة السريعة.",
      whoEyebrow: "تعرّف علينا",
      who1: " هي شركة لتأجير السيارات مقرها البرشاء، دبي. نساعد المقيمين والزوار والشركات في الحصول على سيارة موثوقة دون أوراق كثيرة أو تكاليف خفية.",
      who2: "من فيراري ولامبورغيني ورولز رويس إلى السيارات الاقتصادية اليومية، نقدم خططاً مرنة يومية وأسبوعية وشهرية، وتوصيلاً مجانياً من المطار، والدفع بالبطاقة أو نقداً أو بالعملات الرقمية.",
      stats: [["يومي", "إلى شهري"], ["6", "فئات سيارات"], ["مجاني", "توصيل المطار"]],
      promiseEyebrow: "وعدنا", promiseTitle: "ما يمكنك توقعه منا",
      values: [
        ["أسعار صادقة", "السعر الذي تراه هو السعر الذي تدفعه، ونوضح كل رسوم قبل التوقيع."],
        ["سيارات يمكنك الاعتماد عليها", "تتم صيانة سياراتنا بانتظام وفحصها قبل كل تسليم لتكون رحلتك سلسة."],
        ["خدمة سريعة الاستجابة", "نتعامل مع الأسئلة والتمديد والتغييرات بسرعة عبر واتساب أو الهاتف."],
      ],
      browse: "تصفح أسطولنا",
    },

    contact: {
      eyebrow: "اتصل بنا", title: "نحن هنا لمساعدتك",
      text: "اتصل بنا أو راسلنا عبر واتساب أو زر فرعنا. معظم طلبات الحجز تؤكد في نفس اليوم.",
      phone: "الهاتف", whatsapp: "واتساب", email: "البريد الإلكتروني", office: "الفرع", hours: "ساعات العمل",
      license: "رقم الرخصة التجارية", authority: "دائرة الاقتصاد والسياحة، دبي",
      mapTitle: "موقع جو ايزي ادفنتشر على خرائط جوجل",
    },

    footer: {
      text: "تأجير السيارات الفاخرة والرياضية واليومية في دبي. توصيل مجاني من المطار. ادفع بالبطاقة أو نقداً أو بالعملات الرقمية.",
      quick: "روابط سريعة", types: "أنواع السيارات", contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.", license: "رقم الرخصة التجارية في دبي",
    },
  },
};
