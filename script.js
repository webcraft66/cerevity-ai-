/* ============================================================
   CerevityAI Partnership Assistant — fully client-side.
   No API calls, no backend, no API key. All answers are matched
   locally against the KNOWLEDGE_BASE below using keyword scoring.
   Supports English + Hindi via the language toggle in the header.
   Edit KNOWLEDGE_BASE to change what the bot knows / how it answers.
   ============================================================ */

const KNOWLEDGE_BASE = [
  {
    id: 'overview',
    keywords: ['partnership', 'include', 'what do you do', 'offer', 'services', 'what is cerevityai', 'about'],
    answer: {
      en: `CerevityAI partners with schools on three fronts:
- **AI & robotics education** — an embedded trainer running regular classes and labs
- **Digital transformation** — smart classrooms, brand positioning, and content strategy
- **Online presence** — Google Business Profile fixes, reviews, and analytics-driven growth

It's structured as a long-term, year-round partnership rather than a one-off project.`,
      hi: `CerevityAI तीन चीज़ों पर स्कूलों के साथ पार्टनरशिप करता है:
- **AI और रोबोटिक्स एजुकेशन** — नियमित क्लासेज़ और लैब चलाने वाला डेडिकेटेड ट्रेनर
- **डिजिटल ट्रांसफॉर्मेशन** — स्मार्ट क्लासरूम, ब्रांड पोज़िशनिंग और कंटेंट स्ट्रैटेजी
- **ऑनलाइन प्रेज़ेंस** — Google Business Profile ठीक करना, रिव्यूज़, और एनालिटिक्स-ड्रिवन ग्रोथ

यह एक बार का प्रोजेक्ट नहीं, बल्कि एक लॉन्ग-टर्म, ईयर-राउंड पार्टनरशिप है।`
    }
  },
  {
    id: 'robotics',
    keywords: ['robotics lab', 'robot', 'lab setup', 'kit', 'equipment'],
    answer: {
      en: `We guide schools through **robotics lab setup** — kit selection, lab layout, and safety protocols — plus a structured learning pathway that scales from beginner to advanced. We also provide ongoing technical support once the lab is running.`,
      hi: `हम स्कूलों को **रोबोटिक्स लैब सेटअप** में गाइड करते हैं — किट सिलेक्शन, लैब लेआउट, और सेफ्टी प्रोटोकॉल्स — साथ ही एक स्ट्रक्चर्ड लर्निंग पाथवे जो बिगिनर से एडवांस्ड तक स्केल करता है। लैब शुरू होने के बाद भी हम ऑन्गोइंग टेक्निकल सपोर्ट देते हैं।`
    }
  },
  {
    id: 'coding-stem',
    keywords: ['coding', 'programming', 'stem', 'machine learning', 'automation', 'curriculum'],
    answer: {
      en: `Our coding & STEM track builds logical thinking through guided programming and automation projects with clear, measurable outcomes. Machine learning basics are taught through visual, interactive activities connected to real-world applications — age-appropriate at every level.`,
      hi: `हमारा कोडिंग और STEM ट्रैक गाइडेड प्रोग्रामिंग और ऑटोमेशन प्रोजेक्ट्स के ज़रिए लॉजिकल थिंकिंग बनाता है, जिसके साफ और मापने योग्य नतीजे होते हैं। मशीन लर्निंग की बेसिक्स विज़ुअल, इंटरैक्टिव एक्टिविटीज़ से सिखाई जाती हैं जो रियल-वर्ल्ड एप्लीकेशन से जुड़ी होती हैं — हर लेवल पर उम्र के हिसाब से।`
    }
  },
  {
    id: 'ai-trainer',
    keywords: ['ai education', 'ai trainer', 'ai classes', 'ai curriculum', 'ethics'],
    answer: {
      en: `We embed an on-site **AI & robotics trainer** who runs regular classes and labs aligned to your academic calendar. The curriculum covers core AI concepts, ethics, and responsible technology use, woven into existing subjects rather than bolted on separately.`,
      hi: `हम एक ऑन-साइट **AI और रोबोटिक्स ट्रेनर** रखते हैं जो आपके एकेडमिक कैलेंडर के हिसाब से नियमित क्लासेज़ और लैब चलाता है। करिकुलम में AI के कोर कॉन्सेप्ट्स, एथिक्स, और ज़िम्मेदार टेक्नोलॉजी यूज़ शामिल है, जो मौजूदा सब्जेक्ट्स के साथ जुड़ा होता है, अलग से नहीं।`
    }
  },
  {
    id: 'gbp',
    keywords: ['google business', 'gbp', 'map', 'location', 'reviews', 'search ranking', 'seo', 'find us'],
    answer: {
      en: `We fix and optimize your **Google Business Profile** — correcting the map pin so parents reliably find the campus, updating photos/descriptions, and encouraging genuine parent reviews to boost trust, search ranking, and admissions inquiries.`,
      hi: `हम आपकी **Google Business Profile** ठीक और ऑप्टिमाइज़ करते हैं — मैप पिन सही करना ताकि पेरेंट्स कैंपस आसानी से ढूंढ सकें, फोटोज़/डिस्क्रिप्शन अपडेट करना, और जेन्युइन पेरेंट रिव्यूज़ को बढ़ावा देना ताकि ट्रस्ट, सर्च रैंकिंग, और एडमिशन इन्क्वायरीज़ बढ़ें।`
    }
  },
  {
    id: 'digital-transformation',
    keywords: ['digital transformation', 'smart classroom', 'branding', 'brand', 'website', 'content strategy', 'analytics'],
    answer: {
      en: `Digital transformation covers four things:
- A **smart classroom roadmap** for boards, apps, and digital content
- A **content & brand strategy** for your website and social channels
- **Consistent visual branding** across everything the school puts out
- **Analytics** on traffic and inquiries to keep refining the strategy`,
      hi: `डिजिटल ट्रांसफॉर्मेशन में चार चीज़ें शामिल हैं:
- बोर्ड्स, ऐप्स, और डिजिटल कंटेंट के लिए **स्मार्ट क्लासरूम रोडमैप**
- आपकी वेबसाइट और सोशल चैनल्स के लिए **कंटेंट और ब्रांड स्ट्रैटेजी**
- स्कूल जो कुछ भी पब्लिश करे उसमें **कंसिस्टेंट विज़ुअल ब्रांडिंग**
- ट्रैफिक और इन्क्वायरीज़ पर **एनालिटिक्स** ताकि स्ट्रैटेजी लगातार बेहतर हो`
    }
  },
  {
    id: 'age-groups',
    keywords: ['age', 'grade', 'class', 'years old', 'age group', 'students'],
    answer: {
      en: `Our curriculum is age-appropriate across grade levels — modules are adapted so younger students get foundational, hands-on concepts while older students move into more advanced coding, automation, and AI/ML topics.`,
      hi: `हमारा करिकुलम हर ग्रेड लेवल के हिसाब से उम्र-उपयुक्त है — छोटे स्टूडेंट्स के लिए फाउंडेशनल, हैंड्स-ऑन कॉन्सेप्ट्स, और बड़े स्टूडेंट्स के लिए एडवांस्ड कोडिंग, ऑटोमेशन, और AI/ML टॉपिक्स।`
    }
  },
  {
    id: 'board',
    keywords: ['cbse', 'icse', 'ib', 'board', 'syllabus'],
    answer: {
      en: `We align our curriculum with whatever board or framework your school follows — CBSE, ICSE, IB, a state board, or an international curriculum. Let us know your board and we'll map the program to it.`,
      hi: `हम अपना करिकुलम आपके स्कूल के बोर्ड या फ्रेमवर्क के हिसाब से align करते हैं — CBSE, ICSE, IB, स्टेट बोर्ड, या इंटरनेशनल करिकुलम। अपना बोर्ड बताइए, हम प्रोग्राम को उसी हिसाब से मैप कर देंगे।`
    }
  },
  {
    id: 'timeline',
    keywords: ['timeline', 'duration', 'how long', 'year', 'program structure', 'roadmap length'],
    answer: {
      en: `Partnerships are structured as **long-term, year-round engagements** — typically multi-year roadmaps rather than a single term — combining curriculum delivery, brand-building, and tech infrastructure support across the school year.`,
      hi: `पार्टनरशिप **लॉन्ग-टर्म, ईयर-राउंड एंगेजमेंट** के तौर पर स्ट्रक्चर्ड होती है — आमतौर पर एक टर्म की बजाय मल्टी-ईयर रोडमैप, जिसमें करिकुलम डिलीवरी, ब्रांड-बिल्डिंग, और टेक इन्फ्रास्ट्रक्चर सपोर्ट पूरे साल शामिल रहता है।`
    }
  },
  {
    id: 'why',
    keywords: ['why', 'benefit', 'worth it', 'importance', 'need this'],
    answer: {
      en: `Parent expectations for tech-forward education are rising fast, and policy is pushing AI/robotics/STEM as core future-ready skills. Schools with a structured program and a strong digital presence stand out and tend to see stronger admissions conversion.`,
      hi: `टेक-फॉरवर्ड एजुकेशन के लिए पेरेंट्स की उम्मीदें तेज़ी से बढ़ रही हैं, और पॉलिसी भी AI/रोबोटिक्स/STEM को फ्यूचर-रेडी स्किल्स के तौर पर पुश कर रही है। स्ट्रक्चर्ड प्रोग्राम और मज़बूत डिजिटल प्रेज़ेंस वाले स्कूल अलग दिखते हैं और आमतौर पर एडमिशन कन्वर्ज़न में बेहतर करते हैं।`
    }
  },
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'fee', 'quote', 'budget', 'contract', 'how much', 'monthly', 'annual cost'],
    answer: {
      en: `As a reference point, our standard 1-year partnership runs at **₹40,000/month** (**₹4,80,000/year**, all-inclusive), covering dedicated faculty, consulting, and robotics development. That fee funds project materials, AI & robotics kits, structured activity sheets, and technical support. Exact pricing can vary by school size and scope — tap **WhatsApp** for a proposal tailored to you.`,
      hi: `एक रेफरेंस पॉइंट के तौर पर, हमारी स्टैंडर्ड 1-साल की पार्टनरशिप **₹40,000/महीना** (**₹4,80,000/साल**, ऑल-इंक्लूसिव) की होती है, जिसमें डेडिकेटेड फैकल्टी, कंसल्टिंग, और रोबोटिक्स डेवलपमेंट शामिल है। यह फीस प्रोजेक्ट मटेरियल, AI और रोबोटिक्स किट्स, स्ट्रक्चर्ड एक्टिविटी शीट्स, और टेक्निकल सपोर्ट में जाती है। स्कूल के साइज़ और स्कोप के हिसाब से एग्ज़ैक्ट प्राइसिंग अलग हो सकती है — आपके लिए तैयार प्रपोज़ल के लिए **WhatsApp** पर टैप करें।`
    }
  },
  {
    id: 'contract-terms',
    keywords: ['contract length', 'contract term', 'renew', 'renewal', '1 year', 'one year', 'multi-year'],
    answer: {
      en: `Engagements start as a **1-year contract**, renewable into a multi-year partnership as the program matures — giving you measurable student skill advancement and admissions impact to review before committing longer.`,
      hi: `एंगेजमेंट **1-साल के कॉन्ट्रैक्ट** से शुरू होती है, जो प्रोग्राम मैच्योर होने पर मल्टी-ईयर पार्टनरशिप में रिन्यू हो सकती है — इससे आगे कमिट करने से पहले आपको स्टूडेंट स्किल एडवांसमेंट और एडमिशन इम्पैक्ट देखने का मौका मिलता है।`
    }
  },
  {
    id: 'classroom-experience',
    keywords: ['classroom experience', 'lab experience', 'hands-on', 'hands on', 'learn by doing', 'how do classes work', 'what happens in class'],
    answer: {
      en: `Classes are hands-on: students collaborate on **robot builds**, code on laptops, and work through guided group challenges in a dynamic lab setting. It's a learn-by-doing approach with graded project complexity, safety protocols, and personalized guidance — built to grow confidence and problem-solving skills, not just theory.`,
      hi: `क्लासेज़ पूरी तरह हैंड्स-ऑन होती हैं: स्टूडेंट्स **रोबोट बिल्ड्स** पर साथ काम करते हैं, लैपटॉप पर कोड करते हैं, और गाइडेड ग्रुप चैलेंजेज़ में एक डायनामिक लैब सेटिंग में हिस्सा लेते हैं। यह एक लर्न-बाय-डूइंग अप्रोच है जिसमें ग्रेडेड प्रोजेक्ट कॉम्प्लेक्सिटी, सेफ्टी प्रोटोकॉल्स, और पर्सनलाइज़्ड गाइडेंस शामिल है — सिर्फ थ्योरी नहीं, बल्कि कॉन्फिडेंस और प्रॉब्लम-सॉल्विंग स्किल्स बढ़ाने के लिए।`
    }
  },
  {
    id: 'brand-admissions',
    keywords: ['admissions', 'brand', 'reputation', 'parent confidence', 'differentiation', 'competitive', 'stand out'],
    answer: {
      en: `Schools running a structured AI & robotics program typically see higher parent confidence (visible projects and labs), stronger student portfolios and competition exposure, better digital visibility, and a more future-ready, differentiated brand — which tends to translate into stronger admissions.`,
      hi: `स्ट्रक्चर्ड AI और रोबोटिक्स प्रोग्राम चलाने वाले स्कूलों में आमतौर पर पेरेंट कॉन्फिडेंस बढ़ता है (विज़िबल प्रोजेक्ट्स और लैब्स की वजह से), स्टूडेंट पोर्टफोलियो और कॉम्पिटिशन एक्सपोज़र मज़बूत होता है, डिजिटल विज़िबिलिटी बेहतर होती है, और एक ज़्यादा फ्यूचर-रेडी, डिफरेंशिएटेड ब्रांड बनता है — जो अक्सर बेहतर एडमिशन में बदल जाता है।`
    }
  },
  {
    id: 'differentiation',
    keywords: ['different', 'why cerevityai', 'vs traditional', 'compare', 'competitors', 'other vendors', 'workshop'],
    answer: {
      en: `Compared to typical one-off vendors, CerevityAI is built for continuity:
- **Dedicated faculty** who work with students weekly — not occasional workshop trainers
- **Continuous support**: ongoing consultation and troubleshooting after launch, not a one-time setup
- **Real project development**: each cohort builds an actual AI project every year, not theory-only classes`,
      hi: `आम तौर पर मिलने वाले वन-ऑफ वेंडर्स की तुलना में, CerevityAI कंटीन्यूइटी के लिए बनाया गया है:
- **डेडिकेटेड फैकल्टी** जो हफ्ते-दर-हफ्ते स्टूडेंट्स के साथ काम करती है — कभी-कभार आने वाले वर्कशॉप ट्रेनर्स नहीं
- **कंटीन्यूअस सपोर्ट**: लॉन्च के बाद भी ऑन्गोइंग कंसल्टेशन और ट्रबलशूटिंग, एक बार का सेटअप नहीं
- **रियल प्रोजेक्ट डेवलपमेंट**: हर कोहॉर्ट हर साल एक असली AI प्रोजेक्ट बनाता है, सिर्फ थ्योरी क्लासेज़ नहीं`
    }
  },
  {
    id: 'roadmap',
    keywords: ['roadmap', 'rollout', 'implementation', 'how does it start', 'process', 'phases', 'steps'],
    answer: {
      en: `The partnership rolls out in four phases:
- **Plan the implementation** — scope, calendar alignment, curriculum and lab needs, milestone checkpoints
- **Execute the rollout** — trainer deployed, classes launched, website/Google profile improvements begin
- **Summarize and optimize** — monthly review of projects, feedback, and digital metrics
- **Analyze and review** — structured performance reviews that feed the next-phase roadmap`,
      hi: `पार्टनरशिप चार फेज़ में रोलआउट होती है:
- **इम्प्लीमेंटेशन प्लान करना** — स्कोप, कैलेंडर अलाइनमेंट, करिकुलम और लैब ज़रूरतें, माइलस्टोन चेकपॉइंट्स
- **रोलआउट एग्ज़ीक्यूट करना** — ट्रेनर डिप्लॉय, क्लासेज़ लॉन्च, वेबसाइट/Google प्रोफाइल इम्प्रूवमेंट्स शुरू
- **समराइज़ और ऑप्टिमाइज़ करना** — प्रोजेक्ट्स, फीडबैक, और डिजिटल मेट्रिक्स की मंथली रिव्यू
- **एनालाइज़ और रिव्यू करना** — स्ट्रक्चर्ड परफॉरमेंस रिव्यू जो अगले फेज़ के रोडमैप में फीड होती है`
    }
  },
  {
    id: 'automation-benefits',
    keywords: ['automation benefit', 'automation project', 'why automation', 'benefits of automation', 'automate'],
    answer: {
      en: `Automation projects teach students to break real problems into logical steps and build working solutions — not just learn theory. Benefits include:
- Stronger **logical thinking and problem-solving** through guided, hands-on builds
- Real **measurable outcomes** — each project has clear structure and a visible result, not an abstract exercise
- Direct groundwork for **future careers**, since automation and AI/ML skills connect straight to everyday applications
- A growing **project portfolio** for each student, useful for competitions and college applications`,
      hi: `ऑटोमेशन प्रोजेक्ट्स स्टूडेंट्स को असली प्रॉब्लम्स को लॉजिकल स्टेप्स में तोड़ना और वर्किंग सॉल्यूशंस बनाना सिखाते हैं — सिर्फ थ्योरी नहीं। फायदे:
- गाइडेड, हैंड्स-ऑन बिल्ड्स से मज़बूत **लॉजिकल थिंकिंग और प्रॉब्लम-सॉल्विंग**
- रियल **मापने योग्य नतीजे** — हर प्रोजेक्ट का साफ स्ट्रक्चर और विज़िबल रिज़ल्ट होता है
- **फ्यूचर करियर्स** के लिए सीधी नींव, क्योंकि ऑटोमेशन और AI/ML स्किल्स रोज़मर्रा के एप्लीकेशन से जुड़ी हैं
- हर स्टूडेंट के लिए बढ़ता **प्रोजेक्ट पोर्टफोलियो**, कॉम्पिटिशन और कॉलेज एप्लीकेशन के लिए उपयोगी`
    }
  },
  {
    id: 'goal-motive',
    keywords: ['goal', 'motive', 'mission', 'purpose', 'main objective', 'why do you do this', 'what drives'],
    answer: {
      en: `Our core motive is simple: help schools become genuinely **future-ready institutions** — not just add a tech elective, but build lasting AI & robotics capability into how the school teaches, brands itself, and is discovered online. We measure success by real student outcomes, stronger admissions, and a school's standing as a regional leader in AI-driven education — not by how many classes we deliver.`,
      hi: `हमारा मुख्य मकसद सीधा है: स्कूलों को सच में **फ्यूचर-रेडी इंस्टीट्यूशन** बनाने में मदद करना — सिर्फ एक टेक इलेक्टिव जोड़ना नहीं, बल्कि यह देखना कि स्कूल कैसे पढ़ाता है, खुद को कैसे ब्रांड करता है, और ऑनलाइन कैसे डिस्कवर होता है, उसमें लॉन्ग-लास्टिंग AI और रोबोटिक्स कैपेबिलिटी बनाना। हम सफलता को असली स्टूडेंट आउटकम्स, बेहतर एडमिशन, और स्कूल की AI-ड्रिवन एजुकेशन में रीजनल लीडर के तौर पर पहचान से मापते हैं — सिर्फ कितनी क्लासेज़ दीं, उससे नहीं।`
    }
  },
  {
    id: 'vision-long-term',
    keywords: ['vision', 'long term', '3-5 year', 'future plan', 'long-term benefit'],
    answer: {
      en: `Over a 3–5 year horizon, the goal is compounding impact: stronger student outcomes year over year, deeper parent trust, and a school positioned as its region's benchmark for AI-powered, future-ready education — a differentiated brand that keeps paying off in admissions long after the first year.`,
      hi: `3-5 साल के नज़रिए से, गोल है कंपाउंडिंग इम्पैक्ट: हर साल बेहतर स्टूडेंट आउटकम्स, गहरा पेरेंट ट्रस्ट, और एक स्कूल जो अपने रीजन में AI-पावर्ड, फ्यूचर-रेडी एजुकेशन का बेंचमार्क बन जाए — एक डिफरेंशिएटेड ब्रांड जो पहले साल के बाद भी एडमिशन में फायदा देता रहे।`
    }
  },
  {
    id: 'scalability',
    keywords: ['scale', 'expand', 'other schools', 'multiple campuses', 'grow the program', 'more grades'],
    answer: {
      en: `The model is built to scale: a school typically starts with a focused pilot, then expands across more grades, campuses, or subject integrations as outcomes prove out. The same faculty, curriculum, and rollout structure extend cleanly — it's not a one-off setup that needs rebuilding each time you grow.`,
      hi: `मॉडल स्केल करने के लिए बना है: एक स्कूल आमतौर पर एक फोकस्ड पायलट से शुरू करता है, फिर नतीजे साबित होने पर ज़्यादा ग्रेड्स, कैम्पसेज़, या सब्जेक्ट इंटीग्रेशंस में एक्सपैंड करता है। वही फैकल्टी, करिकुलम, और रोलआउट स्ट्रक्चर आसानी से एक्सटेंड होता है — हर बार ग्रो करने पर नए सिरे से बनाने की ज़रूरत नहीं।`
    }
  },
  {
    id: 'pilot',
    keywords: ['pilot', 'trial', 'test it first', 'start small', 'try before'],
    answer: {
      en: `Yes — we typically recommend starting with a structured pilot for one academic year. That validates real impact on academics, co-curriculars, and operations using measurable indicators before committing to a longer-term partnership.`,
      hi: `जी हां — हम आमतौर पर एक एकेडमिक ईयर के लिए एक स्ट्रक्चर्ड पायलट से शुरू करने की सलाह देते हैं। इससे लॉन्ग-टर्म पार्टनरशिप कमिट करने से पहले, मापने योग्य इंडिकेटर्स के ज़रिए एकेडमिक्स, को-करिकुलर्स, और ऑपरेशंस पर असली इम्पैक्ट वैलिडेट हो जाता है।`
    }
  },
  {
    id: 'governance',
    keywords: ['governance', 'planning workshop', 'roles and responsibilities', 'review checkpoints', 'milestones'],
    answer: {
      en: `Once you're ready to move forward, next steps are: confirm the partnership, schedule a detailed planning workshop, agree on governance structure and roles, and finalize an implementation calendar with clear milestones and review checkpoints.`,
      hi: `जब आप आगे बढ़ने के लिए तैयार हों, अगले स्टेप्स हैं: पार्टनरशिप कन्फर्म करना, एक डीटेल्ड प्लानिंग वर्कशॉप शेड्यूल करना, गवर्नेंस स्ट्रक्चर और रोल्स पर सहमति बनाना, और साफ माइलस्टोन्स व रिव्यू चेकपॉइंट्स के साथ एक इम्प्लीमेंटेशन कैलेंडर फाइनल करना।`
    }
  },
  {
    id: 'contact',
    keywords: ['contact', 'talk to someone', 'human', 'call', 'reach you', 'get in touch', 'demo', 'meeting'],
    answer: {
      en: `Easiest way is the **WhatsApp icon** in the header above — that goes straight to our team and you can set up a call or demo from there.`,
      hi: `सबसे आसान तरीका है ऊपर हेडर में मौजूद **WhatsApp आइकॉन** — यह सीधे हमारी टीम तक जाता है और आप वहीं से कॉल या डेमो सेट कर सकते हैं।`
    }
  },
  {
    id: 'location',
    keywords: ['patna', 'location', 'where are you', 'which schools', 'which city', 'region', 'area you serve', 'cities'],
    answer: {
      en: `We partner with CBSE-affiliated schools across **Patna and the wider Bihar region**. For the current list of partner schools near you, or to discuss a specific school in Patna, our team can share up-to-date details — tap the **WhatsApp icon** above and we'll be happy to help.`,
      hi: `हम **पटना और पूरे बिहार क्षेत्र** के CBSE-एफिलिएटेड स्कूलों के साथ पार्टनर करते हैं। अपने पास मौजूद पार्टनर स्कूलों की मौजूदा लिस्ट के लिए, या पटना के किसी खास स्कूल पर बात करने के लिए, हमारी टीम आपको अप-टू-डेट डिटेल्स दे सकती है — ऊपर **WhatsApp आइकॉन** पर टैप करें, हमें मदद करके खुशी होगी।`
    }
  }
];

