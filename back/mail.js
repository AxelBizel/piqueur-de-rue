//---------------------------------------------------------------------------------
//partie concernant Sengrid = gérer l'envoi du mail
//---------------------------------------------------------------------------------
const SENDGRID_API_KEY = require('./sengrid_api_key_env');
const sgMail = require('@sendgrid/mail')

const sendMail = async (customer) => {
  try {
    const msg = {
      to: 'chadieleman@gmail.com',
      from: 'fredCarillo@piqueurderuetest.com',
      subject: 'Votre contact :',
      html: `${customer.firstname} ${customer.lastname} (${customer.age} ans) vous a envoyé son projet.
      emplacement souhaité du tatouage : ${customer.tattoolocation},
      dimensions : ${customer.hauteur} x ${customer.largeur} cm,
      budget : ${customer.budget} Euros,
      infos supplémentaires : ${customer.story},
      Vous pouvez contacter cette personne au ${customer.phone} ou par mail : ${customer.email},
      Bonne journée !`, 
    }
    sgMail.setApiKey(SENDGRID_API_KEY)
    return sgMail.send(msg)
  } catch (error) {
    console.log("gg",error)
    throw new Error(error.message)
  }
}

module.exports = sendMail