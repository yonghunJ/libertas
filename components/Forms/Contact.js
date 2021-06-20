import dynamic from 'next/dynamic';

const Contact = dynamic(import('./ContactNext'), { ssr: false });


const FooComponent = () => <Contact />;

export default Contact;