const FALLBACK_ANSWERS = {
  en: [
    "I'm sorry, I don't have specifics on that just yet. For a complete answer, please tap the **WhatsApp icon** above — our team will be glad to help.",
    "That's a great question, but it's outside what I can answer here. Our team can walk you through it directly — please tap the **WhatsApp icon** above.",
    "I don't have that particular detail on hand, but I don't want to guess. For an accurate answer, please tap the **WhatsApp icon** above and our team will assist you."
  ],
  hi: [
    "माफ़ कीजिए, इसकी जानकारी अभी मेरे पास नहीं है। पूरा जवाब पाने के लिए कृपया ऊपर **WhatsApp आइकॉन** पर टैप करें — हमारी टीम खुशी से मदद करेगी।",
    "यह बहुत अच्छा सवाल है, लेकिन यह मेरी जानकारी से बाहर है। हमारी टीम आपको सीधे बता सकती है — कृपया ऊपर **WhatsApp आइकॉन** पर टैप करें।",
    "यह खास जानकारी अभी मेरे पास नहीं है, और मैं अंदाज़ा नहीं लगाना चाहता। सही जवाब के लिए कृपया ऊपर **WhatsApp आइकॉन** पर टैप करें, हमारी टीम आपकी मदद करेगी।"
  ]
};
let fallbackIndex = 0;
function nextFallback(){
  const list = FALLBACK_ANSWERS[currentLang];
  const answer = list[fallbackIndex % list.length];
  fallbackIndex += 1;
  return answer;
}

