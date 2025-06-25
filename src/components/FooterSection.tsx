
import { Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-400" />
                <span>contato@samaraduarte.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400" />
                <span>WhatsApp: (11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
          <p className="mb-4">
            © 2024 Samara Duarte - Curso de Automaquiagem. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Política de Reembolso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
