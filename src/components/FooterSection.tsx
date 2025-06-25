
const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Samara Duarte
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Especialista em automaquiagem com mais de 8 anos de experiência 
              transformando a vida de mulheres em todo o Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre o Curso</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Garantia</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 contato@samaraduarte.com.br</p>
              <p>📱 WhatsApp: (11) 99999-9999</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-2xl hover:text-pink-400 transition-colors">📘</a>
                <a href="#" className="text-2xl hover:text-pink-400 transition-colors">📷</a>
                <a href="#" className="text-2xl hover:text-pink-400 transition-colors">🎵</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-4">
            © 2024 Samara Duarte - Curso de Automaquiagem. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-pink-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Política de Reembolso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