const GREETING = {
  en: "**Welcome to CerevityAI.** I'm here to answer questions about our school partnership program — AI & robotics education, digital transformation, and online presence support. What would you like to know?",
  hi: "**CerevityAI में आपका स्वागत है।** मैं यहां हमारे स्कूल पार्टनरशिप प्रोग्राम के बारे में सवालों के जवाब देने के लिए हूं — AI और रोबोटिक्स एजुकेशन, डिजिटल ट्रांसफॉर्मेशन, और ऑनलाइन प्रेज़ेंस सपोर्ट। आप क्या जानना चाहेंगे?"
};

const STARTER_CHIPS = {
  en: [
    "What does the partnership include?",
    "How much does it cost?",
    "How is CerevityAI different?",
    "Tell me about the robotics lab"
  ],
  hi: [
    "पार्टनरशिप में क्या शामिल है?",
    "इसकी कीमत कितनी है?",
    "CerevityAI अलग कैसे है?",
    "रोबोटिक्स लैब के बारे में बताएं"
  ]
};

const UI_TEXT = {
  headSub: {
    en: "Partnership Assistant · usually replies instantly",
    hi: "पार्टनरशिप असिस्टेंट · आमतौर पर तुरंत जवाब देता है"
  },
  trustLine: {
    en: "Partnering with CBSE-affiliated schools on AI &amp; robotics education",
    hi: "CBSE-एफिलिएटेड स्कूलों के साथ AI और रोबोटिक्स एजुकेशन पर पार्टनरशिप"
  },
  placeholder: {
    en: "Ask about pricing, robotics labs, timelines…",
    hi: "प्राइसिंग, रोबोटिक्स लैब, टाइमलाइन के बारे में पूछें…"
  },
  footNote: {
    en: 'Automated answers based on common questions — tap the WhatsApp icon above for anything specific.<br>© 2026 CerevityAI. All rights reserved. · <a href="privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>',
    hi: 'आम सवालों पर आधारित ऑटोमेटेड जवाब — खास जानकारी के लिए ऊपर WhatsApp आइकॉन पर टैप करें।<br>© 2026 CerevityAI. सर्वाधिकार सुरक्षित। · <a href="privacy.html" target="_blank" rel="noopener noreferrer">प्राइवेसी पॉलिसी</a>'
  },
  splashText: {
    en: 'Welcome to <strong>CerevityAI</strong>',
    hi: '<strong>CerevityAI</strong> में आपका स्वागत है'
  },
  langToggleLabel: { en: 'हिं', hi: 'EN' }, // shows the language you'd SWITCH TO
  langToggleTitle: { en: 'हिंदी में देखें', hi: 'View in English' }
};

