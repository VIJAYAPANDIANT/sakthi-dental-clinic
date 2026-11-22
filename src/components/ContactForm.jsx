import { useRef, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Mail,
  PhoneCall,
  RotateCcw,
  Send,
} from 'lucide-react';
import Button from './Button';
import { CLINIC_CONTACT } from './ContactInfo';

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

/**
 * Backend / form-service integration hook.
 * When VITE_CONTACT_FORM_ENDPOINT is configured, submits JSON to the endpoint;
 * otherwise returns a transparent demo-validated result without faking delivery.
 */
async function submitContactPayload(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Unable to send your message right now. Please call our clinic directly.');
    }

    return { mode: 'live', payload };
  }

  return { mode: 'demo', payload };
}

function validateFields(values) {
  const nextErrors = {};
  const trimmedName = values.fullName.trim();
  const trimmedEmail = values.email.trim();
  const digitsOnly = values.phone.replace(/\D/g, '');

  if (!trimmedName) {
    nextErrors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    nextErrors.fullName = 'Full name must be at least 2 characters.';
  }

  if (!trimmedEmail) {
    nextErrors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
    nextErrors.email = 'Please enter a valid email address (for example, name@example.com).';
  }

  if (!values.phone.trim()) {
    nextErrors.phone = 'Please enter your phone number.';
  } else if (!/^[+\d\s\-()]+$/.test(values.phone.trim())) {
    nextErrors.phone = 'Phone number can only include digits, spaces, parentheses, hyphens, or a leading +.';
  } else if (digitsOnly.length < 10 || digitsOnly.length > 13) {
    nextErrors.phone = 'Please enter a valid phone number with 10 to 13 digits.';
  }

  return nextErrors;
}

