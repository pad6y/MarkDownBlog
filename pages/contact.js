// @ts-nocheck
import ContactForm from '../components/contact-form/ContactForm';
import Head from 'next/head';

function ContactPage() {
  return (
    <>
      <Head>
        <meta name="description" content="contact page" />
      </Head>
      <ContactForm />;
    </>
  );
}
export default ContactPage;