let currentLang = localStorage.getItem('cerevity-lang') === 'hi' ? 'hi' : 'en';

const stream = document.getElementById('stream');
const chipsEl = document.getElementById('chips');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');
const speakToggle = document.getElementById('speakToggle');
const langToggle = document.getElementById('langToggle');
const headSubEl = document.getElementById('headSub');
const trustLineEl = document.getElementById('trustLine');
const footNoteEl = document.getElementById('footNote');
const splashTextEl = document.getElementById('splashText');

function applyStaticLanguageText(){
  if(headSubEl) headSubEl.textContent = UI_TEXT.headSub[currentLang];
  if(trustLineEl) trustLineEl.innerHTML = UI_TEXT.trustLine[currentLang];
  if(input) input.placeholder = UI_TEXT.placeholder[currentLang];
  if(footNoteEl) footNoteEl.innerHTML = UI_TEXT.footNote[currentLang];
  if(splashTextEl) splashTextEl.innerHTML = UI_TEXT.splashText[currentLang];
  if(langToggle){
    langToggle.textContent = UI_TEXT.langToggleLabel[currentLang];
    langToggle.title = UI_TEXT.langToggleTitle[currentLang];
    langToggle.setAttribute('aria-label', UI_TEXT.langToggleTitle[currentLang]);
  }
  document.documentElement.lang = currentLang === 'hi' ? 'hi' : 'en';
}

