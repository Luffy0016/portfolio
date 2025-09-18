import emailjs from '@emailjs/browser';

const serviceID = 'service_7n0xxxx';           // replace with your service ID
const templateID = 'template_abc123';          // replace with your main template ID
const publicKey = 'public_7n0xxxx';            // replace with your public key

const templateParams = {
  from_name: 'Test User',
  from_email: 'test@example.com',
  subject: 'Test Email',
  message: 'Hello, this is a test message from EmailJS.',
  to_email: 'mahadevr385@gmail.com',           // your email
  reply_to: 'test@example.com',                // auto-reply email
  to_name: 'Test User',
};

emailjs.send(serviceID, templateID, templateParams, publicKey)
  .then(() => console.log('✅ Test email sent!'))
  .catch(err => console.error('❌ EmailJS error:', err));
