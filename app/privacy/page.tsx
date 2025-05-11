import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Privacy Policy | Pixel Edu",
  description: "Privacy Policy for Pixel Edu",
}

export default function PrivacyPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center text-center space-y-6 mb-12">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 rounded-full">Legal</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter">Privacy Policy</h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">Last updated: May 11, 2025</p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h2>1. Introduction</h2>
        <p>
          At Pixel Edu, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you use our Service.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We collect several types of information from and about users of our Service, including:</p>
        <ul>
          <li>
            <strong>Personal Data:</strong> This includes information such as your name, email address, and other
            identifiers that you provide when registering for an account or using our Service.
          </li>
          <li>
            <strong>Usage Data:</strong> We automatically collect information about how you interact with our Service,
            including your browsing actions, search queries, and other usage patterns.
          </li>
          <li>
            <strong>Device Information:</strong> We collect information about the device you use to access our Service,
            including the hardware model, operating system, unique device identifiers, and mobile network information.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent, and address technical issues</li>
          <li>
            To provide you with news, special offers, and general information about other goods, services, and events
          </li>
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>We may disclose your personal information in the following circumstances:</p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of Pixel Edu</li>
          <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>To protect the personal safety of users of the Service or the public</li>
          <li>To protect against legal liability</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the
          security of any personal information we process. However, please note that no method of transmission over the
          Internet or method of electronic storage is 100% secure.
        </p>

        <h2>6. Your Data Protection Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
        <ul>
          <li>The right to access, update, or delete your information</li>
          <li>The right to rectification (to correct inaccurate data)</li>
          <li>The right to object to our processing of your personal data</li>
          <li>The right of restriction (to request that we restrict processing of your data)</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          Our Service is not intended for use by children under the age of 16. We do not knowingly collect personally
          identifiable information from children under 16. If you are a parent or guardian and you are aware that your
          child has provided us with personal data, please contact us.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at hello@pixeledu.io.</p>
      </div>
    </div>
  )
}