function resetConversationForLanguage(){
  stream.innerHTML = '';
  lead.active = false;
  lead.step = null;
  lead.name = '';
  lead.school = '';
  addMessage('bot', mdToHtml(GREETING[currentLang]));
  renderChips(STARTER_CHIPS[currentLang]);
}

if(langToggle){
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('cerevity-lang', currentLang);
    applyStaticLanguageText();
    resetConversationForLanguage();
  });
}

/* ============================================================
   Voice replies — Web Speech API (SpeechSynthesis).
   Built-in to every modern browser, no library or API key needed.
   Toggled on/off with the speaker button in the header; state is
   remembered across visits via localStorage.
   ============================================================ */
const SPEECH_SUPPORTED = 'speechSynthesis' in window;
let voiceEnabled = SPEECH_SUPPORTED && localStorage.getItem('cerevity-voice') === 'on';

function updateSpeakToggleUI(){
  const onIcon = speakToggle.querySelector('.icon-sound-on');
  const offIcon = speakToggle.querySelector('.icon-sound-off');
  speakToggle.setAttribute('aria-pressed', String(voiceEnabled));
  speakToggle.setAttribute('aria-label', voiceEnabled ? 'Turn voice replies off' : 'Turn voice replies on');
  speakToggle.title = voiceEnabled ? 'Voice replies: on' : 'Voice replies: off';
  onIcon.style.display = voiceEnabled ? 'block' : 'none';
  offIcon.style.display = voiceEnabled ? 'none' : 'block';
}

