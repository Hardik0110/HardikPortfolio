
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Email", href: "mailto:contact@example.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Hardik Kubavat</h3>
            <p className="text-gray-400">Web Designer & Developer</p>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Hardik Kubavat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
