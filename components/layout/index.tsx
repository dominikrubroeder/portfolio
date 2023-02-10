import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  showHeader?: boolean;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  showHeader = false
}) => {
  return (
    <>
      <Head>
        <title>
          {pageTitle
            ? `${pageTitle} | Dominik Rubröder | Team frontend development and
          interface design`
            : `Dominik Rubröder | Team frontend development and
          interface design`}
        </title>
        <meta
          name="description"
          content="Dominik Rubröder | Team frontend development and interface design | Love for animations and transitions"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      {showHeader && <Header />}

      <div className="grid min-h-screen grid-rows-[1fr_auto]">
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
          className=""
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
