(() => {
  'use strict';

  // Edit these values to change the assistant without changing the UI logic.
  const ASSISTANT_CONFIG = {
    brand: 'THE FASHION HUB',
    officeHours: 'Mon - Sat / 09:00 - 17:00',
    contactEmail: 'ethantawana26@gmail.com',
    contactPhone: '0780043130',
    collectionUrl: 'collections.html',
    consultationUrl: 'about.html#contact',
    storageKey: 'the-fashion-hub-assistant-messages',
    welcomeMessage: 'Welcome to THE FASHION HUB. I am here 24/7 while the office is closed. How can I help?',
    quickReplies: [
      { label: 'Check Store Hours', action: 'hours' },
      { label: 'Browse Collections', action: 'collections' },
      { label: 'Order Status', action: 'order' },
      { label: 'Leave a Message for Staff', action: 'message' },
      { label: 'Book Appointment', action: 'appointment' }
    ],
    responses: {
      hours: 'Our office is currently closed, but I am here to help. Office hours are Mon - Sat / 09:00 - 17:00. You can leave a message anytime and our team will follow up during office hours.',
      collections: 'You can explore the latest edit in Collections or browse the complete Fashion Library. I can also help you choose by category, occasion, or personal style.',
      order: 'Order-status lookup is ready for a future store connection. Please leave your order number and contact details for our team, and we will check it when the office reopens.',
      appointment: 'I can help you request a consultation. Please share your preferred day, your name, email, and phone number, and our stylist will confirm availability.',
      message: 'Please leave your name, email, phone number, and message. I will log it locally for our team and confirm it below.'
    },
    dialogueScenarios: [
      { id: 'weeknight-hours', keywords: ['weeknight', 'weekday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'], reply: 'Weeknight and weekday office support is available from 09:00 to 17:00. The office is closed right now, but I can log a request for the team.' },
      { id: 'weekend-hours', keywords: ['weekend', 'saturday', 'sunday'], reply: 'Saturday support is available from 09:00 to 17:00. Sunday is reserved for our team to reset, so messages are answered on the next office day.' },
      { id: 'holiday-hours', keywords: ['holiday', 'public holiday', 'christmas', 'new year', 'easter'], reply: 'Holiday hours can change seasonally. Please leave your preferred contact details and our team will confirm the next available office day.' },
      { id: 'store-location', keywords: ['location', 'address', 'where are you', 'store near', 'physical store'], reply: 'THE FASHION HUB currently handles enquiries through our online studio. Please contact the team for the latest fitting or collection location.' },
      { id: 'new-arrivals', keywords: ['new arrival', 'new arrivals', 'latest', 'new season'], reply: 'Our New Arrivals edit features fresh tailoring, expressive essentials, and elevated layers. <a href="collections.html">Explore New Arrivals</a>.', html: true },
      { id: 'womenswear', keywords: ['womenswear', "women's", 'women', 'ladies'], reply: 'For womenswear, start with the fluid dresses, sculpted sets, and soft structured layers in our <a href="images.html">Fashion Library</a>.', html: true },
      { id: 'menswear', keywords: ['menswear', "men's", 'men', 'gentlemen'], reply: 'Our menswear edit focuses on relaxed tailoring, studio shirts, and strong everyday layers. <a href="images.html">Browse the library</a>.', html: true },
      { id: 'footwear', keywords: ['footwear', 'shoes', 'heels', 'sneakers', 'trainers'], reply: 'The footwear edit includes sculptural heels and polished everyday runners. Use the Shoes filter in the <a href="images.html">Fashion Library</a>.', html: true },
      { id: 'accessories', keywords: ['accessories', 'bag', 'tote', 'sunglasses', 'eyewear', 'jewellery'], reply: 'Complete a look with our totes, frames, and statement finishing pieces. <a href="images.html">Explore Accessories</a>.', html: true },
      { id: 'luxury-collection', keywords: ['luxury collection', 'luxury edit', 'premium', 'exclusive'], reply: 'Our luxury direction pairs rich texture with sharp, intentional silhouettes. Tell me the occasion and I can suggest a starting point.' },
      { id: 'occasion-dressing', keywords: ['occasion', 'event', 'party', 'wedding', 'gala'], reply: 'For occasion dressing, tell me the event, preferred colour, fit, and whether you want a statement or understated look.' },
      { id: 'size-guide', keywords: ['size guide', 'sizing', 'size chart', 'fit'], reply: 'For the best fit, share your usual size, height, and preferred fit. Our team can confirm garment measurements during office hours.' },
      { id: 'colour-advice', keywords: ['colour', 'color', 'black', 'gold', 'neutral'], reply: 'Our dark luxury palette works beautifully with black, cream, gold, and deep tonal layers. Tell me what you already own and I can suggest a pairing.' },
      { id: 'order-status', keywords: ['order status', 'track order', 'where is my order', 'tracking'], reply: 'To check an order, please send your order number and the email used at checkout. I will log it for our team to verify.' },
      { id: 'tracking-number', keywords: ['tracking number', 'tracking code', 'courier'], reply: 'Tracking details are normally shared once an order has been dispatched. Leave your order number and contact email if you need the team to retrieve it.' },
      { id: 'shipping-times', keywords: ['shipping time', 'delivery time', 'deliver', 'dispatch'], reply: 'Estimated delivery times depend on destination and availability. Our team can confirm the current estimate when the office reopens.' },
      { id: 'returns', keywords: ['return', 'refund', 'exchange', 'send back'], reply: 'Return and exchange eligibility depends on the item condition and purchase details. Leave your order number and request for a staff review.' },
      { id: 'payment-methods', keywords: ['payment', 'pay', 'card', 'cash', 'visa', 'mastercard'], reply: 'Payment options can vary by order channel. Our team will confirm the accepted method for your order before finalising it.' },
      { id: 'promo-code', keywords: ['promo code', 'promotion', 'discount', 'voucher', 'coupon'], reply: 'If you have a promotion code, include it with your enquiry so the team can confirm its terms and expiry.' },
      { id: 'gift-card', keywords: ['gift card', 'gift voucher', 'present'], reply: 'Gift-card availability is handled by the team. Leave your preferred amount and contact details for a callback.' },
      { id: 'appointment-date', keywords: ['appointment date', 'available date', 'date for fitting'], reply: 'Private fittings are arranged by date and availability. Please share your preferred date first, then I will collect a time, name, and email.' },
      { id: 'appointment-time', keywords: ['appointment time', 'available time', 'time for fitting'], reply: 'Please share your preferred date and time for a private fitting or styling session, and I will log the request for confirmation.' },
      { id: 'private-fitting', keywords: ['private fitting', 'fitting', 'try on', 'try-on'], reply: 'I can log a private fitting request. Please include your preferred date, time, name, email, and what you would like to try.' },
      { id: 'styling-consultation', keywords: ['styling consultation', 'stylist', 'style consultation', 'wardrobe consultation'], reply: 'A styling consultation can cover wardrobe direction, event dressing, or seasonal edits. <a href="about.html#contact">Request a consultation</a> or leave your details here.', html: true },
      { id: 'callback', keywords: ['call back', 'callback', 'phone call', 'call me'], reply: 'I can log a callback request for the next office day. Please share your name, email, phone number, and the best time to reach you.' },
      { id: 'human-agent', keywords: ['human', 'agent', 'speak to someone', 'representative'], reply: 'A team member can follow up during office hours. Please leave your name, email, phone number, and message so nothing is missed.' },
      { id: 'contact-email', keywords: ['email address', 'email you', 'contact email'], reply: 'You can email the team directly at ethantawana26@gmail.com, or leave a message here for local logging.' },
      { id: 'contact-phone', keywords: ['phone number', 'telephone', 'whatsapp', 'call the office'], reply: 'The office line is 0780043130. When the office is closed, leave a callback request here and the team will respond during office hours.' },
      { id: 'recommendation', keywords: ['recommend', 'recommendation', 'what should i wear', 'suggest'], reply: 'I would love to help. Tell me the occasion, your preferred silhouette, colour direction, and whether you are shopping womenswear, menswear, shoes, or accessories.' },
      { id: 'streetwear', keywords: ['streetwear', 'casual', 'urban', 'relaxed'], reply: 'For streetwear, look for relaxed layers, raw denim, and bold finishing pieces in the <a href="images.html">Fashion Library</a>.', html: true },
      { id: 'jackets', keywords: ['jacket', 'outerwear', 'coat', 'layer'], reply: 'Jackets add instant structure. Browse the Jackets filter in the <a href="images.html">Fashion Library</a> or tell me your preferred fit.', html: true },
      { id: 'about-brand', keywords: ['about the brand', 'who are you', 'cedella', 'founder'], reply: 'THE FASHION HUB was created by Cedella Whata for people who use clothing as a language: thoughtful, expressive, and confident.' },
      { id: 'thanks', keywords: ['thanks', 'thank you', 'appreciate'], reply: 'You are welcome. I am here whenever you need a little wardrobe direction.' },
      { id: 'goodbye', keywords: ['bye', 'goodbye', 'see you'], reply: 'Take care. Your message can stay with me until the team is back online.' }
    ],
    voiceGreeting: 'You are connected to the THE FASHION HUB after-hours assistant. The office is currently closed. I can help with hours, collections, orders, or a consultation request.',
    voicePrompts: [
      'Say collections to browse our fashion edit.',
      'Say appointment to request a styling consultation.',
      'Say message to leave a note for the team.'
    ]
  };

  const ICONS = {
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2 1.2-3.6A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" stroke-linecap="round"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" stroke-linecap="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M7.2 4.2 9.4 3l2 4.6-1.8 1.4a14 14 0 0 0 5.4 5.4l1.4-1.8 4.6 2-1.2 2.2a2.5 2.5 0 0 1-2.8 1.3A16.5 16.5 0 0 1 5.9 7a2.5 2.5 0 0 1 1.3-2.8Z"/></svg>'
  };

  const mount = document.getElementById('fashionAssistantMount');
  if (!mount) {
    return;
  }

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[character]));

  mount.innerHTML = `
    <aside class="fashion-assistant" aria-label="24/7 after-hours assistant">
      <div class="assistant-window" id="assistantWindow" aria-hidden="true">
        <div class="assistant-header">
          <div>
            <span class="assistant-kicker">${escapeHtml(ASSISTANT_CONFIG.brand)}</span>
            <h2 class="assistant-title">After-hours assistant</h2>
            <span class="assistant-status"><span class="assistant-status-dot">●</span> 24/7 After-Hours Assistant Online</span>
          </div>
          <div class="assistant-header-actions">
            <button class="assistant-voice-toggle" id="assistantVoiceToggle" type="button" aria-pressed="false" aria-label="Turn voice responses on or off">Voice mode</button>
            <button class="assistant-close" id="assistantClose" type="button" aria-label="Close assistant">×</button>
          </div>
        </div>

        <div class="assistant-tabs" role="tablist" aria-label="Assistant modes">
          <button class="assistant-tab is-active" type="button" role="tab" aria-selected="true" data-assistant-tab="chat">Send Message / Live Chat</button>
          <button class="assistant-tab" type="button" role="tab" aria-selected="false" data-assistant-tab="voice">Request / Start AI Voice Call</button>
        </div>

        <section class="assistant-panel is-active" data-assistant-panel="chat" role="tabpanel">
          <div class="assistant-messages" id="assistantMessages" aria-live="polite"></div>
          <div class="assistant-quick-replies" id="assistantQuickReplies"></div>
          <form class="assistant-composer" id="assistantForm">
            <label class="assistant-sr-only" for="assistantInput">Message the after-hours assistant</label>
            <input class="assistant-input" id="assistantInput" type="text" autocomplete="off" placeholder="Ask about the brand, collections, or an order..." />
            <button class="assistant-mic-button" id="assistantMicButton" type="button" aria-label="Speak a message">${ICONS.mic}</button>
            <button class="assistant-send" type="submit" aria-label="Send message">↑</button>
          </form>
        </section>

        <section class="assistant-panel assistant-voice" data-assistant-panel="voice" role="tabpanel" aria-hidden="true">
          <div class="assistant-voice-icon" id="assistantVoiceIcon">${ICONS.mic}</div>
          <h3 id="assistantVoiceTitle">AI voice assistant</h3>
          <p id="assistantVoiceStatus">Start a simulated voice session for after-hours help. Your browser may ask for microphone permission.</p>
          <div class="assistant-equalizer" id="assistantEqualizer" aria-label="Audio speaking indicator"><i></i><i></i><i></i><i></i><i></i></div>
          <button class="assistant-call-button" id="assistantCallButton" type="button">${ICONS.phone}<span>Start voice call</span></button>
          <div class="assistant-transcript" id="assistantTranscript" aria-live="polite">
            <p><strong>IVR:</strong> Your office line is currently offline. This assistant can still guide you 24/7.</p>
          </div>
        </section>
      </div>
      <button class="assistant-launcher" id="assistantLauncher" type="button" aria-expanded="false" aria-controls="assistantWindow" aria-label="Open 24/7 after-hours assistant">${ICONS.chat}</button>
    </aside>
  `;

  const windowNode = document.getElementById('assistantWindow');
  const launcher = document.getElementById('assistantLauncher');
  const closeButton = document.getElementById('assistantClose');
  const messagesNode = document.getElementById('assistantMessages');
  const quickRepliesNode = document.getElementById('assistantQuickReplies');
  const form = document.getElementById('assistantForm');
  const input = document.getElementById('assistantInput');
  const tabButtons = mount.querySelectorAll('[data-assistant-tab]');
  const panels = mount.querySelectorAll('[data-assistant-panel]');
  const voiceIcon = document.getElementById('assistantVoiceIcon');
  const voiceTitle = document.getElementById('assistantVoiceTitle');
  const voiceStatus = document.getElementById('assistantVoiceStatus');
  const callButton = document.getElementById('assistantCallButton');
  const transcript = document.getElementById('assistantTranscript');
  const voiceToggle = document.getElementById('assistantVoiceToggle');
  const micButton = document.getElementById('assistantMicButton');
  const equalizer = document.getElementById('assistantEqualizer');

  let voiceActive = false;
  let voiceModeEnabled = false;
  let recognition = null;
  let voiceTimer = null;
  let captureState = null;

  const readLeads = () => {
    try {
      const stored = localStorage.getItem(ASSISTANT_CONFIG.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return [];
    }
  };

  const saveLead = (lead) => {
    try {
      const leads = readLeads();
      leads.push({ ...lead, createdAt: new Date().toISOString() });
      localStorage.setItem(ASSISTANT_CONFIG.storageKey, JSON.stringify(leads));
      return true;
    } catch (error) {
      console.info('Assistant lead captured:', lead);
      return false;
    }
  };

  const addMessage = (text, type = 'bot', allowHtml = false) => {
    const message = document.createElement('div');
    message.className = `assistant-message${type === 'user' ? ' is-user' : ''}`;
    message.innerHTML = allowHtml ? text : escapeHtml(text);
    messagesNode.appendChild(message);
    messagesNode.scrollTop = messagesNode.scrollHeight;
  };

  const addBotMessage = (text, allowHtml = false) => {
    addMessage(text, 'bot', allowHtml);
    if (voiceModeEnabled) {
      speak(text.replace(/<[^>]*>/g, ''));
    }
  };

  const renderQuickReplies = () => {
    quickRepliesNode.innerHTML = ASSISTANT_CONFIG.quickReplies.map((reply) => `<button class="assistant-chip" type="button" data-assistant-action="${escapeHtml(reply.action)}">${escapeHtml(reply.label)}</button>`).join('');
    quickRepliesNode.querySelectorAll('[data-assistant-action]').forEach((button) => {
      button.addEventListener('click', () => handleAction(button.dataset.assistantAction));
    });
  };

  const showLeadForm = (kind = 'message') => {
    const flows = {
      appointment: {
        fields: ['date', 'time', 'name', 'email'],
        prompts: {
          date: 'What date would you prefer for your private fitting or styling session?',
          time: 'What time would suit you best?',
          name: 'What name should I put on the appointment request?',
          email: 'What email should our stylist use to confirm availability?'
        }
      },
      order: {
        fields: ['orderNumber', 'email'],
        prompts: {
          orderNumber: 'What is your order number?',
          email: 'What email was used for the order?'
        }
      },
      callback: {
        fields: ['name', 'email', 'phone', 'bestTime'],
        prompts: {
          name: 'What is your name?',
          email: 'What email should we use?',
          phone: 'What phone number should the team call?',
          bestTime: 'What is the best time or message for the callback?'
        }
      },
      message: {
        fields: ['name', 'email', 'phone', 'message'],
        prompts: {
          name: 'What is your name?',
          email: 'What email should the team use?',
          phone: 'What phone number can the team reach?',
          message: 'What would you like the team to know?'
        }
      }
    };
    const flow = flows[kind] || flows.message;
    captureState = { type: kind, fields: flow.fields, prompts: flow.prompts, step: 0, data: {} };
    addBotMessage(flow.prompts[flow.fields[0]]);
    input.placeholder = `Enter ${flow.fields[0]}`;
    input.dataset.capture = kind;
    input.focus();
  };

  const findDialogueScenario = (query) => ASSISTANT_CONFIG.dialogueScenarios
    .slice()
    .sort((first, second) => Math.max(...second.keywords.map((word) => word.length)) - Math.max(...first.keywords.map((word) => word.length)))
    .find((scenario) => scenario.keywords.some((keyword) => query.includes(keyword)));

  const handleAction = (action) => {
    if (action === 'collections') {
      addMessage('Browse Collections', 'user');
      addBotMessage(`${ASSISTANT_CONFIG.responses.collections} <a href="${ASSISTANT_CONFIG.collectionUrl}">Open Collections</a> or <a href="images.html">Open the Fashion Library</a>.`, true);
      return;
    }

    if (action === 'hours' || action === 'order') {
      addMessage(action === 'hours' ? 'Check Store Hours' : 'Order Status', 'user');
      addBotMessage(ASSISTANT_CONFIG.responses[action]);
      if (action === 'order') {
        showLeadForm('order');
      }
      return;
    }

    if (action === 'appointment' || action === 'message') {
      addMessage(action === 'appointment' ? 'Book Appointment' : 'Leave a Message for Staff', 'user');
      showLeadForm(action);
    }
  };

  const handleText = (rawText) => {
    const text = rawText.trim();
    if (!text) {
      return;
    }

    addMessage(text, 'user');
    if (captureState) {
      const field = captureState.fields[captureState.step];
      captureState.data[field] = text;
      captureState.step += 1;
      if (captureState.step < captureState.fields.length) {
        const nextField = captureState.fields[captureState.step];
        input.placeholder = `Enter ${nextField}`;
        addBotMessage(captureState.prompts[nextField]);
        return;
      }

      const saved = saveLead({ type: captureState.type, details: captureState.data, page: window.location.href });
      captureState = null;
      delete input.dataset.capture;
      input.placeholder = 'Ask about the brand, collections, or an order...';
      addBotMessage(saved ? 'Your message has been logged for our team. We will follow up during office hours.' : 'Your message has been received for our team. Please also email us at ' + ASSISTANT_CONFIG.contactEmail + '.');
      return;
    }

    const query = text.toLowerCase();
    const scenario = findDialogueScenario(query);
    if (scenario) {
      addBotMessage(scenario.reply, Boolean(scenario.html));
      if (['callback', 'human-agent'].includes(scenario.id)) {
        showLeadForm(scenario.id === 'callback' ? 'callback' : 'message');
      } else if (['order-status', 'tracking-number', 'shipping-times', 'returns'].includes(scenario.id)) {
        showLeadForm('order');
      } else if (['appointment-date', 'appointment-time', 'private-fitting', 'styling-consultation'].includes(scenario.id)) {
        showLeadForm('appointment');
      }
      return;
    }

    if (/hour|open|close|office|availability/.test(query)) {
      addBotMessage(ASSISTANT_CONFIG.responses.hours);
    } else if (/collection|clothes|dress|wear|style|fashion|browse/.test(query)) {
      addBotMessage(`${ASSISTANT_CONFIG.responses.collections} <a href="${ASSISTANT_CONFIG.collectionUrl}">Browse Collections</a>.`, true);
    } else if (/order|track|status|delivery|shipping/.test(query)) {
      addBotMessage(ASSISTANT_CONFIG.responses.order);
      showLeadForm('order');
    } else if (/book|appointment|consult|stylist/.test(query)) {
      showLeadForm('appointment');
    } else if (/message|human|staff|team|help/.test(query)) {
      showLeadForm('message');
    } else {
      addBotMessage('I can help with office hours, collections, recommendations, order-status requests, or consultation bookings. Choose an option below or leave your details for the team.');
    }
  };

  const appendTranscript = (speaker, text) => {
    const line = document.createElement('p');
    line.innerHTML = `<strong>${escapeHtml(speaker)}:</strong> ${escapeHtml(text)}`;
    transcript.appendChild(line);
    transcript.scrollTop = transcript.scrollHeight;
  };

  const startRecognition = (mode = 'voice') => {
    if (recognition) {
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      const fallback = 'Speech recognition is not supported in this browser. You can type your message instead.';
      if (mode === 'chat') {
        addBotMessage(fallback);
        micButton.classList.remove('is-listening');
      } else {
        voiceStatus.textContent = fallback;
      }
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      if (mode === 'chat') {
        micButton.classList.remove('is-listening');
        micButton.setAttribute('aria-pressed', 'false');
        handleText(spokenText);
      } else {
        appendTranscript('You', spokenText);
        respondToVoice(spokenText);
      }
    };
    recognition.onerror = (event) => {
      const denied = event.error === 'not-allowed' || event.error === 'service-not-allowed';
      const message = denied ? 'Microphone permission was denied. You can type in the chat or allow microphone access in your browser settings.' : 'Microphone input was unavailable. You can type your message instead.';
      if (mode === 'chat') {
        micButton.classList.remove('is-listening');
        micButton.setAttribute('aria-pressed', 'false');
        addBotMessage(message);
      } else {
        voiceStatus.textContent = message;
      }
    };
    recognition.onend = () => {
      recognition = null;
      if (mode === 'chat') {
        micButton.classList.remove('is-listening');
        micButton.setAttribute('aria-pressed', 'false');
      }
    };
    try {
      recognition.start();
      if (mode === 'chat') {
        micButton.classList.add('is-listening');
        micButton.setAttribute('aria-pressed', 'true');
      } else {
        voiceStatus.textContent = 'Listening... ask about hours, collections, orders, or appointments.';
      }
    } catch (error) {
      recognition = null;
      if (mode === 'chat') {
        micButton.classList.remove('is-listening');
        addBotMessage('Voice input could not start. Please type your message instead.');
      } else {
        voiceStatus.textContent = 'Voice input could not start. The IVR simulation is still active.';
      }
    }
  };

  const speak = (text) => {
    if (!('speechSynthesis' in window) || typeof window.SpeechSynthesisUtterance !== 'function') {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => equalizer.classList.add('is-speaking');
    utterance.onend = () => equalizer.classList.remove('is-speaking');
    utterance.onerror = () => equalizer.classList.remove('is-speaking');
    window.speechSynthesis.speak(utterance);
  };

  const respondToVoice = (text) => {
    const query = text.toLowerCase();
    const scenario = findDialogueScenario(query);
    const response = scenario ? scenario.reply.replace(/<[^>]*>/g, '') : ASSISTANT_CONFIG.voicePrompts[0];
    appendTranscript('Assistant', response);
    speak(response);
  };

  const stopVoice = () => {
    voiceActive = false;
    voiceIcon.classList.remove('is-listening');
    equalizer.classList.remove('is-speaking');
    callButton.classList.remove('is-active');
    callButton.innerHTML = `${ICONS.phone}<span>Start voice call</span>`;
    voiceTitle.textContent = 'AI voice assistant';
    voiceStatus.textContent = 'Start a simulated voice session for after-hours help. Your browser may ask for microphone permission.';
    if (recognition) {
      recognition.abort();
      recognition = null;
    }
    if (voiceTimer) {
      window.clearInterval(voiceTimer);
      voiceTimer = null;
    }
  };

  const startVoice = () => {
    voiceActive = true;
    voiceModeEnabled = true;
    voiceToggle.classList.add('is-enabled');
    voiceToggle.setAttribute('aria-pressed', 'true');
    voiceIcon.classList.add('is-listening');
    callButton.classList.add('is-active');
    callButton.innerHTML = `${ICONS.phone}<span>End voice call</span>`;
    voiceTitle.textContent = 'Listening for you';
    voiceStatus.textContent = 'Connecting to the after-hours IVR simulation...';
    appendTranscript('Assistant', ASSISTANT_CONFIG.voiceGreeting);
    speak(ASSISTANT_CONFIG.voiceGreeting);
    window.setTimeout(() => {
      if (voiceActive) {
        startRecognition();
      }
    }, 900);
    voiceTimer = window.setInterval(() => {
      if (voiceActive && !recognition) {
        startRecognition();
      }
    }, 7000);
  };

  const toggleVoiceMode = () => {
    voiceModeEnabled = !voiceModeEnabled;
    voiceToggle.classList.toggle('is-enabled', voiceModeEnabled);
    voiceToggle.setAttribute('aria-pressed', String(voiceModeEnabled));
    voiceToggle.textContent = voiceModeEnabled ? 'Voice on' : 'Voice mode';
    if (voiceModeEnabled) {
      addBotMessage('Voice responses are on. I will read new assistant messages aloud.');
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      equalizer.classList.remove('is-speaking');
    }
  };

  const setOpen = (isOpen) => {
    windowNode.classList.toggle('is-open', isOpen);
    windowNode.setAttribute('aria-hidden', String(!isOpen));
    launcher.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      input.focus();
    } else {
      stopVoice();
    }
  };

  launcher.addEventListener('click', () => setOpen(!windowNode.classList.contains('is-open')));
  closeButton.addEventListener('click', () => setOpen(false));
  voiceToggle.addEventListener('click', toggleVoiceMode);
  micButton.addEventListener('click', () => {
    if (recognition) {
      recognition.abort();
      return;
    }
    startRecognition('chat');
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleText(input.value);
    input.value = '';
  });
  callButton.addEventListener('click', () => (voiceActive ? stopVoice() : startVoice()));

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.assistantTab;
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      tabButtons.forEach((tab) => {
        const active = tab === button;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        const active = panel.dataset.assistantPanel === selected;
        panel.classList.toggle('is-active', active);
        panel.setAttribute('aria-hidden', String(!active));
      });
    });
  });

  addMessage(ASSISTANT_CONFIG.welcomeMessage);
  renderQuickReplies();
})();
