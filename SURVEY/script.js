function sendToWhatsApp(formId) {
    const form = document.getElementById(formId);
    let formData = new FormData(form);
    let message = '';

    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    const whatsappUrl = `https://wa.me/254757611486?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
