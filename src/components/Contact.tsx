import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Ciberseguridad',
  'Servidores',
  'Redes',
  'Cámaras',
  'Desarrollo de software',
  'Soporte TI',
  'Consultoría',
  'Otro',
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Contacto</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              ¿Tienes un <br />
              <span className="text-neon-primary">problema tecnológico?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-text leading-relaxed max-w-md">
              Cuéntanos qué necesita tu empresa y te ayudamos a encontrar una solución.
            </p>

            {/* Direct contact */}
            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/[WHATSAPP_PLACEHOLDER]"
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl border border-neon-primary/20 bg-neon-primary/5 hover:bg-neon-primary/10 hover:border-neon-primary/40 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-neon-primary" />
                <div>
                  <span className="block text-sm font-medium text-white">Hablar por WhatsApp</span>
                  <span className="block font-mono text-[10px] text-gray-text/50">[Número por configurar]</span>
                </div>
                <ArrowRight className="w-4 h-4 text-neon-primary ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-neon-primary/50" />
                <span className="font-mono text-xs text-gray-text/50">[Correo por configurar]</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl glass-card p-6 sm:p-8 space-y-5">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neon-primary/10 border border-neon-primary/30 mb-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-neon-primary flex-shrink-0" />
                  <span className="text-sm text-neon-light">Solicitud enviada. Te contactaremos pronto.</span>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Nombre" name="name" placeholder="Tu nombre" required />
                <FormField label="Empresa" name="company" placeholder="Nombre de la empresa" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Teléfono / WhatsApp" name="phone" placeholder="Tu teléfono" />
                <FormField label="Correo" name="email" type="email" placeholder="tu@correo.com" required />
              </div>

              {/* Service selector */}
              <div>
                <label className="block text-xs font-mono text-gray-text tracking-wider mb-3">
                  ¿QUÉ NECESITAS?
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedService(option)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                        selectedService === option
                          ? 'bg-neon-primary text-black-primary'
                          : 'border border-white/10 text-gray-text hover:border-neon-primary/30 hover:text-neon-light'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-gray-text tracking-wider mb-2">
                  MENSAJE
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Cuéntanos más sobre tu necesidad..."
                  className="w-full px-4 py-3 rounded-xl bg-black-primary/60 border border-white/8 text-sm text-white placeholder:text-gray-text/40 focus:border-neon-primary/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-black-primary bg-neon-primary rounded-xl hover:bg-neon-light transition-all duration-200 hover:shadow-[0_0_24px_rgba(25,229,107,0.3)]"
              >
                Solicitar diagnóstico
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono text-gray-text tracking-wider mb-2">
        {label.toUpperCase()}{required && <span className="text-neon-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-black-primary/60 border border-white/8 text-sm text-white placeholder:text-gray-text/40 focus:border-neon-primary/40 focus:outline-none transition-colors"
      />
    </div>
  );
}
