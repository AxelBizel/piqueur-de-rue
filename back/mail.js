//---------------------------------------------------------------------------------
//partie concernant Sengrid = gérer l'envoi du mail client
//---------------------------------------------------------------------------------
const SENDGRID_API_KEY = require('./sengrid_api_key_env');
const sgMail = require('@sendgrid/mail')

const sendMail = async (customer) => {
  try {
    const msg1 = {
      to: 'timmycarillo@mac.com',
      from: 'timmycarillo@mac.com',
      subject: 'Votre contact Client :',
      html: `${customer.firstname} ${customer.lastname} (${customer.age} ans) vous a envoyé son projet.
      emplacement souhaité du tatouage : ${customer.tattoolocation},
      dimensions : ${customer.hauteur} x ${customer.largeur} cm,
      budget : ${customer.budget} Euros,
      infos supplémentaires : ${customer.story},
      Vous pouvez contacter cette personne au ${customer.phone} ou par mail : ${customer.email},
      Bonne journée !`, 
    }
    sgMail.setApiKey(SENDGRID_API_KEY)
    return sgMail.send(msg1)
  } catch (error) {
    throw new Error(error.message)
  }
}

//---------------------------------------------------------------------------------
//partie concernant Sengrid = gérer l'envoi du mail guest
//---------------------------------------------------------------------------------

const sendMailGuest = async (guest) => {
  try {
    const msg2 = {
      to: 'timmycarillo@mac.com',
      from: 'fredCarillo@piqueurderuetest.com',
      subject: 'Votre contact Guest :',
      html: ` ${guest.firstnameG} ${guest.lastnameG} vous a envoyé un mail.
              Son pseudo est ${guest.pseudoG} (son compte Insta ou autre = ${guest.compteG}).
              Son message : ${guest.storyG}.
              Vous pouvez le joindre au ${guest.phoneG} ou par mail ${guest.emailG}.
              Bonne journée !`, 
    }
    sgMail.setApiKey(SENDGRID_API_KEY)
    return sgMail.send(msg2)
  } catch (error) {
    throw new Error(error.message)
  }
} 

module.exports.sendMail = sendMail;
module.exports.sendMailGuest = sendMailGuest;