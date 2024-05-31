import { PRIVATE_MAILGUN_API_KEY } from "$env/static/private";
import { PRIVATE_MAILGUN_DOMAIN } from "$env/static/private";


export async function sendEmail(email:string) {
    try {
        const response = await fetch(`https://api.mailgun.net/v3/${PRIVATE_MAILGUN_DOMAIN}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${btoa(`api:${PRIVATE_MAILGUN_API_KEY}`)}`
            },
            body: new URLSearchParams({
                from: "postmaster@sandboxb57eba449bd243d48b7e2b04560fa343.mailgun.org",
                to: "aljaljic@gmail.com",
                subject: email + " is interested in your app",
                text: "got subscriber"
            })
        });
        console.log("response",response)
        return response.ok;
    } catch (error) {
        console.log("mailgun error",error)
        return error;
    }
}