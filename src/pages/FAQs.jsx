import Button from '../components/Button';

export default function FAQs() {
  return (
    <section className="clinic-section bg-gradient-to-b from-[#F8F5FD] to-white">
      <div className="clinic-container">
        <div className="max-w-3xl">
          <p className="text-[13px] font-medium text-[#664999]">
            <span>Sakthi Dental Clinic</span>
            <span aria-hidden="true" className="mx-2 text-[#B6A1D8]">
              ·
            </span>
            <span className="text-[#434C66]">FAQs</span>
          </p>
          <h1
            className="mt-3 font-semibold tracking-[-0.025em] leading-[1.15] text-[#141D38]"
            style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-[16px] leading-[1.7] text-[#434C66]">
            Have questions about visiting Sakthi Dental Clinic in Hosur, Tamil
            Nadu? You are always in safe hands—reach out to our care team
            anytime for guidance before your visit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button to="/contact?intent=appointment" variant="primary" size="md">
              Ask a Question
            </Button>
            <Button to="/" variant="outline" size="md">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