export default function ContactForm({ intent = 'appointment' }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submissionResult, setSubmissionResult] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const isEmergency = intent === 'emergency';

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
    setSubmitError('');

    if (touched[name]) {
      const fieldErrors = validateFields(updatedValues);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || '' }));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validateFields(values);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');

    const validationErrors = validateFields(values);
    setTouched({ fullName: true, email: true, phone: true, message: true });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.fullName) {
        nameRef.current?.focus();
      } else if (validationErrors.email) {
        emailRef.current?.focus();
      } else if (validationErrors.phone) {
        phoneRef.current?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
        inquiryType: isEmergency ? 'Emergency Dental Support' : 'General / Appointment Inquiry',
      };
      const result = await submitContactPayload(payload);
      setSubmissionResult(result);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Unable to submit the form right now. Please call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setTouched({});
    setSubmitError('');
    setSubmissionResult(null);
  };

  return (
    <div className="clinic-card p-6 sm:p-8 lg:p-9">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-[#F1EBF9]">
        <div>
          <p className="text-[13px] font-medium text-[#664999]">
            {isEmergency ? 'Urgent Dental Inquiry' : 'Send a Message'}
          </p>
          <h2
            className="mt-1 text-[24px] sm:text-[26px] font-semibold tracking-[-0.018em] text-[#141D38]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {isEmergency
              ? 'Request Emergency Support'
              : 'Request an Appointment or Callback'}
          </h2>
        </div>
      </div>

      {isEmergency && !submissionResult && (
        <div className="mt-6 rounded-2xl bg-[#FDF2F6] border border-[#F2D7E2] p-4 flex items-start gap-3">
          <PhoneCall
            className="w-5 h-5 text-[#A94B6E] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-[14px] leading-[1.6] text-[#5C243A]">
            For immediate dental pain, swelling, or injury, please call our
            clinic directly at{' '}
            <a
              href={CLINIC_CONTACT.phones[0].href}
              className="font-semibold underline underline-offset-2 hover:text-[#141D38] tabular-nums"
            >
              {CLINIC_CONTACT.phones[0].display}
            </a>
            .
          </p>
        </div>
      )}

      {submissionResult ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-6 space-y-5"
        >
          <div className="rounded-2xl bg-[#F8F5FD] border border-[#D8C9EE] p-6">
            <div className="flex items-start gap-3.5">
              {submissionResult.mode === 'live' ? (
                <CheckCircle2
                  className="w-6 h-6 text-[#664999] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
              ) : (
                <Info
                  className="w-6 h-6 text-[#664999] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
              )}

              <div>
                <h3
                  className="text-[20px] font-semibold text-[#141D38]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {submissionResult.mode === 'live'
                    ? 'Message Sent Successfully'
                    : 'Form Validated (Demo Preview Mode)'}
                </h3>

                <p className="mt-2 text-[14.5px] leading-[1.7] text-[#434C66]">
                  {submissionResult.mode === 'live'
                    ? `Thank you, ${submissionResult.payload.fullName}. Your inquiry has been received by Sakthi Dental Clinic.`
                    : `All required fields passed validation for ${submissionResult.payload.fullName}. Because no backend form service is connected in this development preview, no email or message has been sent yet. To reach the clinic right away, please call or email directly below.`}
                </p>
              </div>
            </div>

            <dl className="mt-5 pt-5 border-t border-[#E5DDF5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-xs font-medium text-[#66708A]">Full Name</dt>
                <dd className="mt-0.5 font-semibold text-[#141D38]">
                  {submissionResult.payload.fullName}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#66708A]">Phone Number</dt>
                <dd className="mt-0.5 font-semibold text-[#141D38] tabular-nums">
                  {submissionResult.payload.phone}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium text-[#66708A]">Email Address</dt>
                <dd className="mt-0.5 font-semibold text-[#141D38]">
                  {submissionResult.payload.email}
                </dd>
              </div>
              {submissionResult.payload.message && (
                <div className="sm:col-span-2">
                  <dt className="text-xs font-medium text-[#66708A]">Message</dt>
                  <dd className="mt-0.5 text-[#434C66]">
                    {submissionResult.payload.message}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={CLINIC_CONTACT.phones[0].href}
              variant="primary"
              size="md"
            >
              <PhoneCall className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call {CLINIC_CONTACT.phones[0].display}</span>
            </Button>

            <Button
              href={CLINIC_CONTACT.email.href}
              variant="outline"
              size="md"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Email Clinic</span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Fill Out Again</span>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
          {submitError && (
            <div
              role="alert"
              className="rounded-xl bg-[#FDF2F6] border border-[#F2D7E2] px-4 py-3 flex items-start gap-2.5 text-sm text-[#8E3556]"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label
              htmlFor="contact-full-name"
              className="block text-sm font-semibold text-[#141D38] mb-1.5"
            >
              Full Name <span className="text-[#A94B6E]" aria-hidden="true">*</span>
            </label>
            <input
              ref={nameRef}
              id="contact-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'contact-full-name-error' : undefined}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] transition-colors duration-150 focus:outline-none ${
                errors.fullName
                  ? 'border-[#C85A82] bg-[#FFFBFD] focus:border-[#A94B6E]'
                  : 'border-[#D8C9EE] focus:border-[#664999]'
              }`}
            />
            {errors.fullName && (
              <p
                id="contact-full-name-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#A94B6E]"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Address */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-[#141D38] mb-1.5"
              >
                Email Address <span className="text-[#A94B6E]" aria-hidden="true">*</span>
              </label>
              <input
                ref={emailRef}
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="name@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] transition-colors duration-150 focus:outline-none ${
                  errors.email
                    ? 'border-[#C85A82] bg-[#FFFBFD] focus:border-[#A94B6E]'
                    : 'border-[#D8C9EE] focus:border-[#664999]'
                }`}
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  role="alert"
                  className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#A94B6E]"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-sm font-semibold text-[#141D38] mb-1.5"
              >
                Phone Number <span className="text-[#A94B6E]" aria-hidden="true">*</span>
              </label>
              <input
                ref={phoneRef}
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+91 98628 90897"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] tabular-nums transition-colors duration-150 focus:outline-none ${
                  errors.phone
                    ? 'border-[#C85A82] bg-[#FFFBFD] focus:border-[#A94B6E]'
                    : 'border-[#D8C9EE] focus:border-[#664999]'
                }`}
              />
              {errors.phone && (
                <p
                  id="contact-phone-error"
                  role="alert"
                  className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#A94B6E]"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message (Optional) */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-[#141D38] mb-1.5"
            >
              Message <span className="font-normal text-[#66708A]">(Optional)</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              placeholder="Share your dental concern, preferred treatment, or any questions for our team."
              className="w-full rounded-xl border border-[#D8C9EE] bg-white px-4 py-3 text-[15px] text-[#141D38] placeholder:text-[#8E96AB] transition-colors duration-150 focus:border-[#664999] focus:outline-none resize-y"
            />
          </div>

          <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{isSubmitting ? 'Validating...' : 'Submit Inquiry'}</span>
            </Button>

            <p className="text-xs text-[#66708A]">
              Fields marked with <span className="text-[#A94B6E]">*</span> are required.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
