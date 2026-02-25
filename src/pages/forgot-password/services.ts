import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_2nyr8vc";
const TEMPLATE_ID = "template_jdvj5ju";
const PUBLIC_KEY = "p8a_ajFhpgER-OkBg";

function generateResetToken(email: string) {
  const timestamp = Date.now();
  return btoa(`${email}:${timestamp}`);
}

export async function sendForgotPasswordEmail(email: string) {
  const token = generateResetToken(email);
  
  const resetLink = `${window.location.origin}/reset-password/${token}`;

  const templateParams = {
    to_email: email,
    subject: "Redefinição de senha",
    message: `Clique no link abaixo para redefinir sua senha:\n\n${resetLink}\n\nO link é válido por 30 minutos.`,
  };

  return await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}

export function validateResetToken(token: string) {
  try {
        const decoded = atob(token);
        const [email, timestampStr] = decoded.split(":");
        const timestamp = parseInt(timestampStr, 10);
        const now = Date.now();

        if (now - timestamp > 30 * 60 * 1000) {
        return null;
        }

        return email;
    } 
    catch {
        return null;
  }
}