import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import whatsappIcon from '../assets/Icons/whatsapp.webp';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (!formspreeId) {
      setSubmitError('Configura VITE_FORMSPREE_FORM_ID para activar el formulario.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: si un bot rellena el campo oculto, fingimos éxito y no enviamos.
    const honeypot = String(formData.get('_gotcha') ?? '').trim();
    if (honeypot) {
      setSubmitted(true);
      form.reset();
      setSelectedService('');
      return;
    }

    formData.delete('_gotcha');
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        console.error('Formspree respondió con un error:', response.status, errorBody);
        setSubmitError('No se pudo enviar la solicitud. Inténtalo de nuevo.');
        return;
      }

      await response.json().catch(() => null);

      setSubmitError('');
      setSubmitted(true);

      try {
        form.reset();
        setSelectedService('');
      } catch (resetErr) {
        console.error('Error al limpiar el formulario tras un envío exitoso:', resetErr);
      }
    } catch (err) {
      console.error('Error de red al enviar el formulario a Formspree:', err);
      setSubmitError('No se pudo enviar la solicitud. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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

            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/573208033546"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl border border-neon-primary/20 bg-neon-primary/5 hover:bg-neon-primary/10 hover:border-neon-primary/40 transition-all group"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-5 h-5 flex-shrink-0 object-contain"
                />
                <div>
                  <span className="block text-sm font-medium text-white">Hablar por WhatsApp</span>
                  <span className="block font-mono text-[10px] text-gray-text/75">320 8033546</span>
                </div>
                <ArrowRight className="w-4 h-4 text-neon-primary ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex w-fit max-w-full items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="w-2 h-2 flex-shrink-0 rounded-full bg-neon-primary/50" />
                <span className="min-w-0 break-all font-mono text-xs text-gray-text/75">contacto.alsoft@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="min-w-0 max-w-full"
          >
            <form onSubmit={handleSubmit} className="relative box-border w-full min-w-0 max-w-full rounded-2xl glass-card p-6 sm:p-8 space-y-5">
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

              {submitError && (
                <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm leading-relaxed text-red-200">
                  {submitError}
                </p>
              )}

              {/* Honeypot anti-spam: oculto para humanos, visible para bots */}
              <div
                className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
                aria-hidden="true"
              >
                <label htmlFor="gotcha">No rellenar</label>
                <input
                  id="gotcha"
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Nombre" name="name" placeholder="Tu nombre" required />
                <FormField label="Empresa" name="company" placeholder="Nombre de la empresa" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Teléfono / WhatsApp" name="phone" placeholder="320 8033546" />
                <FormField label="Correo" name="email" type="email" placeholder="contacto.alsoft@gmail.com" required />
              </div>

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

              <div>
                <label className="block text-xs font-mono text-gray-text tracking-wider mb-2">
                  MENSAJE
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Cuéntanos más sobre tu necesidad..."
                  className="w-full px-4 py-3 rounded-xl bg-black-primary/60 border border-white/8 text-sm text-white placeholder:text-gray-text/65 focus:border-neon-primary/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              <input type="hidden" name="service" value={selectedService} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-black-primary bg-neon-primary rounded-xl hover:bg-neon-light disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-200 hover:shadow-[0_0_24px_rgba(55,190,118,0.3)]"
              >
                {isSubmitting ? 'Enviando solicitud...' : 'Solicitar diagnóstico'}
                {!isSubmitting && <Send className="w-4 h-4" />}
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
        className="w-full px-4 py-3 rounded-xl bg-black-primary/60 border border-white/8 text-sm text-white placeholder:text-gray-text/65 focus:border-neon-primary/40 focus:outline-none transition-colors"
      />
    </div>
  );
}
