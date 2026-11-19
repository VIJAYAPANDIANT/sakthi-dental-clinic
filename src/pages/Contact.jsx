import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CalendarCheck, CheckCircle2, MapPin, ShieldPlus } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialIntent =
    searchParams.get('intent') === 'emergency' ? 'emergency' : 'appointment';

  const [requestType, setRequestType] = useState(initialIntent);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    patientGroup: 'Adult / Women Care',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const intent = searchParams.get('intent');
    if (intent === 'emergency' || intent === 'appointment') {
      setRequestType(intent);
      setSubmitted(false);
    }
  }, [searchParams]);

  const handleSwitchType = (nextType) => {
    setRequestType(nextType);
    setSubmitted(false);
    setSearchParams({ intent: nextType });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter the patient or guardian name.';
    }
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    if (!cleanPhone || !/^\+?\d{10,13}$/.test(cleanPhone)) {
      nextErrors.phone = 'Please enter a valid 10-digit contact number.';
    }
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const isEmergency = requestType === 'emergency';

  return (
    <section className="clinic-section bg-gradient-to-b from-[#F8F5FD] to-white">
      <div className="clinic-container">
        <div className="max-w-3xl">
          <p className="text-[13px] font-medium text-[#664999]">
            <span>Sakthi Dental Clinic</span>
            <span aria-hidden="true" className="mx-2 text-[#B6A1D8]">
              ·
            </span>
            <span className="text-[#434C66]">Hosur, Tamil Nadu</span>
          </p>
          <h1
            className="mt-3 font-semibold tracking-[-0.025em] leading-[1.14] text-[#141D38]"
            style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}
          >
            {isEmergency
              ? 'Emergency Dental Support'
              : 'Fix an Appointment'}
          </h1>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#434C66] max-w-[58ch]">
            {isEmergency
              ? 'You are always in safe hands. Share your urgent dental concern below so our care team can prioritize your visit.'
              : 'Request a consultation tailored for women, children, and families in a calm and welcoming setting.'}
          </p>
        </div>

        {/* Interactive Request Mode Switcher */}
        <div
          role="tablist"
          aria-label="Request Type"
          className="mt-8 inline-flex items-center gap-1 p-1.5 rounded-xl bg-[#F1EBF9] border border-[#E3D7F4]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isEmergency}
            onClick={() => handleSwitchType('appointment')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
              !isEmergency
                ? 'bg-white text-[#141D38] shadow-xs'
                : 'text-[#434C66] hover:text-[#141D38]'
            }`}
          >
            <CalendarCheck className="w-4 h-4 text-[#664999]" aria-hidden="true" />
            <span>Fix an Appointment</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={isEmergency}
            onClick={() => handleSwitchType('emergency')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer ${
              isEmergency
                ? 'bg-white text-[#8E3556] shadow-xs'
                : 'text-[#434C66] hover:text-[#141D38]'
            }`}
          >
            <ShieldPlus className="w-4 h-4 text-[#A94B6E]" aria-hidden="true" />
            <span>Emergency Support</span>
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Request Form */}
          <div className="lg:col-span-7 clinic-card p-6 sm:p-8">
            {submitted ? (
              <div className="py-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F1EBF9] flex items-center justify-center mb-4">
                  <CheckCircle2
                    className="w-6 h-6 text-[#664999]"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-[#141D38]">
                  {isEmergency
                    ? 'Urgent Support Request Received'
                    : 'Appointment Request Received'}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#434C66]">
                  Thank you, <span className="font-semibold text-[#141D38]">{formData.fullName}</span>.
                  Your request for{' '}
                  <span className="font-medium text-[#141D38]">
                    {isEmergency ? 'Emergency Dental Support' : formData.patientGroup}
                  </span>{' '}
                  has been recorded. You are always in safe hands, and we are
                  ready to help you at Sakthi Dental Clinic, Hosur.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        patientGroup: 'Adult / Women Care',
                        message: '',
                      });
                    }}
                  >
                    Submit Another Request
                  </Button>
                  <Button to="/" variant="outline" size="md">
                    Return to Home
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-[#141D38] mb-1.5"
                    >
                      Patient or Guardian Name <span className="text-[#A94B6E]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      aria-invalid={Boolean(errors.fullName)}
                      className="w-full rounded-xl border border-[#D8C9EE] bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] focus:border-[#664999] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs font-medium text-[#A94B6E]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#141D38] mb-1.5"
                    >
                      Phone Number <span className="text-[#A94B6E]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full rounded-xl border border-[#D8C9EE] bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] focus:border-[#664999] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-[#A94B6E]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#141D38] mb-1.5"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full rounded-xl border border-[#D8C9EE] bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] focus:border-[#664999] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-[#A94B6E]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="patientGroup"
                      className="block text-sm font-medium text-[#141D38] mb-1.5"
                    >
                      Care Category
                    </label>
                    <select
                      id="patientGroup"
                      name="patientGroup"
                      value={formData.patientGroup}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#D8C9EE] bg-white px-4 py-3 text-[15px] text-[#141D38] focus:border-[#664999] focus:outline-none"
                    >
                      <option value="Adult / Women Care">Women&apos;s Dental Care</option>
                      <option value="Children & Pediatric Care">Children&apos;s Dental Care</option>
                      <option value="Family Consultation">Family Consultation</option>
                      <option value="Urgent Dental Relief">Urgent Dental Relief</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#141D38] mb-1.5"
                  >
                    {isEmergency
                      ? 'Describe the urgent concern'
                      : 'How can we help you?'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      isEmergency
                        ? 'Briefly describe tooth pain, swelling, or injury so we can prepare.'
                        : 'Share any symptoms, questions, or preferred visit timing.'
                    }
                    className="w-full rounded-xl border border-[#D8C9EE] bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] focus:border-[#664999] focus:outline-none resize-y"
                  />
                </div>

                <div className="pt-1">
                  <Button
                    type="submit"
                    variant={isEmergency ? 'secondary' : 'primary'}
                    size="lg"
                  >
                    {isEmergency
                      ? 'Request Emergency Support'
                      : 'Request Appointment'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Verified Clinic Summary Card */}
          <aside className="lg:col-span-5 rounded-[20px] bg-[#141D38] text-white p-6 sm:p-8 shadow-[0_18px_40px_-20px_rgba(20,29,56,0.38)]">
            <p className="text-[13px] font-medium text-[#D8C9EE]">
              Clinic Location
            </p>
            <h2
              className="mt-2 text-2xl font-medium text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sakthi Dental Clinic
            </h2>
            <p className="mt-4 flex items-start gap-2.5 text-[15px] text-[#E5E9F5] leading-[1.65]">
              <MapPin
                className="w-5 h-5 text-[#CEBBE9] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>Hosur, Tamil Nadu</span>
            </p>

            <div className="mt-8 pt-6 border-t border-white/15">
              <p className="text-sm leading-[1.7] text-[#D8DFF2]">
                &ldquo;You are always in safe hands. We are ready to help,
                anytime.&rdquo;
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