function stripForSpeech(rawText){
  // Remove markdown bullets/bold markers and collapse whitespace so the
  // voice doesn't read out "asterisk asterisk" or dash characters.
  return rawText
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/^[-•]\s+/gm, '')
    .replace(/\n+/g, '. ')
    .trim();
}

function speak(rawText){
  if(!SPEECH_SUPPORTED || !voiceEnabled) return;
  window.speechSynthesis.cancel(); // don't overlap with a previous reply
  const utterance = new SpeechSynthesisUtterance(stripForSpeech(rawText));
  utterance.lang = currentLang === 'hi' ? 'hi-IN' : 'en-IN';
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

if(speakToggle){
  if(!SPEECH_SUPPORTED){
    speakToggle.disabled = true;
    speakToggle.title = 'Voice replies not supported in this browser';
  } else {
    updateSpeakToggleUI();
    speakToggle.addEventListener('click', () => {
      voiceEnabled = !voiceEnabled;
      localStorage.setItem('cerevity-voice', voiceEnabled ? 'on' : 'off');
      updateSpeakToggleUI();
      if(!voiceEnabled) window.speechSynthesis.cancel();
    });
  }
}

function scrollDown(){
  stream.scrollTop = stream.scrollHeight;
}

function escapeHtml(str){
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function formatTime(date){
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

function addMessage(role, html){
  const row = document.createElement('div');
  row.className = 'row ' + (role === 'user' ? 'user' : 'bot');

  const avatar = document.createElement('div');
  avatar.className = 'avatar ' + (role === 'user' ? 'usr' : 'bot');
  avatar.innerHTML = role === 'user'
    ? '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" stroke-width="1.6"/><path d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5" stroke-width="1.6" stroke-linecap="round"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="white"/></svg>';

  const col = document.createElement('div');
  col.className = 'msg-col';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = html;

  const time = document.createElement('div');
  time.className = 'msg-time';
  time.textContent = formatTime(new Date());

  col.appendChild(bubble);
  col.appendChild(time);
  row.appendChild(avatar);
  row.appendChild(col);
  stream.appendChild(row);
  scrollDown();
  return bubble;
}

function addTyping(){
  const row = document.createElement('div');
  row.className = 'row bot';
  row.id = 'typingRow';
  row.innerHTML = `<div class="avatar bot"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="white"/></svg></div>
  <div class="bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
  stream.appendChild(row);
  scrollDown();
}
function removeTyping(){
  const t = document.getElementById('typingRow');
  if(t) t.remove();
}

function mdToHtml(text){
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  const lines = escaped.split('\n');
  let html = '';
  let inList = false;
  for(const line of lines){
    const trimmed = line.trim();
    if(/^[-•]\s+/.test(trimmed)){
      if(!inList){ html += '<ul>'; inList = true; }
      html += '<li>' + trimmed.replace(/^[-•]\s+/, '') + '</li>';
    } else {
      if(inList){ html += '</ul>'; inList = false; }
      if(trimmed.length){ html += '<p>' + trimmed + '</p>'; }
    }
  }
  if(inList) html += '</ul>';
  return html || '<p></p>';
}

function renderChips(list){
  chipsEl.innerHTML = '';
  list.forEach(text => {
    const c = document.createElement('div');
    c.className = 'chip';
    c.textContent = text;
    c.onclick = () => { if(!sendBtn.disabled){ input.value = text; sendMessage(); } };
    chipsEl.appendChild(c);
  });
}

// --- greeting detection -----------------------------------------------
// Matched separately, and only when the message is short and has no other
// keyword hits — so "hi, what does the robotics lab include" still answers
// the real question instead of just saying hello back.
const GREETING_WORDS = ['hi', 'hii', 'hiii', 'hello', 'hey', 'heya', 'yo', 'good morning', 'good afternoon', 'good evening', 'namaste', 'namaskar'];
const GREETING_REPLIES = {
  en: [
    "Welcome to **CerevityAI**. Ask me anything about our school partnership program, or tap a suggestion below.",
    "Hello — happy to help. Ask about robotics, coding & STEM, pricing, or anything else about the partnership."
  ],
  hi: [
    "**CerevityAI** में आपका स्वागत है। हमारे स्कूल पार्टनरशिप प्रोग्राम के बारे में कुछ भी पूछें, या नीचे दिए सुझाव पर टैप करें।",
    "नमस्ते — मदद करके खुशी होगी। रोबोटिक्स, कोडिंग व STEM, प्राइसिंग, या पार्टनरशिप के बारे में कुछ भी पूछें।"
  ]
};

function isGreeting(text){
  const q = text.toLowerCase().trim().replace(/[!.?]/g, '');
  if (q.split(/\s+/).length > 4) return false; // longer messages likely have a real question
  return GREETING_WORDS.some(w => q === w || q.startsWith(w + ' ') || q === w + ' there');
}

/* ============================================================
   Lead capture — a short conversational form inside the chat.
   No backend: once collected, the details are handed to the
   visitor as a pre-filled WhatsApp message they send to you, so
   the lead actually reaches you without needing a server.
   Triggers once per browser tab (sessionStorage), either after
   a couple of real questions or immediately on a buying-intent
   question (pricing / contact / demo).
   ============================================================ */
const WHATSAPP_NUMBER = '917301671108'; // keep in sync with the button in index.html

const lead = {
  active: false,       // currently mid-flow (name/school/email)
  step: null,           // 'name' | 'school' | 'email'
  name: '',
  school: '',
  askedThisSession: sessionStorage.getItem('cerevity-lead-asked') === 'true',
  realQuestionCount: 0
};

const LEAD_TRIGGER_TOPICS = ['pricing', 'contract-terms', 'contact']; // buying-intent topics that trigger the ask immediately

function isSkip(text){
  const q = text.toLowerCase().trim();
  return ['skip', 'no', 'no thanks', 'not now', 'later', 'nahi', 'rehne do', 'chodo'].includes(q);
}

function looksLikeEmail(text){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim());
}

function buildWhatsAppLink(name, school){
  const msg = `Hello, I'm ${name} from ${school}. I'd like to discuss the CerevityAI partnership proposal.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const LEAD_TEXT = {
  askName: {
    en: "Before you go — can I grab your **name** so our team can follow up properly? (or type \"skip\")",
    hi: "जाने से पहले — क्या मैं आपका **नाम** जान सकता हूं ताकि हमारी टीम सही से फॉलो-अप कर सके? (या \"skip\" टाइप करें)"
  },
  privacyNote: {
    en: "We'll only use this to follow up about your inquiry — never shared or used for anything else.",
    hi: "हम इसका इस्तेमाल सिर्फ आपकी पूछताछ पर फॉलो-अप के लिए करेंगे — कभी शेयर नहीं करेंगे या किसी और काम में इस्तेमाल नहीं करेंगे।"
  },
  skipped: {
    en: "No problem — ask me anything else about the partnership.",
    hi: "कोई बात नहीं — पार्टनरशिप के बारे में कुछ भी और पूछें।"
  },
  askSchool: {
    en: (name) => `Nice to meet you, **${name}**! What's your school called?`,
    hi: (name) => `आपसे मिलकर अच्छा लगा, **${name}**! आपके स्कूल का नाम क्या है?`
  },
  askEmail: {
    en: "Got it. What's the best **email** to reach you on? (or type \"skip\")",
    hi: "ठीक है। आपसे संपर्क करने के लिए सबसे अच्छा **ईमेल** क्या है? (या \"skip\" टाइप करें)"
  },
  badEmail: {
    en: "That doesn't look quite like an email — mind double-checking it? (or type \"skip\")",
    hi: "यह ईमेल जैसा नहीं लग रहा — कृपया दोबारा चेक करें? (या \"skip\")"
  },
  thanks: {
    en: (name) => `Thanks, ${name}! One tap sends your details straight to our team:`,
    hi: (name) => `धन्यवाद, ${name}! एक टैप में आपकी डिटेल्स सीधे हमारी टीम तक पहुंच जाएंगी:`
  },
  waButton: {
    en: "Send my details on WhatsApp",
    hi: "WhatsApp पर अपनी डिटेल्स भेजें"
  }
};

function startLeadCapture(){
  lead.active = true;
  lead.step = 'name';
  sessionStorage.setItem('cerevity-lead-asked', 'true');
  addMessage('bot',
    mdToHtml(LEAD_TEXT.askName[currentLang]) +
    `<div class="privacy-note">${LEAD_TEXT.privacyNote[currentLang]}</div>`
  );
}

// Returns true if this message was consumed by the lead flow (so the
// normal FAQ matcher should NOT also run on it).
function handleLeadFlow(text){
  if(!lead.active) return false;

  if(isSkip(text)){
    lead.active = false;
    lead.step = null;
    addMessage('bot', mdToHtml(LEAD_TEXT.skipped[currentLang]));
    return true;
  }

  if(lead.step === 'name'){
    lead.name = text.trim();
    lead.step = 'school';
    addMessage('bot', mdToHtml(LEAD_TEXT.askSchool[currentLang](escapeHtml(lead.name))));
    return true;
  }

  if(lead.step === 'school'){
    lead.school = text.trim();
    lead.step = 'email';
    addMessage('bot', mdToHtml(LEAD_TEXT.askEmail[currentLang]));
    return true;
  }

  if(lead.step === 'email'){
    if(!isSkip(text) && !looksLikeEmail(text)){
      addMessage('bot', mdToHtml(LEAD_TEXT.badEmail[currentLang]));
      return true;
    }
    lead.active = false;
    lead.step = null;
    const waLink = buildWhatsAppLink(lead.name, lead.school);
    // Built directly (not via mdToHtml) so the button renders as a real
    // link instead of being HTML-escaped into visible text.
    const safeName = escapeHtml(lead.name);
    addMessage('bot',
      `<p>${LEAD_TEXT.thanks[currentLang](safeName)}</p>` +
      `<a href="${waLink}" target="_blank" rel="noopener noreferrer" class="lead-wa-btn">${LEAD_TEXT.waButton[currentLang]}</a>`
    );
    return true;
  }

  return false;
}

function maybeTriggerLeadCapture(matchedEntryId){
  if(lead.active || lead.askedThisSession) return;

  if(LEAD_TRIGGER_TOPICS.includes(matchedEntryId)){
    lead.askedThisSession = true;
    setTimeout(startLeadCapture, 700);
    return;
  }

  lead.realQuestionCount += 1;
  if(lead.realQuestionCount >= 3){
    lead.askedThisSession = true;
    setTimeout(startLeadCapture, 700);
  }
}
// ---------------------------------------------------------------------------

// --- local matching logic -------------------------------------------------
function findBestAnswer(userText){
  const q = userText.toLowerCase();

  if (isGreeting(userText)) {
    const replies = GREETING_REPLIES[currentLang];
    return { text: replies[Math.floor(Math.random() * replies.length)], id: 'greeting' };
  }

  let best = null;
  let bestScore = 0;

  for(const entry of KNOWLEDGE_BASE){
    let score = 0;
    for(const kw of entry.keywords){
      if(q.includes(kw.toLowerCase())) score += kw.split(' ').length; // multi-word keywords score higher
    }
    if(score > bestScore){
      bestScore = score;
      best = entry;
    }
  }

  return best ? { text: best.answer[currentLang], id: best.id } : { text: nextFallback(), id: 'fallback' };
}
// ---------------------------------------------------------------------------

function sendMessage(){
  const text = input.value.trim();
  if(!text || sendBtn.disabled) return;

  addMessage('user', '<p>' + escapeHtml(text) + '</p>');
  input.value = '';
  input.style.height = 'auto';
  chipsEl.innerHTML = '';
  sendBtn.disabled = true;
  addTyping();

  // Small delay so the typing indicator reads naturally — everything here
  // runs locally in the browser, no network request involved.
  setTimeout(() => {
    removeTyping();

    if(handleLeadFlow(text)){
      sendBtn.disabled = false;
      input.focus();
      return;
    }

    const { text: reply, id } = findBestAnswer(text);
    addMessage('bot', mdToHtml(reply));
    speak(reply);
    maybeTriggerLeadCapture(id);
    sendBtn.disabled = false;
    input.focus();
  }, 500 + Math.random() * 400);
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    sendMessage();
  }
});
input.addEventListener('input', () => {
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 90) + 'px';
});

// init
applyStaticLanguageText();
addMessage('bot', mdToHtml(GREETING[currentLang]));
speak(GREETING[currentLang]);
renderChips(STARTER_CHIPS[currentLang]);

/* ============================================================
   Splash screen — hides itself after a short delay, and speaks
   a one-time "Welcome to CerevityAI" greeting.
   Browsers block autoplaying speech until the visitor interacts
   with the page at least once, so the voice greeting is queued
   and fires on the visitor's first tap/click/keypress instead of
   trying (and failing) to speak immediately on load.
   ============================================================ */
const splash = document.getElementById('splash');
if(splash){
  setTimeout(() => splash.classList.add('hide'), 2200);
}

if(SPEECH_SUPPORTED){
  let welcomeSpoken = false;
  const speakWelcomeOnce = () => {
    if(welcomeSpoken) return;
    welcomeSpoken = true;
    window.speechSynthesis.cancel();
    const text = currentLang === 'hi' ? 'CerevityAI में आपका स्वागत है' : 'Welcome to CerevityAI';
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = currentLang === 'hi' ? 'hi-IN' : 'en-IN';
    window.speechSynthesis.speak(utt);
    document.removeEventListener('click', speakWelcomeOnce);
    document.removeEventListener('touchstart', speakWelcomeOnce);
    document.removeEventListener('keydown', speakWelcomeOnce);
  };
  document.addEventListener('click', speakWelcomeOnce, { once: true });
  document.addEventListener('touchstart', speakWelcomeOnce, { once: true });
  document.addEventListener('keydown', speakWelcomeOnce, { once: true });
}
