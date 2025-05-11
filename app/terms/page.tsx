import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Terms of Service | Pixel Edu",
  description: "Terms of Service for Pixel Edu",
}

export default function TermsPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center space-y-6 mb-12">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Legal</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">Terms of Service</h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Pixel Edu. These Terms of Service ("Terms") govern your access to and use of the Pixel Edu website,
          services, and applications (collectively, the "Service"). By accessing or using the Service, you agree to be
          bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
        </p>

        <h2>2. Definitions</h2>
        <p>
          <strong>"Pixel Edu"</strong> refers to our company, our website, our Service, or a combination of all or some
          of the preceding.
        </p>
        <p>
          <strong>"You"</strong> refers to you, the user of our Service, or your authorized representative.
        </p>
        <p>
          <strong>"Content"</strong> refers to any material, such as text, images, or other information that is posted,
          uploaded, linked to, or otherwise made available on the Service.
        </p>

        <h2>3. Account Registration</h2>
        <p>
          To access certain features of the Service, you may be required to register for an account. You agree to
          provide accurate, current, and complete information during the registration process and to update such
          information to keep it accurate, current, and complete.
        </p>
        <p>
          You are responsible for safeguarding your account credentials and for all activities that occur under your
          account. You agree to notify Pixel Edu immediately of any unauthorized use of your account or any other breach
          of security.
        </p>

        <h2>4. User Content</h2>
        <p>
          You retain ownership of any Content that you submit, post, or display on or through the Service. By
          submitting, posting, or displaying Content on or through the Service, you grant Pixel Edu a worldwide,
          non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit,
          display, and distribute such Content.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to use the Service to:</p>
        <ul>
          <li>Violate any applicable law or regulation</li>
          <li>Infringe the intellectual property rights of others</li>
          <li>Harass, abuse, or harm another person</li>
          <li>Send spam or other unsolicited messages</li>
          <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
          <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
        </ul>

        <h2>6. Termination</h2>
        <p>
          Pixel Edu may terminate or suspend your access to all or part of the Service, without notice, for any conduct
          that Pixel Edu, in its sole discretion, believes is in violation of these Terms or is harmful to other users
          of the Service, Pixel Edu, or third parties, or for any other reason.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
          INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
          AND NON-INFRINGEMENT.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL PIXEL EDU BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
          RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          Pixel Edu reserves the right to modify or replace these Terms at any time. If a revision is material, Pixel
          Edu will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
          change will be determined at Pixel Edu's sole discretion.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Pixel
          Edu is established, without regard to its conflict of law provisions.
        </p>

        <h2>11. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at hello@pixeledu.io.</p>
      </div>
    </div>
  )
}
