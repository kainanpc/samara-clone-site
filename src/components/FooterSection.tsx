
const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
          <p className="mb-4">
            © 2024 Samara Duarte - Curso de Automaquiagem. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-rose-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Política de Reembolso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
