export const randomNumberGenerator = () => Math.floor(Math.random() * 100);

export const handleWhatsApp = (phoneNumber) => {
   //removing the + and - from the phoneNumber
  const whatsAppMessage = `https://wa.me/${phoneNumber}/?text=Hello Warsha Amarnani ,%0a%0aThis is Roshani here from Balance Nutrition Client Service Team.%0a%0aYour welcome call with your Mentor Jyoti is pending to do so you will have to login into the app and book your call.%0a%0aPlease do not miss booking this as it is an important one where your Mentor Jyoti will orient you about your program.%0a%0aP.S. Please feel free to contact me if you’re facing any issues in booking the call.`;
  window.location.href = whatsAppMessage;
};
