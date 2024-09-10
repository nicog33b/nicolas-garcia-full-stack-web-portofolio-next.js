import dynamic from 'next/dynamic';

const ContactWithAnimationNoSsr = dynamic(() => import('./contactWithAnimation'), {
  ssr: false,
});

export default ContactWithAnimationNoSsr;