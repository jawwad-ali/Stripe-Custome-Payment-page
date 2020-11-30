// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const stripe = require('stripe')('sk_test_51HjkirGewr3KO7wwdu3vKidYiZBX7qf6IigJjhKcXUc7fN43pYb7kgs8edULGk5aiRnqPPuxdA3Lx7iR9dO0djh200MRDyaxvo');

exports.handler = async event => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1200,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment' },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  }
  catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
