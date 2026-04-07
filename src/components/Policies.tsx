import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sections = [
  {
    id: "terms",
    title: "Terms & Conditions",
    number: "01",
    content: [
      {
        type: "intro",
        text: "Welcome to Cocobino Media. By accessing our website or engaging our services — including video editing, 2D/3D animation, motion graphics, design & illustration, and brand identity — you agree to be fully bound by the following Terms and Conditions. Please read them carefully before placing any order or project request.",
      },
      {
        type: "subsection",
        heading: "1.1 Services Offered",
        text: "Cocobino Media provides professional creative services including, but not limited to: Video Editing (commercials, social media, YouTube, corporate content), 3D Animation (product visualizations, motion graphics), 2D Animation (explainer videos, character animations), Design & Illustration (brand identity, visual assets), Motion Graphics (intros, titles, infographics, promotional content), and Brand Identity Packages (logos, style guides, visual systems). All services are provided on a project basis. Scope, deliverables, timelines, and pricing are agreed upon before any work begins via our Discovery Call process.",
      },
      {
        type: "subsection",
        heading: "1.2 Project Agreement & Approval",
        text: "Before production begins, Cocobino Media will share a project brief, concept, or storyboard for client approval. Work will not proceed to the production stage without written or digital confirmation from the client. Any changes requested after approval may result in additional charges and revised delivery timelines.",
      },
      {
        type: "subsection",
        heading: "1.3 Intellectual Property & Ownership",
        text: "Upon full payment, the client receives full ownership of the final delivered files. Cocobino Media retains the right to display the work in its portfolio and on social media for promotional purposes, unless the client requests confidentiality in writing prior to project commencement. All raw project files, source files, and working documents remain the exclusive property of Cocobino Media unless explicitly included in the agreed project scope.",
      },
      {
        type: "subsection",
        heading: "1.4 Revisions Policy",
        text: "Each project package includes a specified number of revision rounds as agreed at the time of order. Revisions beyond the included rounds will be billed at our standard hourly rate. Revisions are limited to corrections within the original agreed scope; requests that change the direction or concept of the project are considered new work and will be quoted separately.",
      },
      {
        type: "subsection",
        heading: "1.5 Client Responsibilities",
        text: "The client is responsible for providing all necessary assets (footage, logos, scripts, brand guidelines, etc.) within the agreed timeline. Delays in providing required materials may result in delays to the delivery date. Cocobino Media is not liable for project delays caused by late asset submissions from the client.",
      },
      {
        type: "subsection",
        heading: "1.6 Limitation of Liability",
        text: "Cocobino Media's total liability for any claim arising from its services shall not exceed the amount paid by the client for the specific project in question. We are not liable for indirect, incidental, or consequential damages. All services are provided 'as is' based on the agreed project brief.",
      },
      {
        type: "subsection",
        heading: "1.7 Governing Law",
        text: "These Terms and Conditions are governed by the applicable laws of the jurisdiction in which Cocobino Media operates. Any disputes shall be resolved through mutual negotiation in good faith before pursuing formal legal proceedings.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    number: "02",
    content: [
      {
        type: "intro",
        text: "At Cocobino Media, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services. By using our website or engaging our services, you consent to the practices described in this policy.",
      },
      {
        type: "subsection",
        heading: "2.1 Information We Collect",
        text: "We may collect the following types of information: Personal Identification Information such as your name, email address, phone number, and company name when you fill out a contact form or place a project inquiry. Project-Related Information including briefs, scripts, brand materials, and any files or documents you share with us to complete your project. Usage Data such as IP address, browser type, pages visited, and time spent on our website, collected automatically through analytics tools to improve our services.",
      },
      {
        type: "subsection",
        heading: "2.2 How We Use Your Information",
        text: "The information we collect is used solely for legitimate business purposes, including: communicating with you about your project inquiries and orders; delivering and managing the services you have requested; sending project updates, invoices, and relevant communications; improving our website functionality and service quality; and complying with legal obligations. We do not sell, rent, or trade your personal information to any third parties for marketing purposes.",
      },
      {
        type: "subsection",
        heading: "2.3 Data Storage & Security",
        text: "We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. Your data is stored on secure servers. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security. We encourage you to share only the minimum information necessary for your project.",
      },
      {
        type: "subsection",
        heading: "2.4 Cookies",
        text: "Our website may use cookies to enhance your browsing experience and analyze website traffic. Cookies are small files stored on your device that help us understand how visitors interact with our site. You may disable cookies in your browser settings at any time; however, doing so may affect certain functionality of our website.",
      },
      {
        type: "subsection",
        heading: "2.5 Third-Party Links",
        text: "Our website may contain links to third-party websites or platforms (such as social media profiles). Cocobino Media is not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
      {
        type: "subsection",
        heading: "2.6 Your Rights",
        text: "You have the right to access, correct, or request deletion of your personal data held by Cocobino Media. To exercise any of these rights, please contact us directly at our official email address. We will respond to all legitimate requests within a reasonable timeframe.",
      },
    ],
  },
  {
    id: "refund",
    title: "Refund Policy",
    number: "03",
    content: [
      {
        type: "intro",
        text: "Cocobino Media is committed to delivering high-quality creative work that meets your expectations. We take pride in our process and communication at every stage. Please read our Refund Policy carefully before placing a project order, as our services involve creative labor and time investment.",
      },
      {
        type: "subsection",
        heading: "3.1 General Refund Terms",
        text: "Due to the nature of digital creative services, all payments are generally non-refundable once work has commenced. We strongly encourage all clients to review project briefs, concepts, and storyboards carefully before approving production to begin. Approval at any stage of the process (Discovery, Concept & Design, Production, or Delivery) constitutes acceptance of the work completed to that point.",
      },
      {
        type: "subsection",
        heading: "3.2 Refund Eligibility",
        text: "A full refund may be issued if Cocobino Media is unable to commence the project within the agreed start date and no work has been initiated. A partial refund may be considered if the project is cancelled by the client after the Concept & Design phase but before Production begins. The refundable amount will be calculated based on the work completed and hours invested up to the point of cancellation. No refund will be issued once the Production phase has begun. No refunds are applicable for completed and delivered projects, or for work where the client has already provided approval at any stage.",
      },
      {
        type: "subsection",
        heading: "3.3 Revision Before Refund",
        text: "If you are unsatisfied with the delivered work, we strongly encourage you to first utilize your included revision rounds before requesting a refund. Cocobino Media is committed to working with clients to reach a satisfactory outcome. Refund requests made without utilizing the revision process will not be entertained.",
      },
      {
        type: "subsection",
        heading: "3.4 How to Request a Refund",
        text: "To initiate a refund request, please contact us via email with your project details, order reference, and the specific reason for your request. All refund requests are reviewed on a case-by-case basis and will receive a response within 5–7 business days. Approved refunds will be processed within 10–14 business days through the original payment method.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping / Delivery Policy",
    number: "04",
    content: [
      {
        type: "intro",
        text: "As Cocobino Media is a digital creative services company, all of our deliverables are provided electronically. There is no physical shipping involved in any of our services. This Delivery Policy outlines how and when you will receive your completed project files.",
      },
      {
        type: "subsection",
        heading: "4.1 Digital Delivery",
        text: "All final project files — including but not limited to edited videos, animation files, motion graphics, design illustrations, and brand identity packages — are delivered digitally via secure file transfer platforms such as Google Drive, WeTransfer, Dropbox, or email, depending on file size and client preference. Delivery links will be shared directly with the client upon project completion.",
      },
      {
        type: "subsection",
        heading: "4.2 Delivery Timeline",
        text: "Project delivery timelines are agreed upon during the initial Discovery Call and confirmed in the project brief. As a general guideline: Video Editing projects typically take 3–7 business days; 2D/3D Animation projects range from 7–21 business days depending on complexity; Design & Illustration and Brand Identity projects are typically completed within 5–10 business days; Motion Graphics projects are generally delivered within 5–14 business days. Rush delivery options may be available upon request and may incur an additional fee. Timelines begin only after the client has provided all required assets and given approval to proceed.",
      },
      {
        type: "subsection",
        heading: "4.3 File Formats",
        text: "Final deliverables are provided in industry-standard formats as agreed in the project scope. Common formats include MP4, MOV, or AVI for video and animation; PNG, JPG, PDF, AI, or PSD for design and illustration work. If you require a specific format not included by default, please inform us before the project begins to ensure it is accommodated without additional delay.",
      },
      {
        type: "subsection",
        heading: "4.4 Re-Delivery",
        text: "If a delivered file is corrupted, inaccessible, or fails to open due to an issue on our end, Cocobino Media will re-send the file at no additional cost. Please report any delivery issues within 48 hours of receiving the delivery link. After this period, re-delivery may be subject to availability and a small administrative fee.",
      },
      {
        type: "subsection",
        heading: "4.5 File Storage",
        text: "Cocobino Media stores project files for a period of 30 days after final delivery. After this period, files may be deleted from our servers. Clients are strongly advised to download and back up all delivered files upon receipt. We are not responsible for files lost after the 30-day storage window.",
      },
    ],
  },
];

const Policies = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white mt-5">
      {/* Hero Header */}
      <div className="bg-[#111111] border-b border-[#2a2a2a] py-16 px-6 text-center">
        <p className="text-[#E8820C] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Legal Information
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Policies &{" "}
          <span className="text-[#E8820C]">Terms</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          Please read these policies carefully. By using Cocobino Media's services,
          you agree to the terms outlined below.
        </p>

        {/* Quick Nav */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-4 py-2 rounded-full border border-[#2a2a2a] text-gray-400 text-sm
                         hover:border-[#E8820C] hover:text-[#E8820C] transition-all duration-200"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Policy Sections */}
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">
        {sections.map((section, idx) => (
          <div key={section.id} id={section.id} className="scroll-mt-8">
            {/* Section Header */}
            <div className="flex items-start gap-4 mb-8">
              <span className="text-[#E8820C] text-4xl font-black opacity-30 leading-none select-none">
                {section.number}
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {section.title}
                </h2>
                <div className="mt-2 h-[2px] w-16 bg-[#E8820C] rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              {section.content.map((block, i) => (
                <div key={i}>
                  {block.type === "intro" ? (
                    <p className="text-gray-300 leading-relaxed text-[15px]">{block.text}</p>
                  ) : (
                    <div>
                      <h3 className="text-[#E8820C] font-semibold text-sm tracking-wide uppercase mb-2">
                        {block.heading}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-[14px]">{block.text}</p>
                    </div>
                  )}
                  {i < section.content.length - 1 && (
                    <div className="mt-6 border-b border-[#1e1e1e]" />
                  )}
                </div>
              ))}
            </div>

            {/* Divider between sections */}
            {idx < sections.length - 1 && (
              <div className="mt-16 border-b border-[#1e1e1e]" />
            )}
          </div>
        ))}

        {/* Bottom Note */}
        <div className="bg-[#141414] border border-[#E8820C]/20 rounded-2xl p-6 text-center">
          <p className="text-gray-400 text-sm leading-relaxed">
            For any questions regarding these policies, please reach out to us at{" "}
            <a href="mailto:hello@cocobinomedia.com" className="text-[#E8820C] hover:underline">
                Info@cocobinomedia.com
            </a>
      
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policies;